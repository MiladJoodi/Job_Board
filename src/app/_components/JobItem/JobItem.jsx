import { BarChartBig, Bookmark, Clock7, Eye, Flag, Gauge, Heart, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const JobItem = ({ data }) => {
    return (
        <div className="flex flex-col gap-2 border px-2 pt-4 pb-2 rounded-md">
            <div className="flex gap-2 items-center justify-between">
                <Link href={"/details/" + data.id} className="flex gap-2 items-center">
                    <Image
                        src={data.logo}
                        alt={data.title}
                        width={70}
                        height={70}
                        className="w-[55px] h-[55px] rounded-full object-contain"
                    />
                    <div className="flex flex-col">
                        <h2 className="font-bold text-xl hover:underline cursor-pointer">
                            {data.title}
                        </h2>

                        <h2 className="text-sm hover:underline">
                            {data.description}
                        </h2>
                    </div>
                </Link>

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
                        {data.location}
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Clock7 size={14} />
                        {data.employment_type}
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <BarChartBig size={14} />
                        ({data?.salary}).toFixed(2)$
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Gauge size={14} />
                        {data.level}
                    </div>

                    <div className="flex gap-0.5 items-center text-gray-500 text-sm">
                        <Eye size={14} />
                        {data.view}
                    </div>

                </div>

                <Link href="/">
                    <Flag className="text-gray-500" size={12} />
                </Link>

            </div>

        </div>
    );
}

export default JobItem;