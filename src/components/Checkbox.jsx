import React from 'react'

const Checkbox = ({data, id}) => {
  return (
    <>
        <div className='form-group'>
        <input type="checkbox" id={`checkbox_${id}`} className='checkbox relative' value={data}/>
        <label htmlFor={`checkbox_${id}`} className='text-xl text-white font-medium'>{data}</label>
        </div>
    </>
  )
}

export default Checkbox