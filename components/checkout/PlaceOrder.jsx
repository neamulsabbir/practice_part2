"use client";

const PlaceOrderButton = () => {
  const onClick = () => {
    const btn = document.getElementById("submitBtn");
    btn.click();
  };
  return (
    <>
      <button
        onClick={onClick}
        className={`block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium `}
      >
        Place order
      </button>
    </>
  );
};

export default PlaceOrderButton;
