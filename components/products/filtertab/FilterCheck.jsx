import React from 'react'

const FilterCheck = ({ brand, handleChange }) => {
  return (
    <li className="flex items-center hover:text-red-400 hover:cursor-pointer">
      <input id={brand} type="checkbox" value={brand} onChange={(e) => handleChange(e.target.value)}
        className="w-4 h-4 rounded-xl" />
      <label htmlFor={brand} className="ml-2 hover:cursor-pointer">
        {brand}
      </label>
    </li>
  )
}

export default FilterCheck