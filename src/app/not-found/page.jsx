import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center text-center px-5'>
      <h1 className='text-7xl max-smallest:text-5xl text-newgold font-bold'>Oops!</h1>
      <h3 className='mt-3 text-2xl max-smallest:text-xl'>404 - PAGE NOT FOUND</h3>
      <p className='text-xl max-smallest:text-lg mt-6'>The page you are looking for could not be found</p>
      <div>
        <Link href='/'>
      <button className='mt-3 text-lg bg-newgold rounded-md px-4 py-2 text-offwhite max-smallest:text-base'>Go To Home</button>
        </Link>

      </div>
    </div>
  )
}

export default NotFound