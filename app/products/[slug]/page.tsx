import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import axios from "axios";
import { ProductsType } from "../page";
import AddCartForm from "./components/AddCartForm";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export interface ProductDetailType extends ProductsType {
  stock: number;
  review: number;
  star: number;
}

interface jwtReturn {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

const getProduct = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:8080/product/${id}`);

    return res.data.data.product;
  } catch (error) {
    console.log(error);
  }
};

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = (await getProduct(params.slug)) as ProductDetailType;
  const cookieStore = cookies();
  let token, decoded;

  if (cookieStore.get("jwt")) {
    token = cookieStore.get("jwt");
  }

  if (token?.value) {
    decoded = jwt.verify(token.value, `${process.env.JWT_SECRET}`);
  }

  const isLoginOrNot = decoded ? true : false;

  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />

      <AddCartForm product={product} isLogin={isLoginOrNot} />

      <Footer />
    </main>
  );
}
