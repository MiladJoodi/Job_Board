import { Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import LoginBtn from "../LoginBtn/LoginBtn"

const Header = () => {
  return (
    <header className=" py-4 px-6 flex justify-between items-center dark:text-white">
      <div className="">

        <Link href="/" className="text-bold font-extrabold text-3xl tracking-tighter">
          Job Hunter
        </Link>
      </div>
      <div className="flex gap-5 justify-center items-center h-full">
        <div className="p-2 rounded-lg dark:text-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 transition-all duration-150 cursor-pointer">
          <Languages />
        </div>


        <div className="p-2 rounded-lg dark:text-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 transition-all duration-150 cursor-pointer">
          <DarkModeSwitch />
        </div>

        <LoginBtn />
        
      </div>
    </header>
  );
}

export default Header;