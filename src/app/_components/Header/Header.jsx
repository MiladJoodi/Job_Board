import { Languages, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


const Header = () => {
  return (
    <header className=" py-4 px-6 flex justify-between items-center dark:text-white">
      <div className="">

        <Link href="/" className="text-bold font-extrabold text-3xl tracking-tighter">
          Job Hunter
        </Link>
      </div>
      <div className="flex gap-5 justify-center items-center h-full">
        <div className="p-2 border rounded-full cursor-pointer">
          <Languages />
        </div>

        <LoginLink>
          <div className="p-2 border rounded-full cursor-pointer">
            <UserRound />
          </div>
        </LoginLink>
        
        <div className="p-2 border rounded-full cursor-pointer">
          <DarkModeSwitch />
        </div>

      </div>
    </header>
  );
}

export default Header;