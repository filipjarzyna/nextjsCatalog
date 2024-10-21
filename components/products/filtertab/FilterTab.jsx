import React from 'react'
import FilterCheck from './FilterCheck'
import { brandsList, categoriesList } from '../../reusable/Variables'
import DropdownMenu from '@components/reusable/DropdownMenu'

const FilterTab = ({ handleBrand, handleCategory }) => {

  return (
    <div className="z-10 w-56 p-3 rounded-lg select-none break-words whitespace-normal">
      <h3 className="mb-3 text-2xl font-medium text-white">
        Filtry
      </h3>
      <div className='divide-y divide-solid divide-gray-400'>
        <div className='text-xl mb-4'>
          <h3 className='mb-1 text-xl font-medium text-white'>Marka</h3>
          {brandsList.map((item, index) => (
            <FilterCheck
              key={index}
              brand={item}
              handleChange={handleBrand}
            />
          ))}
        </div>
        <div className='text-xl'>
          <h3 className='mt-3 mb-1 text-xl font-medium text-white'>Kategoria</h3>
          {categoriesList.map((item, index) => (
            <FilterCheck
              key={index}
              brand={item}
              handleChange={handleCategory}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterTab