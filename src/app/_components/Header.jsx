"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../_Images/logo_large.png";
import Burger from "../_Images/burger-bar.png";
import NavLinks from "../_elements/NavLinks";
import { ButtonSecondary } from "../_elements/Buttons";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => (menu ? setMenu(false) : setMenu(true));

  return (
    <div>
      <header className=" bg-primary">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="\">
                <span className="sr-only">Home</span>
                <Image src={Logo} alt="Logo" width={200} height={200} />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm font-bold">
                  <NavLinks name={"Home"} href="/" />
                  <NavLinks name={"Mobile"} href="/mobile" />
                  <NavLinks name={"Internet"} href="/internet" />
                  <NavLinks name={"Offerte"} href="/offers" />
                  <NavLinks name={"Chi siamo"} href="/info" />
                  
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                  <ButtonSecondary name="Accedi" href="/login"/>
                <div className="block md:hidden">
                  <button
                    onClick={openMenu}
                    className="rounded bg-secondary p-2 text-primary transition hover:text-gray-600/75"
                  >
                    <Image src={Burger} alt="Burger" width={20} height={20} />
                  </button>
                </div>
                <div className="relative"></div>
                {menu && (
                  <div
                    className="absolute z-10 top-[60px] right-8 w-40 bg-primary rounded-md border border-primary shadow-lg"
                    role="menu"
                  >
                    <div className="p-1">
                      <ul className="space-y-4 p-4 text-center">
                        <NavLinks name={"Home"} href="/" />
                        <NavLinks name={"Mobile"} href="/mobile" />
                        <NavLinks name={"Internet"} href="/internet" />
                        <NavLinks name={"Offerte"} href="/offers" />
                        <NavLinks name={"Chi siamo"} href="/info" />
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
