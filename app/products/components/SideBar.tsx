import Link from "next/link";
import { SearchParamsType } from "../page";
import PriceBar from "./PriceBar";
import FreeShipping from "./FreeShipping";
import ButtonColor from "./ButtonColor";

interface PropsType {
  searchParams: SearchParamsType;
  category: { id: string; name: string }[];
  company: { id: string; name: string }[];
}

export default function SideBar({
  searchParams,
  category,
  company,
}: PropsType) {
  const clearRoute = searchParams.name
    ? `/products?name=${searchParams.name}`
    : "/products";

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="font-bold mb-3 text-gray-700">Category</h2>
        <div className="flex flex-col gap-1.5 items-start">
          <Link
            href={{
              pathname: "/products",
              query: {
                ...searchParams,
                category: undefined,
              },
            }}
            className="text-gray-400"
          >
            All
          </Link>
          {category?.map((item) => {
            return (
              <Link
                key={item.id}
                href={{
                  pathname: "/products",
                  query: {
                    ...searchParams,
                    category: `${item.name}`,
                  },
                }}
                className="text-gray-400 capitalize"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-3 text-gray-700">Company</h2>
        <div className="flex flex-col gap-1.5 items-start">
          <Link
            href={{
              pathname: "/products",
              query: {
                ...searchParams,
                company: undefined,
              },
            }}
            className="text-gray-400 capitalize"
          >
            all
          </Link>
          {company?.map((item) => {
            return (
              <Link
                key={item.id}
                href={{
                  pathname: "/products",
                  query: {
                    ...searchParams,
                    company: `${item.name}`,
                  },
                }}
                className="text-gray-400 capitalize"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-3 text-gray-700">Colors</h2>
        <div className="flex gap-2">
          <ButtonColor searchParams={searchParams} />
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-3 text-gray-700">Prices</h2>
        <PriceBar />
      </div>

      <div>
        <FreeShipping />
      </div>

      <div>
        <Link
          href={`${clearRoute}`}
          className="capitalize py-1.5 px-4 rounded-md text-white bg-red-800 tracking-widest transition hover:bg-red-600"
        >
          clear filter
        </Link>
      </div>
    </div>
  );
}
