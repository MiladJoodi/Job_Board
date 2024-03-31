import { MapPin, Search } from "lucide-react";
import Button from "../../../Components/Button";

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
                <div className="flex w-full max-w-sm flex-col gap-2">
                    <div className="flex relative items-center">
                        <input
                            autoFocus 
                            className="mx-auto border foco p-3 rounded-md font-weight-medium border-gray-200 shadow-sm w-full outline-none"
                            placeholder="Keywords"
                            type="text"
                        />
                        <MapPin size={21} className="absolute right-3 text-gray-400 cursor-pointer" />
                    </div>

                    <div className="">
                        <Button className="flex justify-center items-center gap-2 mx-auto w-full btn-black text-white rounded-md p-3 dark:border">
                            Search
                            <Search size={21} />
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;