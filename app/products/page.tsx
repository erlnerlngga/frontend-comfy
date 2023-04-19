import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "./components/SideBar";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import SearchForm from "./components/SearchForm";

export interface ProductsType {
  id: string;
  name: string;
  description: string;
  price: number;
  shipping: boolean;
  images: { id: string; url: string; product_id: string }[];
  colors: { id: string; name: string }[];
  company: { name: string };
  category: { name: string };
}

export interface SearchParamsType {
  name?: string;
  category?: string;
  company?: string;
  minPrice?: string;
  maxPrice?: string;
  freeShipping?: string;
  color?: string;
}

const getAllProducts = async (searchParams: SearchParamsType) => {
  try {
    const res = await axios.get("http://localhost:8080/product", {
      params: searchParams,
    });

    return res.data.data.product;
  } catch (error) {
    console.log(error);
  }
};

const getAllCategory = async () => {
  try {
    const res = await axios.get("http://localhost:8080/product/category");

    return res.data.data.category;
  } catch (error) {
    console.log(error);
  }
};

const getAllCompany = async () => {
  try {
    const res = await axios.get("http://localhost:8080/product/company");

    return res.data.data.company;
  } catch (error) {
    console.log(error);
  }
};

export default async function Products({
  searchParams,
}: {
  searchParams: SearchParamsType;
}) {
  const prod = getAllProducts(searchParams);
  const cat = getAllCategory();
  const com = getAllCompany();

  const [produ, catego, compa] = await Promise.all([prod, cat, com]);

  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />
      <SearchForm />

      <article className="container my-24 lg:my-36 mx-auto px-4 lg:px-28 flex flex-col gap-20 lg:flex-row">
        <SideBar
          searchParams={searchParams}
          category={catego}
          company={compa}
        />

        <div className="basis-4/5">
          <div className="mb-12 flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center lg:justify-between">
            <p>{produ?.length} Products Found</p>
            <hr className="border-1 lg:w-1/2 border-gray-400" />
            <form>
              <label htmlFor="sort" className="mr-8">
                Sort By
              </label>
              <select name="sort" id="sort">
                <option value="price-lowest">Price (Lowest)</option>
                <option value="price-highest">Price (Highest)</option>
                <option value="name-asc">Name (A - Z)</option>
                <option value="name-desc">Name (Z - A)</option>
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {produ?.length ? (
              produ?.map((item: ProductsType) => {
                return <ProductCard key={item.id} products={item} />;
              })
            ) : (
              <p>Sorry, we found no restaurants in this area.</p>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
