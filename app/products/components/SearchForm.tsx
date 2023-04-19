"use client";

import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const valueSearch = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (valueSearch.current !== null) {
      router.push(`/products?name=${valueSearch.current.value}`);
      valueSearch.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto py-24 px-4 lg:px-36 bg-clr-primary-1 flex justify-center"
    >
      <input
        ref={valueSearch}
        type="text"
        placeholder="Search"
        className="outline-none basis-1/3 border-y-2 border-l-2 border-clr-primary-8 rounded-l-md py-1.5 px-4 tracking-widest"
      />
      <button
        type="submit"
        className="border-2 basis-1/6 border-clr-primary-8 rounded-r-md py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5 hover:border-clr-primary-5"
      >
        Search
      </button>
    </form>
  );
}
