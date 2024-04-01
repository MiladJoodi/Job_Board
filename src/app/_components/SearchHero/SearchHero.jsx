"use client"
import { MapPin, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchHero = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleSearch (term){
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set('query', term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="flex w-full max-w-sm flex-col gap-2">
            <div className="flex relative items-center">
                <input
                    autoFocus
                    className="mx-auto border foco p-3 rounded-md font-weight-medium border-gray-200 shadow-sm w-full outline-none"
                    placeholder="Keywords"
                    type="text"
                    onChange={(e)=>{handleSearch(e.target.value)}}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <MapPin size={21} className="absolute right-3 text-gray-400 cursor-pointer" />
            </div>

            <Link href={`/joblist/?query=${searchParams?.get('query')?.toString()}`} className="flex justify-center items-center gap-2 mx-auto w-full btn-black text-white rounded-md p-3 dark:border">
                Search
                <Search size={21} />
            </Link>

        </div>
    );
}

export default SearchHero;