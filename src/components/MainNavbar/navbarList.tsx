"use client";

import { INavbarItem } from "@/models/general";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaRegWindowClose,
  FaShoppingBasket,
  FaStar,
} from "react-icons/fa";

const listItems: INavbarItem[] = [
  {
    id: "favorites",
    title: "favorites",
    href: "/favorites",
    icon: <FaStar style={{ color: "#FF6F00" }} />,
  },
  {
    id: "cart",
    title: "shopping cart",
    href: "/cart",
    icon: <FaShoppingBasket style={{ color: "#FF6F00" }} />,
  },
];

export default function NavbarList() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuButtonClicked = () => {
    setIsMenuOpen(isMenuOpen ? false : true);
  };

  return (
    <>
      <button
        onClick={menuButtonClicked}
        className="flex md:hidden ml-auto mb-4 mr-4"
      >
        {isMenuOpen ? <FaRegWindowClose /> : <FaBars />}
      </button>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden md:flex"
        } w-[90%] md:w-fit flex-col md:flex-row absolute md:relative top-28 md:top-0 z-20 bg-bg-secondary
        md:bg-bg-primary border left-1/2 transform -translate-x-1/2 md:border-none p-4 md:p-0 h-[70vh] md:h-fit`}
      >
        <ul className="flex md:mt-auto flex-col md:flex-row items-baseline">
          {listItems.map((item) => (
            <li
              key={item.id}
              className="mx-6 border-b-4 border-transparent font-semibold py-4
        hover:cursor-pointer hover:text-custom-orange hover:border-b-4 hover:border-custom-orange"
            >
              <Link className="capitalize flex items-center" href={item.href}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
