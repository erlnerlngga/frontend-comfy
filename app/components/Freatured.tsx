import ProductCard from "./ProductCard";
import axios from "axios";
import Link from "next/link";
import { ProductsType } from "../products/page";

const getAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:8080/product");

    return res.data.data.product;
  } catch (error) {
    console.log(error);
  }
};

export default async function Featured() {
  const products = await getAllProducts();

  return (
    <article className="container mx-auto mt-24 lg:mt-36 pt-20 pb-24 px-4 lg:px-36 bg-gray-100">
      <div className="text-center mb-16">
        <h1 className="relative capitalize text-3xl font-bold inline-block text-gray-700 after:absolute after:top-[40px] after:border-b-4 after:border-clr-primary-6 after:w-1/2 after:left-1/2 after:-translate-x-1/2">
          Featured Products
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-3">
        {products?.length ? (
          products?.slice(0, 3).map((item: ProductsType) => {
            return <ProductCard key={item.id} products={item} />;
          })
        ) : (
          <p>Sorry, we found no restaurants in this area.</p>
        )}
      </div>

      <div className="text-center">
        <Link href="/products">
          <button className="uppercase py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest rounded-md transition hover:bg-clr-primary-5">
            all products
          </button>
        </Link>
      </div>
    </article>
  );
}
