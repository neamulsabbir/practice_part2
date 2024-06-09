import CartPaymentAndTrmsAndPlace from "./CartPaymentAndTrmsAndPlace";

const CartSummary = ({ data,lang }) => {
  const totalPrice = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  return (
    <>
      <div className="h-fit col-span-2 p-4 rounded w-full shadow-md">
        <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
          order summary
        </h4>
        <div className="space-y-2">
          {data?.items?.length > 0 &&
            data?.items?.map((item) => (
              <div key={item._id} className="flex justify-between">
                <div className="flex gap-x-2">
                  <p className="text-gray-600">x{item?.quantity}</p>
                  <h5 className="text-gray-800 font-medium">
                    {item?.product_id?.name}
                  </h5>
                </div>
                <p className="text-gray-800 font-medium">
                  ${item?.product_id?.price}
                </p>
              </div>
            ))}
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>subtotal</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
          <p>shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between text-gray-800 font-medium py-3 uppercase">
          <p className="font-semibold">Total</p>
          <p>${totalPrice?.toFixed(2)}</p>
        </div>

        <CartPaymentAndTrmsAndPlace lang={lang} />
      </div>
    </>
  );
};

export default CartSummary;
