import React from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Nav from './Nav';
function Sitter() {
  return (
    <div>
        <div><Nav/></div>
      <div className=' flex flex-row '>
    <div className='w-[42%]'>
      <img className='pt-40 pl-40 ' src="https://media.istockphoto.com/id/1216032293/vector/woman-with-dog.jpg?s=612x612&w=0&k=20&c=hGTVnS1PM779nOyxG7G9Vut2pphSj4XiFSoeprRG-pw=" alt="Description" style={{ width: '80vw', height: '70vh' }} />
    </div>
    <div className='pt-40 pl-80 flex flex-col items-center justify-center gap-8'>
    <a href="http://localhost:3000/sitterdetails">
  <div className="card hover:bg-gray-400 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-64 h-52 flex flex-col justify-center items-center bg-amber-700 border border-gray-300 rounded-3xl">
    <div className="card-body">
      <h2 className="card-header text-3xl text-center ">Sitter</h2>
      <h2 className="card-header text-3xl text-center pb-8">Details</h2>
      <div className="absolute bottom-0 right-0 mr-4 mb-4 pr-4">
      <HiOutlineArrowLongRight className="text-4xl hover:text-blue-950 " />
    </div>
    </div>
  </div>
</a>

<a href="http://localhost:3000/bookings">
  <div className="card hover:bg-gray-400 hover:shadow-lg shadow-md transform transition-transform hover:scale-105 p-4 w-64 h-52 flex flex-col justify-center items-center bg-amber-700 border border-gray-300 rounded-3xl">
    <div className="card-body">
      <h2 className="card-header text-3xl text-center pl-4 ">Contact and</h2>
      <h2 className="card-header text-3xl text-center pb-8 pl-8 ">Booking</h2>
      <div className="absolute bottom-0 right-0 mr-4 mb-4 pr-4">
      <HiOutlineArrowLongRight className="text-4xl hover:text-blue-950 " />
    </div>
    </div>
  </div>
</a>
          </div>
    </div>
    </div>
  )
}

export default Sitter