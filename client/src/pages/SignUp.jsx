import React from "react";
import InputField from "../components/InputField";
import Default from "../types/Default";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const SignUp = () => {
  return (
    <Default
      maincard={
        <div className="mb-16  flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-start lg:justify-start">
          {/* Sign up section */}
          <div className=" mt-[5vh] w-full max-w-full flex-col  xl:max-w-[600px]">
            <h3 className=" mb-2.5 text-2xl font-bold text-navy-700 dark:text-white">
              Inscription
            </h3>
            <p className="mb-9 ml-1 text-sm text-gray-600">! </p>

            <div className="mb-6 flex items-center justify-around gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600 w-full text-center">
                {" "}
                en un click{" "}
              </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            <div className="mb-6  flex h-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
            </div>
            <div className="mb-6  flex h-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
              <p> se connecter avec google</p>
            </div>
            <div className="mb-6 flex h-[50px] items-center  justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white border border-gray-200">
              <div className="rounded-full text-xl">
                <FcGoogle />
              </div>
            </div>

            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600"> ou </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">
                Select type of account
              </h1>

              <div className="mt-3 md:flex md:items-center md:-mx-2 mb-3">
                <button className="flex justify-center w-full px-6 py-3 text-white bg-yellow-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                  <LocalShippingOutlinedIcon />
                  <span className="mx-2">transporteur</span>
                </button>

                <button className="flex justify-center w-full px-6 py-3 mt-4 text-yellow-500 border border-yellow-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-yellow-400 dark:text-yellow-400 focus:outline-none">
                  <Inventory2OutlinedIcon />
                  <span className="mx-2">expidateur</span>
                </button>
              </div>
            </div>
            {/* user info */}
            <div className="mb-3 flex w-full items-center justify-center gap-4">
              <div className="w-1/2">
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="First Name*"
                  placeholder="John"
                  id="firstname"
                  type="text"
                />
              </div>

              <div className="w-1/2">
                <InputField
                  variant="auth"
                  extra="mb-3"
                  label="Last Name*"
                  placeholder="Doe"
                  id="lastname"
                  type="text"
                />
              </div>
            </div>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="email"
            />
            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min 8 characters"
              id="password"
              type="password"
            />
            {/* Checkbox */}
            <div className="mt-4 flex items-center justify-between px-2">
              <div className="flex">
                <Checkbox id="checkbox" />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-sm text-navy-700 hover:cursor-pointer dark:text-white"
                >
                  By creating an account means you agree to the Terms and
                  Conditions, and our Privacy Policy
                </label>
              </div>
            </div>

            {/* button */}

            <button className="mt-4 w-full rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
              Create my account
            </button>

            <div className="mt-3">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                Already a member?
              </span>
              <a
                href="/auth/sign-in/default"
                className="ml-1 text-sm font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SignUp;
