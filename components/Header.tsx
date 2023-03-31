import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-5 bg-white z-50 shadow-md">
      {/* left */}
      <div>
        {/* <Image
          src={"https://links.papareact.com/4t3"}
          alt={"logo"}
          height={30}
          width={30}
        /> */}
        <div>
          <h1 className="font-bold">
            Kkum <span className="text-violet-500">Dream AI</span>
          </h1>
          <h2>powered by DALL.E 2, Chat GPT & Microsoft Azure!</h2>
        </div>
      </div>

      {/* right */}
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://www.paparect.com"
          className="px -2 font-light text-right"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
