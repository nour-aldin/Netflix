import axios from 'axios'
import React, { useState,useEffect } from 'react'

//react icons
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'


import Movie from './Movie'

const Row = ({rowId, title, fetchURL}) => {
  //
  const [movies, setMovies] = useState([])
  

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results)
    })
   
  }, [fetchURL])
  
  const slideLeft = () => {
    const slider = document.getElementById(rowId)
    slider.scrollLeft -= 500
  }
  const slideRight = () => {
    const slider = document.getElementById(rowId)
    slider.scrollLeft += 500
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div id={rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
           <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
      </div>
    </>
  )
}

export default Row