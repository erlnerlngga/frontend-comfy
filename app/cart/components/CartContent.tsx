"use client";

import ProductCart from "./ProductCart";
import Link from "next/link";
import { useState } from "react";
import Login from "@/app/components/Login";
import useStore from "../../../utils/store";

export default function CartContent({ isLogin }: { isLogin: boolean }) {
  const [login, setLogin] = useState(false);
  const carts = useStore((state) => state.carts);

  const grandTotal = carts.reduce((prev, current) => {
    return prev + current.total;
  }, 0);

  const finalTotal = grandTotal - 5.34;

  const closeLogin = () => {
    setLogin(false);
  };

  return (
    <article className="container my-24 lg:my-36 mx-auto px-4 lg:px-36">
      <div className="mb-12 hidden lg:block">
        <div className="flex justify-evenly mb-8">
          <p className="text-gray-500">Item</p>
          <p className="text-gray-500">Price</p>
          <p className="text-gray-500">Quantity</p>
          <p className="text-gray-500">Subtotal</p>
        </div>
        <hr className="border-1 border-gray-300" />
      </div>

      <div className="flex flex-col gap-12 mb-12">
        {carts.map((item) => {
          return <ProductCart key={item.id} data={item} />;
        })}
      </div>

      <hr className="border-1 border-gray-300 mb-8" />

      <div className="flex justify-between mb-24">
        <Link href="/products">
          <button className="rounded-md text-sm lg:text-base py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest">
            Continue Shopping
          </button>
        </Link>
        <button className="rounded-md text-sm lg:text-base py-1.5 px-4 bg-gray-900 font-medium text-white tracking-widest">
          Clear Shopping Cart
        </button>
      </div>

      <div className="flex lg:justify-end mb-6">
        <div className="basis-full lg:basis-1/3 border-2 border-clr-primary-1 rounded-md p-8">
          <div className="flex justify-between mb-1">
            <p className="tracking-widest text-gray-700 font-bold">Subtotal:</p>
            <p className="tracking-widest text-gray-700 font-bold">
              ${grandTotal}
            </p>
          </div>

          <div className="flex justify-between mb-4">
            <p className="tracking-widest">Shipping Fee:</p>
            <p className="tracking-widest">$5.34</p>
          </div>

          <hr className="border-1 border-gray-300 mb-6" />

          <div className="flex justify-between">
            <p className="text-2xl text-gray-700 font-bold">Order Total : </p>
            <p className="text-2xl text-gray-700 font-bold tracking-widest">
              ${finalTotal}
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:justify-end">
        <div className="basis-full lg:basis-1/3">
          <button
            onClick={() => setLogin(true)}
            className="rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
          >
            {isLogin ? "Process to Payment" : "Login"}
          </button>
        </div>
      </div>

      {login && <Login closeLogin={closeLogin} />}
    </article>
  );
}
