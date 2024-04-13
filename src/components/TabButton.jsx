import React from 'react'

const TabButton = ({active,selectTab,Children}) => {
    const buttonClasses = active ? 'text-white border-b border-white border-purple-500 ':'text-[#'
  return (
    <button className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500' >
        {Children}
    </button>
  )
}

export default TabButton
