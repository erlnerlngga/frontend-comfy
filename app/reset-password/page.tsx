import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import SendEmail from "./components/SendEmail";

export default function resetPassword() {
  return (
    <main className="bg-clr-primary-1 w-screen h-screen grid place-content-center">
      <Link href="/">
        <div className="absolute top-8 left-8">
          <IoArrowBack className="h-10 w-10" />
        </div>
      </Link>

      <div className="p-12 w-[450px] rounded-md shadow-md bg-white">
        <SendEmail />
      </div>
    </main>
  );
}
