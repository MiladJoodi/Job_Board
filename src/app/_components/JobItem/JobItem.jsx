import { BarChartBig, Bookmark, Bug, Clock7, Eye, Flag, Gauge, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobItem = () => {
    return (
        <div className="flex flex-col gap-2 border px-2 pt-4 pb-2 rounded-md">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                        alt="company title"
                        width={70}
                        height={70}
                        className="w-[55px] h-[55px] rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <Link href="/" className="font-bold text-xl hover:underline cursor-pointer">
                            Senior Front End Developer
                        </Link>

                        <Link href="" className="text-sm hover:underline">
                            Eindhoven, Netherlands
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Link href="/" className="p-2">
                        <Heart />
                    </Link>
                    <Link href="/" className="p-2">
                        <Bookmark />
                    </Link>
                </div>
            </div>

            {/* footer */}
            <div className="flex items-center justify-between">

                <div className="flex gap-4 px-2">
                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <MapPin size={14} />
                        Remote
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Clock7 size={14} />
                        Part Time
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <BarChartBig size={14} />
                        85,000$
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Gauge size={14} />
                        Senior
                    </div>

                     <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Eye size={14} />
                        871
                    </div>
                    
                </div>

                <Bug size={14} />

            </div>

        </div>
    );
}

export default JobItem;