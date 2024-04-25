import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useState } from "react";

export default function NavBar({ openModal, setOpenModal, isLogedIn }) {
  return (
    <div>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white fixed top-0 z-40 w-full">
        <div className="flex-col flex">
          <div className="w-full border-b-2 border-gray-200">
            <div className="bg-white h-16 justify-between items-center mx-auto px-4 flex">
              <div className="">
                <img
                  src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
                  className="block btn- h-8 w-auto"
                  alt=""
                />
              </div>
              <div className="justify-end items-center flex">
                {isLogedIn ? (
                  <>
                    <div className="">
                      <p
                        className="w-full pt-1 mr-5 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none"
                      >
                        <div className="lg:block mr-auto ml-40 hidden relative max-w-xs mr-20">
                          <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                            <span className="justify-center items-center flex">
                              <span className="justify-center items-center flex">
                                <span className="items-center justify-center flex">
                                  <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewbox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"
                                    />
                                  </svg>
                                </span>
                              </span>
                            </span>
                          </p>
                          <span>
                            <input
                              placeholder="Type to search"
                              type="search"
                              className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"
                            />
                            <span
                              onClick={() => setOpenModal((prev) => !prev)}
                              className="cursor-pointer absolute right-0 h-full rounded-lg w-20"
                            >
                              <div className="h-full flex flex-col items-center justify-center">
                                <div className="flex items-center justify-between border-l-2 px-2 h-full border-gray-300">
                                  <span className="px-1">Colis</span>
                                  <KeyboardArrowDownRoundedIcon />
                                </div>
                              </div>
                            </span>
                          </span>
                        </div>
                      </p>
                    </div>

                    <div className="relative">
                      <p
                        className="pt-1 mr-5 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                      >
                        <span className="items-center justify-center flex">
                          <EmailOutlinedIcon
                            color="black"
                            sx={{ fontSize: 30 }}
                          />
                        </span>
                      </p>
                    </div>
                    <div className="relative">
                      <p
                        className="pt-1 mr-10 pb-1 pl-1 bg-white text-gray-700 rounded-full transition-all duration-200
                hover:text-gray-900 focus:outline-none hover:bg-gray-100"
                      >
                        <span className="justify-center items-center flex">
                          <span className="justify-center items-center flex">
                            <span className="items-center justify-center flex">
                              <NotificationsNoneOutlinedIcon
                                color="black"
                                sx={{ fontSize: 30 }}
                              />
                              <div className="absolute block w-3 h-3 bg-yellow-500 border-2 border-white rounded-full top-0 start-3.5 dark:border-gray-900 animate-ping"></div>
                            </span>
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="justify-center items-center flex relative">
                      <img
                        src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
                        className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-300"
                        alt=""
                      />
                      <p className="font-semibold text-sm">Marrie Currie</p>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
