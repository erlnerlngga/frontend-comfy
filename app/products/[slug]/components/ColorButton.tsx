"use client";

import { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

interface PropType {
  colors: { id: string; name: string }[];
  color: string;
  setColor: (color: string) => void;
}

export default function ColorButton({ colors, color, setColor }: PropType) {
  return (
    <>
      {colors.map((item) => {
        return (
          <div
            key={item.id}
            onClick={() => setColor(`${item.name}`)}
            className="relative w-6 h-6"
          >
            <button
              className={`w-full h-full rounded-full bg-[${
                item.name
              }] opacity-50 ${color === `${item.name}` ? "opacity-100" : ""}`}
            ></button>
            {color === `${item.name}` && (
              <IoCheckmarkSharp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white cursor-pointer" />
            )}
          </div>
        );
      })}
    </>
  );
}
