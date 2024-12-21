import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import { TfiWrite } from "react-icons/tfi";

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* BREADCRUMB */}
      <div className='flex gap-4'>
        <Link to="/">Home</Link>
        <span>•</span>
        <span className='text-blue-800'>Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      <div className='flex items-center justify-between'>
        <div className=''>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className='mt-8 text-md md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, beatae.
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
      <MainCategories />
      
      {/* FEATURED POSTS */}
      
      
      {/* POST LIST */}
    </div>
  )
}

export default Homepage