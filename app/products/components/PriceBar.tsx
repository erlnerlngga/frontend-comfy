"use client";

import { FocusEvent, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function PriceBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleMinPrice = (e: FocusEvent<HTMLInputElement>) => {
    router.push(pathname + "?" + createQueryString("minPrice", e.target.value));
  };

  const handleMaxPrice = (e: FocusEvent<HTMLInputElement>) => {
    router.push(pathname + "?" + createQueryString("maxPrice", e.target.value));
  };

  return (
    <form className="flex flex-col gap-3">
      <input
        onBlur={handleMinPrice}
        type="number"
        placeholder="Min Price"
        min={0}
        className="outline-none py-1.5 px-4 w-1/2 lg:w-full tracking-widest rounded-md border-2 border-clr-primary-8"
      />
      <input
        onBlur={handleMaxPrice}
        type="number"
        placeholder="Max Price"
        min={0}
        className="outline-none py-1.5 px-4 w-1/2 lg:w-full tracking-widest rounded-md border-2 border-clr-primary-8"
      />
    </form>
  );
}
