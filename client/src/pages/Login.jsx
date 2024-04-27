import React, { useState } from "react";
import Checkbox from "../components/checkbox";
import InputField from "../components/InputField";
import img from "../assets/1.jpeg";
import logo from "../assets/logo1.png";

const Login = () => {
  const [showContent, setShowContent] = useState(true);

  const handleClickEmail = () => {
    setShowContent(false);
  };

  return (
    <div className="lg:grid grid-cols-3 w-full h-screen   ">
      <div className="col-span-2 h-full  w-full  bg-black   ">
        <div
          className="h-full  bg-cover bg-center  bg-black"
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      </div>
      <div className="col-span-1 w-full md:w-sm sm:w-sm h-full  ">
        <div className="ml-5 pt-10 w-max">
          <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                fill="#A3AED0"
              />
            </svg>
            <p className="ml-3  text-gray-600">Acceuil</p>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-16  ">
          <img src={logo} className="block btn- h-[50px] w-auto" alt="" />
        </div>
        {showContent && (
          <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
            <div className="w-full max-w-full lg:pl-0 xl:max-w-[400px]   ">
              <h3 className="mb-2.5 text-xl font-bold text-gray-600 dark:text-white text-center  mb-8">
                Connexion
              </h3>

              <div className="mb-6 flex items-center justify-around gap-3">
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700 " />
                <p className="text-base text-gray-600 w-full text-center">
                  {" "}
                  en un click{" "}
                </p>
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              </div>
              <div className="flex flex-col items-center justify-center  ">
                <div className="mb-6   flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="23"
                      height="23"
                      src="https://img.icons8.com/color/48/google-logo.png"
                      alt="google-logo"
                    />
                  </div>
                  <p className="font-medium"> Se connecter avec Google</p>
                </div>
                <div className="mb-6  vg- flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="30"
                      height="30"
                      src="https://img.icons8.com/color/48/facebook-new.png"
                      alt="facebook-new"
                    />
                  </div>
                  <p className="font-medium"> Se connecter avec Facebook</p>
                </div>
                <div className="mb-6  vg- flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  border border-gray-200">
                  <div className="rounded-full text-xl">
                    <img
                      width="25"
                      height="25"
                      src="https://img.icons8.com/ios-filled/50/mac-os.png"
                      alt="mac-os"
                    />
                  </div>
                  <p className="font-medium"> Se connecter avec Apple</p>
                </div>
              </div>
              <div className="mb-6 flex items-center  gap-3">
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
                <p className="text-base text-gray-600"> ou </p>
                <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              </div>
              {/* Étape 3 : Afficher le contenu email conditionnellement */}
              <div
                className=" flex w-full h-[50px] items-center justify-center gap-2 rounded-lg bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 dark:text-white  bg-yellow-500    "
                onClick={handleClickEmail}
              >
                <div className="rounded-full text-xl text-white">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/new-post.png"
                    alt="new-post"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p className="font-medium text-white">
                  {" "}
                  Utuliser votre adresse E-mail
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Checkbox */}
        {showContent && (
          <div className="mb-4 mt-0 flex items-center justify-between m-0  ">
            <div className=" flex items-start">
              <p className="mx-12 font-light text-gray-400 dark:text-white text-center">
                En continuant, vous acceptez les{" "}
                <a className="font-medium ">Conditions d'Utilisation</a> et la{" "}
                <a className="font-medium ">Politique de Confidentialité </a> de
                la société Yialla.
              </p>
            </div>
          </div>
        )}

        {showContent && (
          <div className="mt-6 flex flex-col items-center justify-center mb-5">
            <span className="font-medium text-navy-700 dark:text-gray-500">
              Vous n'êtes pas encore inscrit ?
            </span>
            <a
              href="/auth/sign-up/default"
              className=" font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
            >
              Créer un compte
            </a>
          </div>
        )}
        {!showContent && (
          <div className="p-7 flex justify-center items-center h-fit sm:p-5 md:p-10 lg:p-5 xl:p-16 m-0 overflow-y-hidden  ">
            <div className="w-full max-w-full  xl:max-w-[400px] ">
              <h3 className="mb-2.5 text-xl font-bold text-gray-600 dark:text-white text-center  mb-8">
                Connexion
              </h3>
              <p className="mb-6 ml-1 text-gray-300">
                Entrez votre email et votre mot de passe pour vous connecter !{" "}
              </p>
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700 mb-6" />
              {/* Email */}
              <InputField
                variant="auth"
                extra="mb-3 text-gray-500"
                label="E-mail :"
                placeholder="mail@simmmple.com"
                id="email"
                type="text"
              />
              {/* Password */}
              <InputField
                variant="auth"
                extra="mb-3 text-gray-500"
                label="Mot de passe :"
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
              <div className="mt-6 flex flex-col items-center justify-center ">
                <span className="font-medium text-navy-700 dark:text-gray-500">
                  Vous n'êtes pas encore inscrit ?
                </span>
                <a
                  href="/auth/sign-up/default"
                  className=" font-medium text-yellow-500 hover:text-yellow-600 dark:text-white"
                >
                  Créer un compte
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
