"use client";

import { ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

import blank from "../../../../public/blank.png";
import Image from "next/image";
import { IoPencil } from "react-icons/io5";
import convertToBase64 from "@/utils/convert";
import { ValuesType, updateProfile } from "@/utils/validate";
import ChangePassword from "./ChangePassword";
import { UserType } from "../page";

const sendUpadateUser = async (data: {
  first_name?: string;
  last_name?: string;
  city?: string;
  image?: string;
}) => {
  try {
    const res = await axios.patch(
      "http://localhost:8080/user/update-user",
      data
    );

    return Promise.resolve(res.data);
  } catch (error) {
    console.log(error);
  }
};

export default function Profile({ userData }: { userData: UserType }) {
  const [file, setFile] = useState(`${userData?.image}`);
  const [edit, setEdit] = useState(false);
  const [cangePassword, setCangePassword] = useState(false);

  const closeForm = () => {
    setCangePassword(false);
  };

  const formik = useFormik({
    initialValues: {
      first_name: `${userData?.first_name}`,
      last_name: `${userData?.last_name}`,
      city: `${userData?.city}`,
    },
    validate: updateProfile,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value: ValuesType) => {
      value = await Object.assign(value, { image: file || "" });
      console.log(value);
      let sendUpdate = sendUpadateUser({
        first_name: value.first_name,
        last_name: value.last_name,
        city: value.city,
        image: value.image,
      });

      toast.promise(sendUpdate, {
        loading: "Updating....",
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update.</b>,
      });
      setEdit(false);
    },
  });

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if ((e.target as HTMLInputElement).files) {
      const img = (e.target as HTMLInputElement).files;
      if (img) {
        const base64 = await convertToBase64(img[0]);
        setFile(base64 as string);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="container mx-auto my-24 lg:my-36  px-4 lg:px-52 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center"
      >
        <Toaster position="top-right" reverseOrder={false}></Toaster>
        <div className="justify-self-center lg:justify-self-end">
          <div className="relative mb-8 w-96 h-96 object-cover">
            <label htmlFor="profile" className="cursor-not-allowed">
              <Image
                alt="photo-profile"
                fill
                src={file || blank}
                className="rounded-md"
              />
            </label>

            {edit && (
              <label
                htmlFor="profile"
                className="absolute cursor-pointer grid place-items-center rounded-md bg-black bg-opacity-50 w-full h-full"
              >
                <h1 className="flex flex-col items-center p-2 text-gray-500 tracking-widest bg-white rounded-md">
                  <span>Click Here for</span>
                  <span>Change Profile</span>
                </h1>
              </label>
            )}

            <input
              disabled={!edit}
              onChange={onUpload}
              type="file"
              id="profile"
              name="profile"
              className="absolute top-1/2 left-12 -z-10 opacity-0"
            />
          </div>

          <button
            onClick={() => setCangePassword(true)}
            type="button"
            className="capitalize px-4 py-1 rounded-md shadow bg-clr-primary-1 transition hover:bg-clr-primary-7 hover:text-white  tracking-widest"
          >
            change password
          </button>
        </div>

        <div className="self-stretch px-8 pt-8 flex flex-col gap-8 lg:justify-between">
          {edit ? (
            <div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor="first_name"
                  className="capitalize text-gray-500"
                >
                  first name
                </label>
                <input
                  {...formik.getFieldProps("first_name")}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="last_name" className="capitalize text-gray-500">
                  last name
                </label>
                <input
                  {...formik.getFieldProps("last_name")}
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Mayer"
                  className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="city" className="capitalize text-gray-500">
                  city
                </label>
                <input
                  {...formik.getFieldProps("city")}
                  type="text"
                  id="city"
                  name="city"
                  placeholder="New York"
                  className="outline-none py-1.5  px-4 tracking-widest rounded-md border-2 border-clr-primary-8"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between mb-4">
                <p className="font-bold text-gray-700 text-xl">First Name:</p>
                <p className="capitalize text-gray-600 text-xl">
                  {formik.values.first_name}
                </p>
              </div>

              <div className="flex justify-between mb-4">
                <p className="font-bold text-gray-700 text-xl">Last Name:</p>
                <p className="capitalize text-gray-600 text-xl">
                  {formik.values.last_name}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="font-bold text-gray-700 text-xl">City:</p>
                <p className="capitalize text-gray-600 text-xl">
                  {formik.values.city}
                </p>
              </div>
            </div>
          )}

          <div className="self-end flex gap-4">
            <button
              disabled={!edit}
              type="submit"
              className={`${
                edit ? "" : "cursor-not-allowed"
              } capitalize px-8 py-1 rounded-md shadow bg-clr-primary-7 text-white tracking-widest transition hover:bg-clr-primary-5`}
            >
              Save
            </button>

            <button
              onClick={() => setEdit(true)}
              disabled={edit}
              type="button"
              className={`${
                edit ? `cursor-not-allowed` : ""
              } capitalize px-4 py-1 rounded-md shadow bg-clr-primary-7 text-white tracking-widest transition hover:bg-clr-primary-5`}
            >
              <IoPencil className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
      {cangePassword && <ChangePassword closeForm={closeForm} />}
    </>
  );
}
