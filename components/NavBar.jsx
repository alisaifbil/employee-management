"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const NavBar = ({
  // Menus,
  activeBtn,
  setActiveBtn,
  providers,
  session,
  signIn,
  signOut,
  children,
}) => {
  // const { status } = useSession();
  const [active, setActive] = useState("");
  const Menus = [{ title: "Add" }, { title: "Entry" }];
  const handleNavBarBtnClick = (title) => {
    console.log(title);
    setActive(title);
    console.log(active);
  };

  return (
    <div className="flex">
      <div className="z-10 text-2xl font-semibold flex-1">
        {/* <nav className="w-screen h-[3.25rem] border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl md:w-auto"> */}
        <nav className="w-screen h-[3.25rem] border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl">
          {/* <div className="flex py-2 pr-[1.5rem] top-0 justify-between md:float-right md:pt-2"> */}
          <div className="flex py-2 pr-[1.5rem] top-0 justify-between">
            {/* <div className="block md:hidden md:w-auto"> */}
            <div className="block">
              {/* <ul className="flex p-0 flex-row space-x-4 mt-0 border-0 md:hidden"> */}
              <ul className="flex p-0 flex-row space-x-4 mt-0 border-0">
                {Menus.map((menu, index) => (
                  <Link
                    key={index}
                    href={`/${menu.title.toLowerCase()}`}
                    className={`${
                      menu.title === "Entry" || menu.title !== "Entry"
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    <li
                      key={index}
                      onClick={() => {
                        handleNavBarBtnClick(menu.title);
                      }}
                      className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${
                        active === menu.title
                          ? "text-black font-bold"
                          : "text-gray-300"
                      }`}
                    >
                      <span className={`origin-left duration-200`}>
                        {menu.title}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* <div className="flex align-middle">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5">
              <button
                type="button"
                onClick={signOut}
                className="rounded-full border border-black bg-transparent py-0.5 px-2.5 text-black transition-all hover:bg-black hover:text-white text-center text-xs font-inter flex items-center justify-center"
              >
                Sign Out
              </button>
              <Link href="#">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full object-contain"
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="rounded-full border border-black bg-black py-0.5 px-2.5 text-white transition-all hover:bg-white hover:text-black text-center text-xs font-inter flex items-center justify-center md:mt-2"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div> */}
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
