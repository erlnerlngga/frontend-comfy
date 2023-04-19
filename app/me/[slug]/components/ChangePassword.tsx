import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { ChangePasswordType, changePasswordValidate } from "@/utils/validate";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const updatePassword = async (data: {
  passwordCurrent?: string;
  NewPassword?: string;
}) => {
  try {
    const res = await axios.patch(
      "http://localhost:8080/user/update-password",
      data
    );

    return Promise.resolve(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default function ChangePassword({
  closeForm,
}: {
  closeForm: () => void;
}) {
  const formik = useFormik({
    initialValues: {
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    },
    validate: changePasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ChangePasswordType) => {
      let sendUpate = updatePassword({
        passwordCurrent: values.current_password,
        NewPassword: values.new_password,
      });

      toast.promise(sendUpate, {
        loading: "Upadating ....",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update.</b>,
      });
      console.log(values);
    },
  });

  return (
    <>
      <div
        onClick={closeForm}
        className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full bg-gray-900 bg-opacity-50 grid place-content-center"
      >
        <Toaster position="top-right" reverseOrder={false} />
      </div>

      <div className="max-w-sm lg:max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
        <div className="relativ bg-white rounded-md shadow p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-gray-700 text-xl font-bold">Change password</h1>
            <IoClose onClick={closeForm} className="w-6 h-6 cursor-pointer" />
          </div>

          <hr className="border-1 border-gray-600 mb-6" />

          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="current_password" className="text-gray-500">
                Current Password
              </label>
              <input
                {...formik.getFieldProps("current_password")}
                type="password"
                id="current_password"
                name="current_password"
                placeholder="current password"
                className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
              />
              <div className="self-end">
                <Link href="/reset-password" className="text-clr-primary-6">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-1 mb-4">
              <label htmlFor="new_password" className="text-gray-500">
                New password
              </label>
              <input
                {...formik.getFieldProps("new_password")}
                type="password"
                id="new_password"
                name="new_password"
                placeholder="new password"
                className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
              />
            </div>

            <div className="flex flex-col gap-1 mb-8">
              <label htmlFor="password" className="text-gray-500">
                Confirm new password
              </label>
              <input
                {...formik.getFieldProps("confirm_new_password")}
                type="password"
                id="password"
                name="password"
                placeholder="confirm new password"
                className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
              />
            </div>
            <button
              type="submit"
              className="mb-4 rounded-md w-full py-1.5 px-4 bg-clr-primary-8 font-medium text-white tracking-widest transition hover:bg-clr-primary-5"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
