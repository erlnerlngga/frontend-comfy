"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FreeShipping() {
  const [isChecked, setIsChecked] = useState(false);
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

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <form className="flex items-center gap-16">
      <label htmlFor="ship" className="text-gray-700">
        Free Shipping
      </label>
      <button
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("freeShipping", `${!isChecked}`)
          );
        }}
      >
        <input
          type="checkbox"
          id="ship"
          name="ship"
          checked={isChecked}
          onChange={handleChange}
        />
      </button>
    </form>
  );
}
