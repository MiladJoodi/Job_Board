import { Bookmark, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobItem = () => {
    return (
        <div className="flex flex-col border p-2">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
                        alt="company title"
                        width={70}
                        height={70}
                        className="w-[55px] h-[55px] rounded-md object-cover"
                    />
                    <div className="flex flex-col">
                        <Link href="/" className="font-bold text-xl hover:underline cursor-pointer">
                            Senior Front End Developer
                        </Link>

                        <Link href="" className="text-sm text-gray-600 hover:underline">
                            Eindhoven, Netherlands
                        </Link>
                    </div>
                </div>

                <div className="flex gap-2 bg-blue-200">
                    <Heart />
                    <Bookmark />
                </div>
            </div>
            {/* footer */}
            <div>
                <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={15} />
                    Remote
                </div>
            </div>

        </div>
    );
}

export default JobItem;