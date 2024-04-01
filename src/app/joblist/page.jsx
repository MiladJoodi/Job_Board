import Nav from "../_components/Nav/Nav"
import Searchbar from "../_components/Search/Search"
import JobItem from "../_components/JobItem/JobItem"
import JobLoading from "../_components/Skeleton/JobLoading"

const getData = async () => {
    const res = await fetch('https://mocki.io/v1/045902ab-9c72-468d-bef2-5cd7a7656a3e',
        { cache: 'no-store' }
    )

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json();
}


const Joblist = async () => {

    const data = await getData()
    const jobs = data.jobs

    // console.log(jobs)


    return (
        <div className="flex gap-2 pb-52">
            <Nav />

            <main className="flex flex-col gap-2 p-2 w-full">
                {/* title */}
                <div className="fledx flex-col gap-2">
                    <h2 className="text-2xl font-bold">FrontEnd Jobs</h2>
                    <span >66,168 vacancies</span>
                </div>

                <Searchbar />

                <div className="flex flex-col gap-2 my-4">
                    {jobs.length > 0 ?
                        jobs.map((job) => (
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