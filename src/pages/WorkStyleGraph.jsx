import { useParams } from "react-router-dom"
import { useAdminContext } from "../context/AdminContext";
import AssessmentProfile from "../components/AssessmentProfile";
import ScoresChart from "../components/Charts/ScoresChart";

const WorkStyleGraph = () => {
  const adminTableData = useAdminContext()
  const { id } = useParams();

  const tableRow = adminTableData.find((dt) => dt.id === parseInt(id, 10));

  return (
    <main className='bg-beige-100'>
      <section className='w-full md:pt-36'>
        <AssessmentProfile profile={tableRow} />
        <div className="flex container gap-10 flex-wrap mx-auto md:px-10 px-5">
          <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
            <small className='mb-1 text-gray-700 font-semibold'>Filter By Category</small>
            <select name="filter" id="" className='bg-transparent focus:outline-none'>
              <option value="View All" selected>View All</option>
              <option value="Self-Management">Self-Management</option>
              <option value="Motivational Factors">Motivational Factors</option>
              <option value="Interpersonal Dynamics">Interpersonal Dynamics</option>
            </select>
          </div>

          <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
            <small className='mb-1 text-gray-700 font-semibold'>Sort By</small>
            <select name="filter" id="" className='bg-transparent focus:outline-none'>
              <option value="category" defaultValue="category">Category</option>
              <option value="name">Name</option>
              <option value="score">Score</option>
            </select>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container bg-beige-100 mx-auto md:px-10 px-5">
        <ScoresChart work_style={[23,-45,16,33,-5,23,26,-35,-41,11,43]}/>
        </div>
      </section>
    </main>
  )
}

export default WorkStyleGraph