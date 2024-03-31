import Nav from "../_components/Nav/Nav"
import Searchbar from "../_components/Search/Search"
import JobItem from "../_components/JobItem/JobItem"

const Joblist = () => {
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

                <div className="flex flex-col gap-1 my-4">
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                </div>

            </main>


        </div>
    );
}

export default Joblist;