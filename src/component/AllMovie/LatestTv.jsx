import React, { useState } from 'react'
import * as Icon from "../../assest/icon";
import { FaSortAmountDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaFolderOpen } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import TopUSerRank from '../UserRanking/TopUSerRank';
import BestUser from '../UserRanking/BestUser';
import { Link } from 'react-router-dom';
import { LatestData } from '../Data/Data';

const LatestTv = () => {

//dropdown

  return (

<div className='bg-black flex mt-14  '>
  <div className='ml-6  '>
<div className='flex'>
        <h1 className='text-xl font-bold text-white mt-4'>Latest Tv Show</h1>
            <Icon.DoubleRight className="w-4  mt-6 text-white"/>
        </div>
        <div className='flex gap-4 ml-4 mt-4 mb-4 border-b border-gray-800 pt-6 pb-6'>
          <div className='flex text-white gap-1'> <FaFolderOpen className='mt-1 text-teritory'/>Geners
            < Icon.DownAero className="w-4 text-primary mt-2  "/>
          </div>
          <div className='flex text-white gap-1'> <SlCalender className='mt-1 text-teritory'/>Years
            < Icon.DownAero className="w-4 text-primary mt-2  "/>
          </div>
          <div className='flex text-white gap-1'><FaSortAmountDown className='mt-1 text-teritory'/>Sort
            < Icon.DownAero className="w-4 text-primary mt-2  "/>
          </div>
          <div className='flex ml-[490px] gap-4 '>
              <BsFillGrid3X3GapFill className='text-primary h-6 w-6'/>
              <FaThList className='text-teritory h-6 w-6'/>
            </div>
        </div>

<div className="grid grid-cols-5 gap-4">
        {LatestData.map((item, index) => (
          <Link key={index} to={`/alllatestdetails/${item.id}`}>
            <div>
            <div class="relative group">
           <img src={item.img}alt= ""class=" w-[165px] h-60 border-zinc  rounded-lg border  border-2  transform transition-transform hover:scale-110"/>
       
       <p class="border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold  text-[10px] p-1">1080p</p>
       <p className="absolute bg-lightblack rounded-lg h-[300px] text-white w-60  p-2 top-2 left-20 hidden group-hover:block z-10">{item.description}</p>
       </div>
       <div class="font-bold text-white hover:text-primary mt-4">{item.name}</div>
     <div class=" font-bold text-white hover:text-teritory mt-4 mb-4">{item.year}</div> 

            </div>
          </Link>
        ))}
      </div>
</div>
<div className=' ml-8 mr-4'>
  <TopUSerRank/>
  <BestUser/>
  </div>
</div>
  )
}

export default LatestTv
