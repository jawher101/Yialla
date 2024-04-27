import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menus } from "../utils/navigationLink";
import { RiSettings4Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const InternalSideBarLeft = ({ open, setOpen, isMobileView, contentRef }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [submenuRotation, setSubmenuRotation] = useState([]);
  const handleContentScroll = () => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && contentRef.current) {
      sidebar.scrollTop = contentRef.current.scrollTop;
    }
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && contentRef.current) {
      contentRef.current.addEventListener("scroll", handleContentScroll);
    }

    return () => {
      if (sidebar && contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleContentScroll);
      }
    };
  }, [contentRef]);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
    let updatedRotation = [...submenuRotation];
    updatedRotation[index] = !updatedRotation[index];
    setSubmenuRotation(updatedRotation);
  };

  return (
    <div
      className={`bg-white h-full border-r-2 mt-[4.1rem] fixed top-0 left-0 ${
        open && isMobileView
          ? "w-screen"
          : !open && isMobileView
          ? "hidden"
          : open && !isMobileView
          ? "xl:w-[19rem] lg:w-[10rem] "
          : !open && !isMobileView
          ? "w-[19rem] "
          : null
      } duration-500 text-primary ${isMobileView && "fixed left-0"}`}
      style={{ overflowY: "hidden", height: "100vh" }}
    >
      <div
        className="flex flex-col gap-4 px-4 pt-10 overflow-y-auto h-full"
        style={{ paddingRight: "16px", maxHeight: "calc(100vh - 4.1rem)" }} // Adjusted height to fit the responsive design
      >
        {menus?.map((menu, idx) => (
          <>
            {menu?.title && (
              <p className="font-semibold text-md tracking-widest text-gray-400 uppercase">
                {menu.title}
              </p>
            )}
            <Link
              key={idx}
              to={menu.link}
              onClick={() => (menu?.menu ? toggleSubMenu(idx) : setOpen(false))}
              className={` ${menu?.margin && "mt-5"} group flex ${
                menu?.menu ? "flex-col" : "items-center"
              } text-sm font-medium  hover:bg-yellow-400 rounded-lg p-3 `}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3.5">
                  <div className="bg-yellow-500 text-white rounded-lg p-2">
                    {React.createElement(menu?.icon, {
                      size: "20",
                    })}
                  </div>

                  <h2
                    style={{
                      transitionDelay: `${idx + 3}00ms`,
                      fontSize: "15px",
                      fontWeight: "normal",
                    }}
                    className={`whitespace-pre duration-500 text-md`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } bg-white font-medium text-md whitespace-pre text-gray-900 rounded-md  px-0 py-0 w-0 overflow-hidden  `}
                  >
                    {menu?.name}
                  </h2>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default InternalSideBarLeft;
