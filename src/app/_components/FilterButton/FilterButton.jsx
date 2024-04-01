"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const filterData = [
    {
        title: "All",
        slug: "all"
    },
    {
        title: "Front End",
        slug: "front"
    },
    {
        title: "Back End",
        slug: "backend"
    },
    {
        title: "Fullstack",
        slug: "full"
    },
]

const FilterButton = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const { replace } = useRouter();


    const handleFilter = (value) => {
    const params = new URLSearchParams(searchParams);
        console.log(params.query)
        replace(`${pathname}?query=${value}`)

        if(value === "all"){
            console.log("first")
            replace(`${pathname}`)
        }

    }

    return (
        <>
            {filterData.map((item) => (
                <div key={item} className="flex gap-2 items-center cursor-pointer p-1">
                    <input
                        id={item.slug}
                        type="radio"
                        className="w-[20px] h-[20px] accent-black focus:accent-black p-2 cursor-pointer"
                        value={item.slug}
                        name="example[]"
                        onChange={(e) => handleFilter(e.target.value)}
                    />

                    <label htmlFor={item.slug} className="hover:underline cursor-pointer">{item.title}</label>
                </div>
            ))}
        </>

    );
}
export default FilterButton;