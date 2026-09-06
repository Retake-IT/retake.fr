import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";
import retakeLogo from "../../public/img/logo.webp";

export const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="container flex items-center justify-between p-8 mx-auto xl:px-1">
        <Link href="/" aria-label="Retake — accueil" className="shrink-0">
          <Image className="w-auto h-12" src={retakeLogo} alt="Retake" priority />
        </Link>

        <div className="flex items-center gap-3">
          <ThemeChanger />
          <Link
            href="/#footer"
            className="px-5 py-2 font-medium text-[#0b0f0a] bg-[#7ed957] rounded-md hover:bg-[#6ac743]"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </nav>
  );
};
