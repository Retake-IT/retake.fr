"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ThemeChanger from "./DarkSwitch";
import retakeLogo from "../../public/img/logo.webp";

const navigation = [
  { label: "Produits", href: "/produits" },
  { label: "FAQ", href: "/#faq" },
];

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="w-full">
      {({ open, close }) => (
        <div className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
          <Link href="/" aria-label="Retake — accueil" className="shrink-0">
            <Image className="w-auto h-12" src={retakeLogo} alt="Retake" priority />
          </Link>

          <div className="flex items-center gap-3 ml-auto lg:order-2 lg:ml-0">
            <ThemeChanger />
            <Link
              href="/#footer"
              className="hidden px-5 py-2 text-white bg-[#5a9e2f] rounded-md sm:inline-block hover:bg-[#4d8a27]"
            >
              Nous contacter
            </Link>
            <DisclosureButton
              className="p-2 text-gray-600 rounded-md lg:hidden dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-trueGray-800"
              aria-label="Ouvrir le menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                {open ? (
                  <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </DisclosureButton>
          </div>

          {/* Desktop links */}
          <ul className="hidden lg:flex lg:items-center lg:gap-2 lg:order-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-[#5a9e2f] focus:text-[#5a9e2f] focus:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile panel */}
          <DisclosurePanel className="flex flex-col w-full mt-4 lg:hidden">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => close()}
                className="w-full px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-trueGray-800"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#footer"
              onClick={() => close()}
              className="w-full px-4 py-2 mt-2 text-center text-white bg-[#5a9e2f] rounded-md hover:bg-[#4d8a27]"
            >
              Nous contacter
            </Link>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  );
};
