import React from 'react'
import FilterCategory from './FilterCategory'

const FilterTab = () => {

  const catList = ["FIAT", "BWM", "VOLVO", "NISSAN", "FORD", "AUDI"]

  return (
    <div className="z-10 w-56 p-3 rounded-lg select-none">
      <h6 className="mb-3 text-2xl font-medium text-gray-900 dark:text-white">
        Marka
      </h6>
      <div className='text-xl'>
        {catList.map((item, index) => (
          <FilterCategory
            key={index}
            category={item}
          />
        ))}
      </div>

    </div>
  )
}

export default FilterTab