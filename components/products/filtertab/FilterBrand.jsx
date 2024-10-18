import React from 'react'

const FilterBrand = ({ brand, handleChange }) => {
  return (
    <li className="flex items-center">
      <input id={brand} type="checkbox" value={brand} onChange={(e) => handleChange(e.target.value)}
        className="w-4 h-4 bg-red-600 rounded-xl text-red-600" />
      <label htmlFor={brand} className="ml-2">
        {brand}
      </label>
    </li>
  )
}

export default FilterBrand