import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="cursor-pointer text-2xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent transition duration-500 ease-in-out hover:text-secondary block lg:hidden outline-none focus:outline-none"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="text-white fas fa-bars"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-right rounded shadow-lg min-w-48"
        }
      >
        
        <Link
          to="/"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent transition duration-500 ease-in-out hover:text-secondary text-primary"
          }
        >
          الصفحة الرئيسية
        </Link>
        <Link
          to="/"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent transition duration-500 ease-in-out hover:text-secondary text-primary"
          }
        >
          الخدمات
        </Link>
        <Link
          to="/"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent transition duration-500 ease-in-out hover:text-secondary text-primary"
          }
        >
          الأعمال
        </Link>
        <Link
          to="/"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent transition duration-500 ease-in-out hover:text-secondary text-primary"
          }
        >
          العملاء
        </Link>
        <Link
          to="/"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent transition duration-500 ease-in-out hover:text-secondary text-primary"
          }
        >
          التواصل
        </Link>
      </div>
    </>
  );
};

export default PagesDropdown;
