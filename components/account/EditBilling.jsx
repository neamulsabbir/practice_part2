"use client";

import editBilling from "@/actions/editBilling";
import { useEffect, useState } from "react";

const EditBilling = ({ session }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    phone: "",
    zip: "",
    city: "",
  });
  useEffect(() => {
    if (!session?.user) return;
    const email = session.user.email;
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://lwskart-bice.vercel.app/api/user?email=${email}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();
        if (data?.billing) {
          setUser(data?.billing);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [session?.user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const obj = Object.fromEntries(data);
    editBilling(obj, session?.user?.email);
  };
  return (
    <div className="max-w-md mx-auto bg-white  p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">
        Billing Address
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-x-4">
          <div className="w-1/2">
            <label className="block text-zinc-700 ">First Name</label>
            <input
              name="firstName"
              type="text"
              value={user?.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              required
              className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-zinc-700 ">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={user?.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              required
              className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-zinc-700 ">
            Full Address
          </label>
          <input
            name="address"
            id="address"
            required
            value={user?.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-zinc-700 ">
            Zip/Postal Code
          </label>
          <input
            name="zip"
            id="zipCode"
            required
            value={user?.zip}
            onChange={(e) => setUser({ ...user, zip: e.target.value })}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-zinc-700 ">
            City
          </label>
          <input
            name="city"
            id="city"
            required
            value={user?.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-zinc-700 ">
            Country
          </label>
          <input
            name="country"
            id="country"
            required
            value={user?.country}
            onChange={(e) => setUser({ ...user, country: e.target.value })}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-zinc-700 ">
            Phone Number
          </label>
          <input
            name="phone"
            id="phone"
            required
            value={user?.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            type="text"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-zinc-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button className="w-full bg-primary text-white py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBilling;
