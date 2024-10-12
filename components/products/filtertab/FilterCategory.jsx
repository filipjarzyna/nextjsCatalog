import React from 'react'

const FilterBrand = ({brand, handleChange}) => {
  return (
    <li className="flex items-center">
    <input id="apple" type="checkbox" value={brand} onChange={(e) => handleChange(e.target.value)}
      className="w-4 h-4 bg-gray-100 rounded focus:ring-red-500" />

    <label htmlFor="apple" className="ml-2">
      {brand}
    </label>
  </li>
  )
}

export default FilterBrand