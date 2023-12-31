import React from 'react'

const TableHead = ({columns}) => {
  return (
    <thead className="bg-beige-900">
      <tr>
      {
        columns.map(({label, accessor})=>{
          return <th className='py-3 px-3 whitespace-nowrap text-left' key={accessor}>{label}</th>
        })
      }
      </tr>
    </thead>
  )
}

export default TableHead