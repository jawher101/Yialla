import React from "react";
import Default from "../types/Default";
import { FcGoogle } from "react-icons/fc";
import InputField from "../components/InputField";
import Checkbox from "../components/checkbox";

const Login = () => {
  return (
    <Default
      maincard={
        <div className=" mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start ">
          {/* Sign in section */}
          <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] ">
            <h3 className="mb-2.5 text-2xl font-bold text-navy-700 dark:text-white">
              Connexion
            </h3>
            <p className="mb-9 ml-1 text-sm text-gray-600">
              Entrez votre email et votre mot de passe pour vous connecter !{" "}
            </p>
            <div className="flex items-center justify-center">
              <div className="mb-6 mr-10 flex border--2 h-[50px] w-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white ">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt="facebook-new"
                />
              </div>
              <div className="mb-6 mr-10 flex h-[50px] w-[50px] items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white ">
                <img
                  width="28"
                  height="28"
                  src="https://img.icons8.com/color/48/google-logo.png"
                  alt="google-logo"
                />
              </div>
              <div className="mb-6 flex h-[50px] w-[50px] items-center  justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white">
                <img
                  width="28"
                  height="28 "
                  src="https://img.icons8.com/ios-filled/50/mac-os.png"
                  alt="mac-os"
                />
              </div>
            </div>
            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              <p className="text-base text-gray-600"> ou </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Email*"
              placeholder="mail@simmmple.com"
              id="email"
              type="text"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Rester connecté
                </p>
              </div>
              <a
                className="text-sm font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
                href=" "
              >
                Mot de passe oublié ?
              </a>
            </div>
            <button className="w-full rounded-xl bg-yellow-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-yellow-600 active:bg-yellow-700 dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-300 dark:active:bg-yellow-200">
              Connexion
            </button>
            <div className="mt-4">
              <span className="text-sm font-medium text-navy-700 dark:text-gray-500">
                Vous n'êtes pas encore inscrit ?
              </span>
              <a
                href="/auth/sign-up/default"
                className="ml-1 text-sm font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
              >
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Login;
