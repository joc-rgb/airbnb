'use client';

import {IoMdSearch} from 'react-icons/io'

const Search = () => {
  return (
    <div
        className='
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            cursor-pointer
            transition
            hover:shadow-md
        '
    >
        <div className="flex justify-between items-center px-1">
            <div className="text-sm font-semibold px-3 text-center">
                Anywhere
            </div>
            <div className="text-sm font-semibold px-6 text-center sm:block">
                Any Week
            </div>
            <div className="text-sm px-3 hidden sm:block">
                Add Guests
            </div>
            <div className="rounded-full bg-rose-500 text-white p-2">
                <IoMdSearch size={18} />
            </div>
        </div>
    </div>
  )
}

export default Search