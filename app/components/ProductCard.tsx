import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { ProductsType } from "../products/page";

interface PropTypes {
  products: ProductsType;
}

export default function ProductCard({ products }: PropTypes) {
  return (
    <div>
      <div className="group relative">
        <div className="h-64 w-20 object-cover">
          <Image
            src={products.images[0].url}
            alt="product"
            fill
            className="rounded-md"
          />
        </div>
        <div className="absolute rounded-md transition duration-300 group-hover:bg-gray-900 group-hover:bg-opacity-50 top-0 left-0 w-full h-full grid place-content-center">
          <Link href={`/products/${products.id}`}>
            <IoSearch className="w-10 h-10 rounded-full px-2 bg-clr-primary-7 text-white cursor-pointer transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 px-2">
        <p className=" tracking-widest capitalize">{products.name}</p>
        <p className="text-clr-primary-6 tracking-widest font-semibold">
          ${products.price}
        </p>
      </div>
    </div>
  );
}
