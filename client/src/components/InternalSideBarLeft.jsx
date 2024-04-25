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
      className={`bg-white border-r-2 mt-[4.1rem] fixed top-0 left-0 h-screen ${
        open && isMobileView
          ? "w-screen"
          : !open && isMobileView
          ? "hidden"
          : open && !isMobileView
          ? "w-[19rem] "
          : !open && !isMobileView
          ? "w-[19rem] "
          : null
      } duration-500 text-primary ${isMobileView && "fixed left-0"}`}
      style={{ overflowY: "hidden" }}
    >
      <div
        className="overflow-y-auto h-[55vh] md:h-full boor flex flex-col gap-4 px-4 pt-10 relative"
        style={{ paddingRight: "16px" }} // Add padding to prevent content from being hidden behind scrollbar
      >
        {menus?.map((menu, idx) => (
          <>
            {menu?.title && (
              <p className="font-semibold text-sm tracking-widest text-gray-400 uppercase">
                {menu.title}
              </p>
            )}
            <Link
              key={idx}
              to={menu.link}
              onClick={() => (menu?.menu ? toggleSubMenu(idx) : setOpen(false))}
              className={` ${menu?.margin && "mt-5"} group flex ${
                menu?.menu ? "flex-col" : "items-center"
              } text-sm font-medium p-2 hover:bg-gray-100`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3.5">
                  <div>
                    {React.createElement(menu?.icon, {
                      size: "20",
                      color: "050816",
                    })}
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${idx + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  `}
                  >
                    {menu?.name}
                  </h2>
                </div>
              </div>
            </Link>
          </>
        ))}
        <div className="bg-black flex flex-col gap-4 w-[16rem] space-y-2 fixed bottom-5  ">
          <Link
            to="/setting"
            className={`group flex text-sm font-medium p-2 hover:bg-gray-100`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3.5">
                <div>
                  <RiSettings4Line size={20} color="050816" />
                </div>
                <h2
                  style={{
                    transitionDelay: `${8 + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500`}
                >
                  Setting
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  `}
                >
                  Setting
                </h2>
              </div>
            </div>
          </Link>

          <Link
            to="/"
            className={`group flex text-sm font-medium p-2 hover:bg-gray-100`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3.5">
                <div>
                  <FiLogOut size={20} color="050816" />
                </div>
                <h2
                  style={{
                    transitionDelay: `${9 + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500`}
                >
                  Log out
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden  `}
                >
                  Log out
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternalSideBarLeft;
