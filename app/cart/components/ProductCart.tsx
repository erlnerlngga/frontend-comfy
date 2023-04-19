"use client";

import Image from "next/image";
import imag from "../../../public/products/product-3.jpg";
import { IoRemove, IoAdd, IoTrash } from "react-icons/io5";
import useStore, { CartType } from "../../../utils/store";

export default function ProductCart({ data }: { data: CartType }) {
  const addQuantity = useStore((state) => state.addQuantity);
  const reduceQuantity = useStore((state) => state.removeQuantity);
  const removeCart = useStore((state) => state.removeCart);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={data.image}
          alt="product"
          height={150}
          width={140}
          className="rounded-md"
        />
        <div>
          <p className="capitalize font-bold text-sm lg:text-base">
            {data.name}
          </p>
          <p className="text-gray-500 inline mr-2 text-sm lg:text-base">
            Color:
          </p>
          <span className={`rounded-md px-2 ${data.color}`}></span>
          <p className="lg:hidden text-clr-primary-7 tracking-widest text-sm lg:text-base">
            ${data.price}
          </p>
        </div>
      </div>

      <p className="tracking-widest text-clr-primary-6 hidden lg:block">
        ${data.price}
      </p>

      <div className="flex gap-2 items-center">
        <button onClick={() => addQuantity(data.id)}>
          <IoRemove className="lg:text-2xl font-bold" />
        </button>
        <h1 className="lg:text-2xl font-bold">{data.quantity}</h1>
        <button onClick={() => reduceQuantity(data.id)}>
          <IoAdd className="lg:text-2xl font-bold" />
        </button>
      </div>

      <p className="tracking-widest text-gray-700 hidden lg:block">
        ${data.total}
      </p>

      <button onClick={() => removeCart(data.id)}>
        <IoTrash className="text-white p-1 rounded-md bg-red-700 w-6 h-6 cursor-pointer" />
      </button>
    </div>
  );
}
