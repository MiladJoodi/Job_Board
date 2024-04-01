import Nav from "../_components/Nav/Nav"
import Searchbar from "../_components/Search/Search"
import JobItem from "../_components/JobItem/JobItem"
import JobLoading from "../_components/Skeleton/JobLoading"
import SearchHero from "../_components/SearchHero/SearchHero"
import FilterButton from "../_components/FilterButton/FilterButton"


const getData = async () => {
    const res = await fetch('https://mocki.io/v1/045902ab-9c72-468d-bef2-5cd7a7656a3e',
        { cache: 'no-store' }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}


const Joblist = async ({ searchParams }) => {

    const query = searchParams?.query || '';
    const queryLowerCase = query.toLowerCase();


    const data = await getData()
    const jobs = data.jobs
    const filteredJob = jobs.filter((job) => (job.title).toLowerCase().includes(queryLowerCase));

    const handleCheckbox = ()=>{
        console.log("first")
    }


    return (
        <div className="flex gap-2 pb-52">
            <Nav />

            <main className="flex flex-col gap-2 p-2 w-full">
                {/* title */}
                <div className="fledx flex-col gap-2">
                    <h2 className="text-2xl font-bold">FrontEnd Jobs {query}</h2>
                    <span >66,168 vacancies</span>
                </div>

                {/* <Searchbar /> */}
                <div className="flex gap-8">
                    <SearchHero />

                    {/* Filter */}
                    <div className="flex flex-col gap-1">
                        <FilterButton />
                        
                    </div>

                </div>


                <div className="flex flex-col gap-2 my-4">
                    {jobs.length > 0 ?
                        filteredJob.map((job) => (
                            <JobItem data={job} key={job.id} />
                        )) :
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <JobLoading key={index} />
                        ))}

                </div>

            </main>


        </div>
    );
}

export default Joblist;