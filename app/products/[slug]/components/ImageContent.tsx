"use client";

import Image from "next/image";

import { useState } from "react";

interface PropType {
  images: { id: string; url: string; product_id: string }[];
}

export default function ImageContent({ images }: PropType) {
  const [currentImage, setCurrentImage] = useState(`${images[0].url}`);

  return (
    <>
      <Image
        src={currentImage}
        height={600}
        width={610}
        alt="product"
        className="rounded-md mb-4"
      />

      <div className="flex gap-3 lg:justify-between flex-wrap">
        {images.map((item, index) => {
          return (
            <Image
              key={item.id}
              src={item.url}
              onClick={() => setCurrentImage(`${item.url}`)}
              height={100}
              width={100}
              alt={`product-${index + 1}`}
              className={`rounded-md cursor-pointer ${
                currentImage === item.url ? "border-2 border-clr-primary-8" : ""
              }`}
            />
          );
        })}
      </div>
    </>
  );
}
