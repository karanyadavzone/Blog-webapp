import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 bg-white p-4 shadow-md ">
      <nav className="container flex items-center w-full justify-between px-4 py-4 mx-auto ">
        <p className="font-bold text-xl ">
          My Blogg
        </p>

        <div className="flex items-center h-full">
          <ul className="flex ml-6 gap-6">
            <li className="text-zinc-600 px-4 py-2 hover:text-blue-500 hover:scale-110 font-mono font-semibold text-lg cursor-pointer ">
              {" "}
              Home
            </li>
            <li className="text-zinc-600 px-3 py-2 hover:text-blue-500 hover:scale-110 font-mono font-semibold text-lg cursor-pointer">
              About
            </li>
            <Link href="/CreateForm">
              <li className="text-zinc-600 px-3 py-2 hover:text-blue-500 hover:scale-110 font-mono font-semibold text-lg cursor-pointer">
                Create Blog
              </li>
            </Link>
            <li className="text-zinc-600 spx-3 py-2 hover:text-blue-500 hover:scale-110 font-mono font-semibold text-lg cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
