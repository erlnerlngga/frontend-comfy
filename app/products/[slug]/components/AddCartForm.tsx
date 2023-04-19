"use client";

import { FormEvent, useState, useRef } from "react";

import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ColorButton from "./ColorButton";
import ImageContent from "./ImageContent";
import { ProductDetailType } from "../page";
import Login from "@/app/components/Login";
import Stars from "./Stars";
import useStore from "../../../../utils/store";

export default function AddCartForm({
  product,
  isLogin,
}: {
  product: ProductDetailType;
  isLogin: boolean;
}) {
  const [login, setLogin] = useState(false);
  const [colorButton, setColorButton] = useState(`${product.colors[0].name}`);

  const quan = useRef<HTMLInputElement>(null);
  const addCart = useStore((state) => state.addCarts);

  const handleSetColor = (color: string) => {
    setColorButton(color);
  };

  const closeLogin = () => {
    setLogin(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin && quan.current !== null) {
      addCart({
        id: product.id,
        name: product.name,
        image: product.images[0].url,
        color: colorButton,
        price: product.price,
        stock: product.stock,
        quantity: parseInt(quan.current.value),
        total: product.price * parseInt(quan.current.value),
      });
    }

    setLogin(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto my-24 lg:my-36  px-4 lg:px-36 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center"
    >
      <div>
        <ImageContent images={product?.images} />
      </div>

      <div>
        <h1 className="text-4xl text-gray-700 font-bold mb-3 capitalize">
          {product?.name}
        </h1>

        <div className="flex gap-4 items-center mb-3">
          <div className="flex items-center gap-1">
            <Stars star={product?.star} />
          </div>

          <p className="text-gray-500">({product?.review} customer reviews)</p>
        </div>

        <p className="text-xl text-clr-primary-6 font-bold tracking-widest mb-3">
          ${product?.price}
        </p>

        <p className="text-gray-500 leading-8 mb-6">{product?.description}</p>

        <div className="flex justify-between items-center w-1/2 mb-4">
          <p className="font-bold text-gray-700">Available:</p>
          <p className="text-gray-500">
            {product?.stock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className="flex justify-between items-center w-1/2 mb-4">
          <p className="font-bold text-gray-700">Brand:</p>
          <p className="text-gray-500 capitalize">{product?.company.name}</p>
        </div>

        <hr className="border-1 border-gray-300 mb-8" />

        <div className="flex justify-between items-center w-1/2 mb-4">
          <p className="font-bold text-gray-700">Colors:</p>
          <div className="flex items-center gap-2">
            <ColorButton
              colors={product?.colors}
              color={colorButton}
              setColor={handleSetColor}
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-1/2 mb-12">
          <p className="font-bold text-gray-700">Quantity:</p>
          <input
            ref={quan}
            disabled={product?.stock ? false : true}
            type="number"
            min={1}
            max={product?.stock}
            placeholder="1"
            className="outline-none py-1.5 w-1/3 lg:w-1/4 px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
          />
        </div>

        <button
          type="submit"
          disabled={product?.stock ? false : true}
          className="rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
        >
          Add To Cart
        </button>
      </div>

      {login && <Login closeLogin={closeLogin} />}
    </form>
  );
}
