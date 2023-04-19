import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import ResetPassword from "../components/ResetPassword";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default function resetPassword({
  params,
}: {
  params: { slug: string };
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("reset-password");
  console.log(token);

  return (
    <main className="bg-clr-primary-1 w-screen h-screen grid place-content-center">
      <Link href="/">
        <div className="absolute top-8 left-8">
          <IoArrowBack className="h-10 w-10" />
        </div>
      </Link>

      <div className="p-12 w-[450px] rounded-md shadow-md bg-white">
        <ResetPassword />
      </div>
    </main>
  );
}
