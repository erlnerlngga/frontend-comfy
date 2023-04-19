import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CartContent from "./components/CartContent";
import { cookies } from "next/headers";

export default function Cart() {
  const cookieStore = cookies();

  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />

      <CartContent isLogin={cookieStore.has("jwt")} />

      <Footer />
    </main>
  );
}
