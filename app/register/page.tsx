import Image from "next/image";
import shopping from "../../public/shopping.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FormRegister from "./components/FormRegister";

export default function Register() {
  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />
      <article className="container mx-auto my-24 lg:my-36 px-4 lg:px-36 grid grid-cols-1  lg:grid-cols-2 lg:items-center gap-12 lg:gap-8">
        <Image
          src={shopping}
          height={500}
          width={500}
          alt="shopping"
          className="rounded-md w-full"
        />

        <div className="lg:w-4/5">
          <h1 className="text-2xl text-gray-700 font-bold mb-8">
            Welcome to ComfySloth
          </h1>
          <FormRegister />
        </div>
      </article>

      <Footer />
    </main>
  );
}
