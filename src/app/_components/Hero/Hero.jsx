import { MapPin, Search } from "lucide-react";
import Button from "../../../Components/Button";
import Link from "next/link";
import SearchHero from "../../_components/SearchHero/SearchHero"

const Hero = () => {
    return (
        <section className="w-full h-[calc(100%-2rem)] flex justify-center items-center px-2 py-16 md:py-16 xl:py-24">
            <div className="container flex flex-col justify-center items-center gap-4 px-4 md:px-6">
                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl dark:text-white">Let{"'"}s Find Jobs for You</h1>
                    <p className="text- max-w-[600px] mx-auto font-normal text-gray-400 md:text-xl dark:text-gray-400">
                        Any industry. Any location. Any experience level.
                    </p>
                </div>
                
                {/* Search */}
                <SearchHero />

            </div>
        </section>
    );
}

export default Hero;