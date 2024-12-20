import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const MainCategories = () => {
  return (
    <div className='hidden lg:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
            <Link 
                to="/posts" 
                className='bg-blue-800 text-white rounded-full px-4 py-2'
            >
                All Posts
            </Link>

            <Link 
                to="/posts?cat=web-design" 
                className='hover:bg-blue-50 rounded-full px-4 py-2'
            >
                Web Design
            </Link>
            
            <Link 
                to="/posts?cat=development" 
                className='hover:bg-blue-50 rounded-full px-4 py-2'
            >
                Development
            </Link>

            <Link 
                to="/posts?cat=databases" 
                className='hover:bg-blue-50 rounded-full px-4 py-2'
            >
                Databases
            </Link>

        </div>

        <span className='text-xl font-medium'>|</span>

        {/* search */}
        <div className='bg-gray-100 p-2 rounded-full flex items-center gap-2'>
            <CiSearch />
            <input type="text" placeholder='search a post...' className='bg-transparent' />
        </div>
    </div>
  )
}

export default MainCategories