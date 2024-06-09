"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "@/public/images/logo-white.svg";
import generatePDF from "react-to-pdf";

const InvoicePdf = ({ id, dataJson }) => {
  const data = JSON.parse(dataJson);

  const subTotal = data?.items?.reduce(
    (sum, item) => item?.product_id?.price * item?.quantity + sum,
    0
  );
  const { firstName, lastName, city, address, country, phone, zip } =
    data?.shipping;
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  const date = new Date(data?.createdAt).toLocaleDateString();

  const invoiceRef = useRef();
  const downloadPDF = () => {
    const options = {
      filename: "invoice.pdf",
      page: {
        margin: 20,
        format: "b4",
      },
    };
    generatePDF(invoiceRef, options);
  };
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      <div className="sm:w-11/12 lg:w-3/4 mx-auto">
        <div
          ref={invoiceRef}
          className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl"
        >
          <div className="flex justify-between">
            <div>
              <Image src={logo} alt="logo" />

              <h1 className="mt-2 text-lg md:text-xl font-semibold text-primary">
                LWSkart
              </h1>
            </div>

            <div className="text-end">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Invoice #
              </h2>
              <span className="mt-1 block text-gray-500">{id}</span>

              <address className="mt-4 not-italic text-gray-800">
                H 106/2, North Badda,
                <br />
                Badda, Dhaka - 1212
                <br />
                Bangladesh
                <br />
              </address>
            </div>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Bill to:</h3>
              <h3 className="text-lg font-semibold text-gray-800">
                {firstName + " " + lastName}
              </h3>
              <address className="mt-2 text-gray-500">
                {address},
                <br />
                {city},{zip},
                <br />
                {country}
                <br />
              </address>
            </div>

            <div className="sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Invoice date:
                  </dt>
                  <dd className="col-span-2 text-gray-500">{date}</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="border border-gray-200 p-4 rounded-lg space-y-4">
              <div className="hidden sm:grid sm:grid-cols-5">
                <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                  Item
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase">
                  Qty
                </div>
                <div className="text-start text-xs font-medium text-gray-500 uppercase">
                  Rate
                </div>
                <div className="text-end text-xs font-medium text-gray-500 uppercase">
                  Amount
                </div>
              </div>

              <div className="hidden sm:block border-b border-gray-200"></div>
              {data?.items?.map(({ _id, product_id, quantity }) => (
                <div
                  key={_id}
                  className="grid grid-cols-3 sm:grid-cols-5 gap-2"
                >
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800">
                      {product_id?.name}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800">{quantity}</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800">
                      {product_id?.discount_price}
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800">
                      ${(product_id?.discount_price * quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex sm:justify-end">
            <div className="w-full max-w-2xl sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Subtotal:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    ${subTotal.toFixed(2)}
                  </dd>
                </dl>

                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Total:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    ${total.toFixed(2)}
                  </dd>
                </dl>

                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800">
                    Tax:
                  </dt>
                  <dd className="col-span-2 text-gray-500">
                    ${tax.toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <h4 className="text-lg font-semibold text-gray-800">Thank you!</h4>
            <p className="text-gray-500">
              If you have any questions concerning this invoice, use the
              following contact information:
            </p>
            <div className="mt-2">
              <p className="block text-sm font-medium text-gray-800">
                miremon5222@gmail.com
              </p>
              <p className="block text-sm font-medium text-gray-800">
                +880 1741-235222
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm text-gray-500">© 2024 LWSkart.</p>
        </div>
        <div className="mt-6 flex justify-end gap-x-3">
          <button
            onClick={downloadPDF}
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Invoice PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePdf;
