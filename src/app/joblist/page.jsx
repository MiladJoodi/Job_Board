import Nav from "../_components/Nav/Nav"
import Searchbar from "../_components/Search/Search"
import JobItem from "../_components/JobItem/JobItem"

const Joblist = () => {
    return (
        <div className="flex gap-6 pb-52">
            <Nav />

            <main className="flex flex-col gap-2 p-2 bg-green-100 w-full">
                {/* title */}
                <div className="fledx flex-col gap-2">
                    <h2 className="text-2xl font-bold">FrontEnd Jobs</h2>
                    <span >66,168 vacancies</span>
                </div>

                <Searchbar />

                <JobItem />

            </main>


        </div>
    );
}

export default Joblist;