import { MapPin, Search } from "lucide-react";
import Button from "../../../Components/Button";

const Searchbar = () => {
    return (
        <div>
            <div className="flex items-center gap-1">
                <div className=" relative flex items-center">
                    <input
                        autoFocus
                        className="mx-auto border p-3 pl-10 rounded-md font-weight-medium border-gray-200 shadow-sm w-full outline-none"
                        placeholder="I'm, looking for jobs..."
                        type="text"
                    />
                    <Search size={21} className="absolute left-3 top-3 text-gray-400 cursor-pointer" />
                </div>

                <div className=" relative flex items-center">
                    <input
                        autoFocus
                        className="mx-auto border p-3 pl-10 rounded-md font-weight-medium border-gray-200 shadow-sm w-full outline-none"
                        placeholder="In the region..."
                        type="text"
                    />
                    <MapPin size={21} className="absolute left-3 top-3 text-gray-400 cursor-pointer" />
                </div>

                <Button className="w-36 flex justify-center items-center gap-2 btn-black text-white rounded-md p-3 px-5 dark:border">
                    Search
                </Button>

            </div>
        </div>
    );
}

export default Searchbar;