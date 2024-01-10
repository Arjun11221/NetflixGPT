import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center' >
      <form className=' w-1/2 py-10 bg-transparent grid grid-cols-12 ' >
        <input className='p-4 m-4 col-span-10 outline-none rounded-md ' placeholder='what would you like to watch today?' /> 
        <button className='col-span-2 m-4 rounded-md bg-red-600 text-white ' >Search</button>  
      </form>
    </div>
  )
}

export default GptSearchBar