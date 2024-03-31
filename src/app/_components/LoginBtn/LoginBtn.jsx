import { UserRound } from "lucide-react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const LoginBtn = async () => {

    const {isAuthenticated} = getKindeServerSession();
    const user = await isAuthenticated();
    
    return (
       <>
        {user ? (
            <LogoutLink>Log out</LogoutLink>
        ) : (
            <LoginLink>
          <div className="p-2 rounded-lg dark:text-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 transition-all duration-150 cursor-pointer">
            <UserRound />
          </div>
        </LoginLink>
        )}
       </>
        
    );
}

export default LoginBtn;