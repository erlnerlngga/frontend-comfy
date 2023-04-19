"use client";

import { useFormik } from "formik";
import { ValuesType, forgotPassword } from "@/utils/validate";
import { Toaster } from "react-hot-toast";

export default function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validate: forgotPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValuesType) => {
      console.log(values);
    },
  });

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form>
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="password" className="text-gray-500">
            New password
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
            Confirm new password
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
          Create New Password
        </button>
      </form>
    </>
  );
}
