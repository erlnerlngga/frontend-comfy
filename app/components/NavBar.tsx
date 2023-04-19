"use client";

import { useState } from "react";
import {
  IoClose,
  IoMenu,
  IoCart,
  IoPersonAdd,
  IoChevronDown,
  IoExit,
} from "react-icons/io5";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Login from "./Login";
import blank from "../../public/blank.png";

import { useRouter } from "next/navigation";
import axios from "axios";
import useStore from "../../utils/store";
import { useCookies } from "react-cookie";
import jwt from "jsonwebtoken";
import { CookiesProvider } from "react-cookie";
import { QueryClient, QueryClientProvider } from "react-query";

interface UserType {
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

const logout = async () => {
  try {
    const res = await axios.get("http://localhost:8080/user/logout");

    return res.data.status;
  } catch (error) {
    console.log(error);
  }
};

export default async function NavBar() {
  const [cookies, setCookie] = useCookies();

  const router = useRouter();
  const addID = useStore((state) => state.addUserID);
  const lengthCart = useStore((state) => state.carts);

  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  let token, decoded, userData;

  if (cookies.jwt) {
    token = cookies.jwt;
  }

  if (token?.value) {
    decoded = jwt.verify(token.value, `${process.env.JWT_SECRET}`);
  }

  const isLoginOrNot = decoded ? true : false;

  if (isLoginOrNot) {
    userData = (await getUser()) as UserType;
    addID(userData.id);
  }

  const closeLogin = () => {
    setLogin(false);
  };

  const handleLogout = async () => {
    const out = await logout();
    router.push("/");
  };

  const menuBar = open ? (
    <IoClose
      onClick={() => setOpen(false)}
      className="w-12 h-12 text-red-500 cursor-pointer lg:hidden"
    />
  ) : (
    <IoMenu
      onClick={() => setOpen(true)}
      className="w-12 h-12 text-clr-primary-6 cursor-pointer lg:hidden"
    />
  );

  return (
    <CookiesProvider>
      <nav className="container mx-auto pr-4 h-20 flex items-center justify-between z-10 sticky top-0 bg-white">
        <Image src={logo} alt="logo" height={200} width={200} />
        {menuBar}
        <div className="hidden lg:block">
          <Link
            href="/"
            className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:border-b-2 hover:border-clr-primary-6"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:border-b-2 hover:border-clr-primary-6"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:border-b-2 hover:border-clr-primary-6"
          >
            Products
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className=" flex justify-center gap-8 items-center">
            <Link href="/cart">
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-2xl tracking-widest">Cart</p>
                <div className="relative">
                  <IoCart className="w-7 h-7" />
                  <span className="absolute -top-3 left-4 px-2 bg-clr-primary-6 text-white rounded-full">
                    {lengthCart.length}
                  </span>
                </div>
              </div>
            </Link>

            {isLoginOrNot ? (
              <div className="group relative  cursor-pointer">
                <div className="flex gap-2 items-center py-2">
                  <div className="bg-clr-primary-1 rounded-full object-cover grid place-items-center font-bold tracking-widest">
                    <Image
                      alt="photo-profile"
                      src={userData?.image || blank}
                      height={35}
                      width={35}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h1 className="tracking-widest capitalize">
                    Hi, {userData?.first_name}
                  </h1>
                  <IoChevronDown className="h-4 w-4" />
                </div>

                <div className="absolute hidden group-hover:block  shadow top-full right-0 w-full h-18 border-2 border-clr-primary-2 rounded-md px-4 py-2 text-right">
                  <Link href={`/me/${userData?.first_name}`}>
                    <p className="tracking-widest  p-1.5 rounded-md transition hover:bg-gray-100">
                      Profile
                    </p>
                  </Link>
                  <p
                    onClick={handleLogout}
                    className="tracking-widest text-red-400 font-bold p-1.5 rounded-md transition hover:bg-gray-100"
                  >
                    Logout
                  </p>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setLogin(true)}
                className="flex items-center gap-2 cursor-pointer"
                type="button"
              >
                <p className="text-2xl tracking-widest">Login</p>
                <div className="relative">
                  <IoPersonAdd className="w-7 h-7" />
                </div>
              </button>
            )}
          </div>
        </div>

        <div
          className={`absolute top-full bg-white bg-opacity-95 w-full h-[798px] transition-transform duration-700 ${
            open ? "translate-x-0" : "-translate-x-full lg:hidden"
          }`}
        >
          <div className="flex flex-col my-12">
            <Link
              href="/"
              className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:bg-clr-primary-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:bg-clr-primary-1"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:bg-clr-primary-1"
            >
              Products
            </Link>
            {isLoginOrNot && (
              <Link
                href={`/me/${userData?.first_name}`}
                className="text-lg cursor-pointer py-4 px-4 tracking-widest transition hover:bg-clr-primary-1"
              >
                Profile
              </Link>
            )}
          </div>

          <div className=" flex justify-center gap-12">
            <Link href="/cart">
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-2xl tracking-widest">Cart</p>
                <div className="relative">
                  <IoCart className="w-7 h-7" />
                  <span className="absolute -top-3 left-4 px-2 bg-clr-primary-6 text-white rounded-full">
                    {lengthCart.length}
                  </span>
                </div>
              </div>
            </Link>

            {isLoginOrNot ? (
              <button
                onClick={handleLogout}
                className="tracking-widest flex items-center gap-2 text-red-400 p-1.5 rounded-md text-2xl"
              >
                <span>Logout</span> <IoExit className="w-7 h-7" />
              </button>
            ) : (
              <button
                onClick={() => setLogin(true)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <p className="text-2xl tracking-widest">Login</p>
                <div className="relative">
                  <IoPersonAdd className="w-7 h-7" />
                </div>
              </button>
            )}
          </div>
        </div>

        {login && <Login closeLogin={closeLogin} />}
      </nav>
    </CookiesProvider>
  );
}
