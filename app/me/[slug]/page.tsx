import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Profile from "./components/Profile";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import axios from "axios";
import { redirect } from "next/navigation";

export interface UserType {
  id: string;
  first_name: string;
  last_name: string;
  city: string;
  email: string;
  image: string;
}

const getUser = async () => {
  try {
    const res = await axios.get("http://localhost:8080/user/me");

    return res.data.data.user;
  } catch (error) {
    console.log(error);
  }
};

export default async function Me() {
  const cookieStore = cookies();
  let token, decoded;

  if (cookieStore.get("jwt")) {
    token = cookieStore.get("jwt");
  }

  if (token?.value) {
    decoded = jwt.verify(token.value, `${process.env.JWT_SECRET}`);
  }

  if (!decoded) redirect("/register");

  const userData = await getUser();

  return (
    <main>
      {/* @ts-expect-error  */}
      <NavBar />

      <Profile userData={userData} />

      <Footer />
    </main>
  );
}
