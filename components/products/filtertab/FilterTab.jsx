import React from 'react'
import FilterBrand from './FilterCategory'
import { brandsList } from '../lists'

const FilterTab = ({handleBrand, handleCategory}) => {

  return (
    <div className="z-10 w-56 p-3 rounded-lg select-none">
      <h6 className="mb-3 text-2xl font-medium text-gray-900 dark:text-white">
        Marka
      </h6>
      <div className='text-xl'>
        {brandsList.map((item, index) => (
          <FilterBrand
            key={index}
            brand={item}
            handleChange={handleBrand}
          />
        ))}
      </div>      
    </div>
  )
}

export default FilterTab