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
          <div className="p-2 border rounded-full cursor-pointer">
            <UserRound />
          </div>
        </LoginLink>
        )}
       </>
        
    );
}

export default LoginBtn;