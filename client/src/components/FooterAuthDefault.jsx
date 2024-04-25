/*eslint-disable*/
import React from "react";
export default function FooterAuthDefault() {
  return (
    <div className="z-[5] mx-auto flex w-full max-w-screen-sm flex-col items-center justify-between px-[20px] right-0 pb-4 lg:mb-6 lg:max-w-[100%] lg:flex-row xl:mb-2 xl:w-[1310px] xl:pb-6">
      <p className="mb-6 text-center text-sm text-gray-600 md:text-base lg:mb-0">
        ©{1900 + new Date().getYear()} Yialla. All Rights Reserved.
      </p>
    </div>
  );
}
