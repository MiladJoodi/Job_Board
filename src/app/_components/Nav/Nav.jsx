import { BarChartBig, Facebook, Github, Heart, Linkedin, MailCheck, Newspaper, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const list = [
    {
        title: "Search",
        icon: <Search size={18} />
    },
    {
        title: "Favorites",
        icon: <Heart size={18} />
    },
    {
        title: "Create a CV",
        icon: <Newspaper size={18} />
    },
    {
        title: "Salaries",
        icon: <BarChartBig size={18} />
    },
    {
        title: "Subcriptions",
        icon: <MailCheck size={18} />
    },
]

const social = [
    {
        url: "https://www.linkedin.com/in/MiladJoodi",
        icon: <Linkedin />
    },
    {
        url: "https://github.com/MiladJoodi",
        icon: <Github />
    },
    {
        url: "https://www.facebook.com/miladjood/",
        icon: <Facebook />
    },
]

const footerLink = [
    {
        title: "About Job Hunter",
        url: "/"
    },
    {
        title: "Partnership",
        url: "/"
    },
    {
        title: "Additional",
        url: "/"
    },
    {
        title: "Contact",
        url: "/"
    },
]

const Nav = () => {
    return (
        <nav className="flex flex-col w-2/6 mx-2 p-4 gap-6">

                {/* Link Box */}
                <div className="flex flex-col gap-1">
                    {list.map((item, index) => (
                        <div key={index} className="flex gap-3 dark:text-gray-200 dark:hover:text-white hover:bg-gray-100 dark:bg-gray-900 hover:dark:bg-gray-700 px-4 py-2 border cursor-pointer">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                {/* Link Box */}

                {/* app */}
                <div className="flex flex-col gap-2">
                    <span className="text-gray-600 dark:text-gray-200">Never miss new jobs in the app</span>
                    <Link href="/">
                        <Image
                            src="/google-play.png"
                            alt="google play"
                            width={250}
                            height={70}
                            className="w-[129px] h-[40px] rounded-md"
                        />
                    </Link>

                    <Link href="/">
                        <Image
                            src="/app-store.png"
                            alt="google play"
                            width={250}
                            height={70}
                            className="w-[129px] h-[40px] rounded-md"
                        />
                    </Link>

                </div>
                {/* app */}


                {/* social */}
                <div className="flex flex-col gap-2">
                    <span className="text-gray-600 dark:text-gray-200">Follow our socials</span>
                    <div className="flex gap-2">
                        {social.map((item, index) => (
                            <Link key={index} href={item.url} className="p-2 rounded-lg dark:text-gray-200 text-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 hover:dark:bg-gray-700 transition-all duration-150">
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* social */}

                {/* nav footer */}
                <div className="flex flex-col gap-2">
                    {footerLink.map((item, index) => (
                        <Link key={index} href={item.url} className="dark:text-gray-200 ">
                            {item.title}
                        </Link>
                    ))}
                </div>
                {/* nav footer */}
                     <span className="text-sm">© 2018-2024 Job Hunter</span>   
            </nav>
    );
}

export default Nav;