import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-orange-100 text-white hover:bg-transparent rounded-sm border-2 border-transparent hover:border-orange-100 transition-all duration-300'>
    {children}
    </button>
  )
}

export default Button