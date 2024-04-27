import React, { useEffect, useState } from "react";
import { carouselTitle, data1, tabs } from "../utils/DashboardData";
import {
  AccordionSection,
  Carousel,
  MidumeCardLayout,
  NotificationCard,
  SmallCardLayout,
} from "../components";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 1024 ? (
        <div className="w-full mx-auto px-5">
          <div className="">
            <SmallCardLayout
              text="0"
              title={"MON PORTEFEUILLE"}
              type="mobile"
              Icon={AccountBalanceWalletOutlinedIcon}
              rounded={"lg"}
              bg={true}
              spacing={"p-4"}
              textColor={true}
              firstElement={true}
              textSize={"text-md font-semibold"}
            />
            {carouselTitle?.map((elem, idx) => (
              <AccordionSection key={idx} title={elem} />
            ))}
          </div>
          <div className="grid mx-auto  bg-white rounded-lg shadow-sm border border-gray-200 mt-5 mb-5">
            <div className="text-center">
              <div className="w-full  bordet-t-2">
                <MidumeCardLayout tabs={tabs} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="  w-full h-screen flex pr-20 pl-20 py-10">
          <div className="grid gap-8  grid-cols-3 w-full">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="relative">
                <Carousel />
              </div>
              <div className="mt-3 text-center flex-grow">
                <MidumeCardLayout tabs={tabs} />
              </div>
            </div>
            <div className="w-full h-full ">
              <div className="flex flex-col gap-4 justify-around items-center">
                {data1.map((elem, idx) => (
                  <SmallCardLayout
                    key={idx}
                    title={elem.title}
                    text={elem.text}
                    Icon={elem.icon}
                    bg={elem.bg}
                    rounded={elem.rounded}
                    textColor={elem.textColor}
                    firstElement={elem.firstElement}
                    textSize={elem.textSize}
                  />
                ))}
              </div>

              {/* <div className="text-center p-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mes alertes trajet
                                    </h3>
                                    <a
                                        href="/"
                                        className="primary underline text-sm    hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir tout
                                    </a>
                                </div>
                            </div> */}
            </div>
          </div>

          {/* <div className="grid grid-cols-6 gap-6 mt-6">
                        <div className="col-span-6 lg:col-span-2">
                            <div className="text-center border border-primary p-6 rounded-md">
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="mb-[15px] sm:flex sm:items-center sm:justify-between">
                                    <h3 className="font-euclid text-primary text-lg font-semibold">
                                        Mon Profil
                                    </h3>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Modifier
                                    </a>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-primary text-base font-semibold">
                                        Lhnsjwtnf Emltmp
                                    </p>
                                    <p className="text-primary text-sm">
                                        Particulier
                                    </p>
                                    <a
                                        href="/"
                                        className="text-primary underline text-sm mt-4 hover:text-[#898484] hover:no-underline transition-all ease-in-out">
                                        Voir mon profil public
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
        </div>
      )}
    </>
  );
};

export default Dashboard;
