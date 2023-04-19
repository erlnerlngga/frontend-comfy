"use client";

import { useFormik } from "formik";
import { ValuesType, emailForgotPassword } from "@/utils/validate";
import { Toaster } from "react-hot-toast";

export default function SendEmail() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: emailForgotPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValuesType) => {
      console.log(values);
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-1 mb-8">
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
        <button
          type="submit"
          className="mb-4 rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
        >
          Send Email
        </button>
      </form>
    </>
  );
}
