import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useState } from 'react';
import { useAdminContext } from '../../context/AdminContext';


const Table = () => {

  const adminTableData = useAdminContext()
  const [tableData, setTableData] = useState(adminTableData);

 const columns = [
  { label: "Name", accessor: "full_name" },
  { label: "Last Completed", accessor: "last_completed" },
  { label: "Animal", accessor: "animal" },
  { label: "Work Style Pattern", accessor: "work_style_pattern" },
  { label: "Has 360", accessor: "has_360" },
  { label: "Multiples", accessor: "multiple" },
 ];


  return (
    <table className='w-full'>
        <TableHead columns={columns}/>
        <TableBody columns={columns} tableData={tableData}/>
    </table>
  )
}

export default Table