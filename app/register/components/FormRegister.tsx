"use client";

import { useFormik } from "formik";
import { ValuesType, registerValidation } from "@/utils/validate";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const createUser = async (data: {
  first_name: string;
  last_name: string;
  city: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post("http://localhost:8080/user/register", data);

    return Promise.resolve(res.data.data.status);
  } catch (error) {
    console.log(error);
  }
};

export default function FormRegister() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      city: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValuesType) => {
      let createNewUser = createUser({
        first_name: values.first_name as string,
        last_name: values.last_name as string,
        city: values.city as string,
        email: values.email as string,
        password: values.password as string,
      });

      toast.promise(createNewUser, {
        loading: "Creating...",
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex lg:gap-7 flex-col lg:flex-row items-center w-full">
          <div className="flex flex-col w-full gap-1 mb-4">
            <label htmlFor="first_name" className="text-gray-500">
              First Name
            </label>
            <input
              {...formik.getFieldProps("first_name")}
              type="text"
              id="first_name"
              name="first_name"
              placeholder="John"
              className="outline-none py-1.5 px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-4">
            <label htmlFor="last_name" className="text-gray-500">
              Last Name
            </label>
            <input
              {...formik.getFieldProps("last_name")}
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Doe"
              className="outline-none py-1.5 px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="city" className="text-gray-500">
            City
          </label>
          <input
            {...formik.getFieldProps("city")}
            type="text"
            id="city"
            name="city"
            placeholder="Santa Barbara"
            className="outline-none py-1.5 px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="email" className="text-gray-500">
            Your email
          </label>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            id="email"
            name="email"
            placeholder="joendoe@gmail.com"
            className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
          />
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password" className="text-gray-500">
            Your password
          </label>
          <input
            {...formik.getFieldProps("password")}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
          />
        </div>
        <div className="flex flex-col gap-1 mb-8">
          <label htmlFor="passwordConfirm" className="text-gray-500">
            Confirm password
          </label>
          <input
            {...formik.getFieldProps("passwordConfirm")}
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="confirm password"
            className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
          />
        </div>
        <button
          type="submit"
          className="mb-4 rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
        >
          Create Account
        </button>
      </form>
    </>
  );
}
