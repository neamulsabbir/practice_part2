"use client";
import placeOrder from "@/actions/placeOrder";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ session, totalPrice, lang }) => {
  const [checkoutDetails, setCheckoutDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    phone: "",
    zip: "",
    city: "",
    company: "",
    email: session?.user?.email || "",
  });
  const {shippingAddress,city,email,phone,lastName,firstName} = lang;
  const router = useRouter();
  const [cartProducts, setCartProducts] = useState({});
  useEffect(() => {
    const getOrderItems = async () => {
      const orderItems = await fetch(
        `http://localhost:3000/api/cart/${session?.user?.id}?length=true`
      );
      const items = await orderItems.json();
      setCartProducts(items);
    };
    getOrderItems();
    const getData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/user?email=${session?.user?.email}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();

        setCheckoutDetails((prevDetails) => ({
          ...prevDetails,
          ...data?.shipping,
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (session.user.email) {
      getData();
    }
  }, [session.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await placeOrder({
      ...cartProducts,
      totalPrice,
      shipping: checkoutDetails,
    });
    if (result) {
      router.push(`/invoice/${result.id}`);
    }
  };
  return (
    <div className="col-span-6 border border-gray-200 p-4 rounded">
      <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="text-gray-600">
                {firstName} <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={checkoutDetails?.firstName}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    firstName: e.target.value,
                  })
                }
                required
                name="firstName"
                id="first-name"
                className="input-box"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-gray-600">
               {lastName} <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={checkoutDetails?.lastName}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    lastName: e.target.value,
                  })
                }
                name="lastName"
                id="last-name"
                className="input-box"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="text-gray-600">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={checkoutDetails?.company}
              onChange={(e) =>
                setCheckoutDetails({
                  ...checkoutDetails,
                  company: e.target.value,
                })
              }
              id="company"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600">
              {city}
            </label>
            <input
              type="text"
              name="city"
              value={checkoutDetails?.city}
              onChange={(e) =>
                setCheckoutDetails({
                  ...checkoutDetails,
                  city: e.target.value,
                })
              }
              id="city"
              className="input-box"
            />
          </div>
          <div className="flex gap-x-4">
            <div className="w-1/2">
              <label htmlFor="region" className="text-gray-600">
                Country/Region
              </label>
              <input
                type="text"
                name="country"
                value={checkoutDetails?.country}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    country: e.target.value,
                  })
                }
                id="region"
                className="input-box"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="zip" className="text-gray-600">
                Zip/Postal Code
              </label>
              <input
                type="text"
                value={checkoutDetails?.zip}
                onChange={(e) =>
                  setCheckoutDetails({
                    ...checkoutDetails,
                    zip: e.target.value,
                  })
                }
                name="zip"
                id="zip"
                className="input-box"
              />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="text-gray-600">
              {shippingAddress}
            </label>
            <input
              type="text"
              name="address"
              value={checkoutDetails?.address}
              onChange={(e) =>
                setCheckoutDetails({
                  ...checkoutDetails,
                  address: e.target.value,
                })
              }
              id="address"
              className="input-box"
            />
          </div>

          <div>
            <label htmlFor="phone" className="text-gray-600">
             {phone}
            </label>
            <input
              type="text"
              value={checkoutDetails?.phone}
              onChange={(e) =>
                setCheckoutDetails({
                  ...checkoutDetails,
                  phone: e.target.value,
                })
              }
              name="phone"
              id="phone"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">
              {email}
            </label>
            <input
              type="email"
              value={checkoutDetails?.email}
              onChange={(e) =>
                setCheckoutDetails({
                  ...checkoutDetails,
                  email: e.target.value,
                })
              }
              name="email"
              id="email"
              className="input-box"
            />
          </div>

          <input id="submitBtn" type="submit" value="submit" hidden />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
