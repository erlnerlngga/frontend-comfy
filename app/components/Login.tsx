import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { ValuesType, loginValidation } from "@/utils/validate";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const getLogin = async (data: { email?: string; password?: string }) => {
  try {
    const res = await axios.post("http://localhost:8080/user/login", data);

    return Promise.resolve(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default function Login({ closeLogin }: { closeLogin: () => void }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValuesType) => {
      console.log(values);

      let sendLogin = getLogin({
        email: values.email,
        password: values.password,
      });

      toast.promise(sendLogin, {
        loading: "Loading....",
        success: <b>Login Successfully...!</b>,
        error: <b>Could not login.</b>,
      });
    },
  });

  return (
    <>
      <div
        onClick={closeLogin}
        className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full bg-gray-900 bg-opacity-50 grid place-content-center"
      >
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <div className="max-w-sm lg:max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
        <div className="relativ bg-white rounded-md shadow p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-gray-700 text-xl font-bold">
              Login to our platform
            </h1>
            <IoClose onClick={closeLogin} className="w-6 h-6 cursor-pointer" />
          </div>

          <hr className="border-1 border-gray-600 mb-6" />

          <form onSubmit={formik.handleSubmit}>
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

            <div className="flex flex-col gap-1 mb-8">
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
              <div className="self-end">
                <Link href="/reset-password" className="text-clr-primary-6">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="mb-4 rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
            >
              Login
            </button>

            <div className="flex gap-1">
              <p className="text-gray-500">Not registered?</p>
              <Link href="/register" className="text-clr-primary-6">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
