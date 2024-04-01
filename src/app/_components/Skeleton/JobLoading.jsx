const JobLoading = () => {
    return (
        <div className="flex flex-col gap-2 border px-2 pt-4 pb-2 rounded-md">
            <div className="flex gap-2 items-center justify-between">
                
                <div className="flex gap-2 items-center">
                    <div className="w-[55px] h-[55px] rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="flex flex-col gap-2">
                        <div className="font-bold text-xl hover:underline cursor-pointer w-[250px] h-[20px] rounded-md bg-gray-300 animate-pulse"></div>
                        <div className="font-bold text-xl hover:underline cursor-pointer w-[350px] h-[20px] rounded-md bg-gray-300 animate-pulse"></div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <div className="w-[20px] h-[20px] rounded-md bg-gray-300 animate-pulse"></div>
                    <div className="w-[20px] h-[20px] rounded-md bg-gray-300 animate-pulse"></div>
                </div>

            </div>

            <div className="flex items-center justify-between">
            <div className="flex gap-4 px-2">
            <div className="flex gap-2 items-center text-gray-500 text-sm">
                <div className="w-[55px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-[55px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-[55px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-[55px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
                <div className="w-[55px] h-[20px] bg-gray-300 rounded-md animate-pulse"></div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default JobLoading;