import React from 'react'

const FilterCategory = ({category}) => {
  return (
    <li className="flex items-center">
    <input id="apple" type="checkbox" value=""
      className="w-4 h-4 bg-gray-100 rounded focus:ring-red-500" />

    <label htmlFor="apple" className="ml-2">
      {category}
    </label>
  </li>
  )
}

export default FilterCategory