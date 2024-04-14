import React from 'react'

const TabButton = ({active,selectTab,Children}) => {
    const buttonClasses = active ? 'text-white border-b border-white border-purple-500 ':'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {Children}
      </p>
    </button>
  )
}

export default TabButton
