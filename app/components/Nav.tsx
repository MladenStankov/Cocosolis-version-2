import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping, FaRegUser } from "react-icons/fa6";

export default function Nav() {
  return (
    <nav
      className="bg-white w-screen h-auto flex flex-row justify-center items-center gap-10
     max-h-[100px] text-[rgb(129,108,101)] text-base font-light py-4 tracking-wider shadow-sm overflow-x-auto whitespace-nowrap"
    >
      <Link href="#">
        <img
          id="logo"
          src="https://cocosolis.com/wp-content/uploads/cocosolis-logo.svg"
          alt="Logo"
          className="h-20 transition-all duration-300"
        />
      </Link>

      <Link href="#" className="hover:text-[#DAA48A]">
        НАЧАЛО
      </Link>
      <Link href="#" className="hover:text-[#DAA48A]">
        ПРОДУКТИ
      </Link>
      <Link href="#" className="hover:text-[#DAA48A]">
        CLUB
      </Link>
      <Link href="#" className="hover:text-[#DAA48A]">
        ЗА НАС
      </Link>
      <Link href="#" className="hover:text-[#DAA48A]">
        КОНТАКТИ
      </Link>

      <RxHamburgerMenu size={25} />

      <div className="flex flex-row justify-center gap-10">
        <IoIosSearch size={25} strokeWidth={15} />
        <div className="relative -ml-5">
          <FaCartShopping size={25} className="absolute" />
          <div className="absolute w-[20px] h-[20px] bg-[#DAA48A] rounded-full text-white flex justify-center items-center -top-2 left-3">
            0
          </div>
        </div>
        <div className="flex font-normal gap-1">
          <FaRegUser size={25} />
          <p className="hover:text-[#DAA48A]">ВЛЕЗ В ПРОФИЛ</p>
        </div>
      </div>
    </nav>
  );
}
