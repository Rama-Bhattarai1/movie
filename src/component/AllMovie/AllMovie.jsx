
// import React, { useState } from 'react';
// import * as Images from '../../assest/images';
// import * as Icon from '../../assest/icon';
// import { FaSortAmountDown } from 'react-icons/fa';
// import { SlCalender } from 'react-icons/sl';
// import { FaFolderOpen } from 'react-icons/fa';
// import TopUSerRank from '../UserRanking/TopUSerRank';
// import BestUser from '../UserRanking/BestUser';
// import { Link } from 'react-router-dom';

//  export const AllMovieData = [
//   {
//         id:1,
//         img:Images.Image_2,
//         name:"Next Goal Wins",
//         year:2023,
//         description:"rammafghf",
      
//         },
//         {
//         id:2,
//         img:Images.Image_3,
//         name:"The Boys In the Boot",
//         year:2023,
//        description:"rammafgfg",
//         },
//             {
//         id:3,
//         img:Images.Image_4,
//         name:"justic League Crisis on Infinite Earths part...",
//         year:2023
//         },
//         {
//         id:4,
//         img:Images.Image_5,
//         name:"The Color Purple",
//         year:2023
//         },
//         {
//         id:5,
//         img:Images.Image_6,
//         name:"Lift",
//         year:2023
//         },
//         {
//             id:6,
//             img:Images.Image_7,
//             name:"Tiger3",
//             year:2023
//             },
//             {
//         id:7,
//         img:Images.Image_8,
//         name:"Napoleon",
//          year:2023
//          },
//          {
//          id:8,
//         img:Images.Image_2,
//         name:"Next Goal Wins",
//         year:2023,
//         description:"rammafghf",
      
//         },
//         {
//               id:9,
//               img:Images.Image_3,
//               name:"The Boys In the Boot",
//               year:2023,
//              description:"rammafgfg",
//               },
//                   {
//               id:10,
//               img:Images.Image_4,
//               name:"justic League Crisis on Infinite Earths part...",
//               year:2023
//               },
//               {
//               id:11,
//               img:Images.Image_5,
//               name:"The Color Purple",
//               year:2023
//               },
//               {
//               id:12,
//               img:Images.Image_6,
//               name:"Lift",
//               year:2023
//               },
//               {
//                   id:13,
//                   img:Images.Image_7,
//                   name:"Tiger3",
//                   year:2023
//                   },
//                   {
//                       id:14,
//                       img:Images.Image_8,
//                       name:"Napoleon",
//                       year:2023
//                       },
// ];


// const itemsPerPage = 8;

// const AllMovie = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePrevClick = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(AllMovieData.length / itemsPerPage)));
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const visibleMovies = AllMovieData.slice(startIndex, startIndex + itemsPerPage);

//   const totalPages = Math.ceil(AllMovieData.length / itemsPerPage);
//   const numbers = Array.from({ length: totalPages }).map((_, index) => (
//     <div
//       key={index}
//       onClick={() => setCurrentPage(index + 1)}
//       className={` hover:bg-primary cursor-pointer hover:border w-8 h-8 text-white pl-2   ${index === currentPage - 1 ? 'text-primary' : ''}`}
//     >
//       {index + 1}
//     </div>
//   ));

//   return (
//     <div className=''>
//       <div className='bg-black flex '>
//         <div className='ml-4  '>
//           <div className='flex '>
//             <h1 className='text-xl font-bold text-white mt-4'>All Movies</h1>
//             <Icon.DoubleRight className='w-4  mt-6 text-white' />
//           </div>

//           <div className='flex gap-4 ml-4 mt-4 mb-4'>
//             <div className='flex text-white gap-1'>
//               <FaFolderOpen className='mt-1 text-teritory' />Geners
//               <Icon.DownAero className='w-4 text-primary mt-2  ' />
//             </div>
//             <div className='flex text-white gap-1'>
//               <SlCalender className='mt-1 text-teritory' />Years
//               <Icon.DownAero className='w-4 text-primary mt-2  ' />
//             </div>
//             <div className='flex text-white gap-1'>
//               <FaSortAmountDown className='mt-1 text-teritory' />Sort
//               <Icon.DownAero className='w-4 text-primary mt-2  ' />
//             </div>
//           </div>
//           <div className='grid grid-cols-4'>
//             {visibleMovies.map((item, index) => (
//               <Link key={index} to={`/allmoviedetails/${item.id}`}>
//                 <div>
//                   <div class='relative'>
//                     <img
//                       src={item.img}
//                       alt=''
//                       class=' w-[165px] h-80 rounded-lg border border-black-2  transform transition-transform hover:scale-110'
//                     />

//                     <p class='border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold  text-[10px] p-1'>
//                       1080p
//                     </p>
//                   </div>
//                   <div class='font-bold text-white hover:text-primary mt-4'>{item.name}</div>
//                   <div class=' font-bold text-white hover:text-teritory mt-4 mb-4'>{item.year}</div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className=' ml-4 mr-4'>
//           <TopUSerRank />
//           <BestUser />
//         </div>
//       </div>
//       <div className='bg-black flex justify-center text-white gap-4 pb-4 '>
//         <div onClick={handlePrevClick}>Prev</div>
//         {numbers}
//         <div onClick={handleNextClick}>Next</div>
//       </div>
//     </div>
//   );
// };

// export default AllMovie;







import React, { useState } from 'react';
import * as Images from '../../assest/images';
import * as Icon from '../../assest/icon';
import { FaSortAmountDown } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FaFolderOpen } from 'react-icons/fa';
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import TopUSerRank from '../UserRanking/TopUSerRank';
import BestUser from '../UserRanking/BestUser';
import { Link } from 'react-router-dom';
import { MovieData } from '../Data/Data';


const itemsPerPage = 8;

const AllMovie = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(MovieData.length / itemsPerPage)));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleMovies = MovieData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(MovieData.length / itemsPerPage);
  const numbers = Array.from({ length: totalPages }).map((_, index) => (
    <div
      key={index}
      onClick={() => setCurrentPage(index + 1)}
      className={` hover:bg-primary cursor-pointer hover:border w-8 h-8 text-white pl-2   ${index === currentPage - 1 ? 'text-primary' : ''}`}
    >
      {index + 1}
    </div>
  ));

  return (
    <div className='mt-14'>
      <div className='bg-black flex '>
        <div className='ml-4  '>
          <div className='flex '>
            <h1 className='text-xl font-bold text-white mt-4'>All Movies</h1>
            <Icon.DoubleRight className='w-4  mt-6 text-white' />
          </div>

          <div className='flex gap-4  mt-4 mb-4 border-b border-gray-800 pt-6 pb-6'>
            <div className='flex text-white gap-1'>
              <FaFolderOpen className='mt-1 text-teritory' />Geners
              <Icon.DownAero className='w-4 h-4 text-primary mt-2  ' />
            </div>
            <div className='flex text-white gap-1'>
              <SlCalender className='mt-1 text-teritory' />Years
              <Icon.DownAero className='w-4 text-primary mt-2  ' />
            </div>
            <div className='flex text-white gap-1'>
              <FaSortAmountDown className='mt-1 text-teritory' />Sort
              <Icon.DownAero className='w-4 text-primary mt-2  ' />
            </div>
            <div className='flex ml-[520px] gap-2 '>
              <BsFillGrid3X3GapFill className='text-primary h-6 w-6'/>
              <FaThList className='text-teritory h-6 w-6'/>
            </div>
          </div>
          <div className='grid grid-cols-5'>
            {visibleMovies.map((item, index) => (
              <Link key={index} to={`/allmoviedetails/${item.id}`}>
                <div>
                  <div class='relative group'>
                    <img
                      src={item.img}
                      alt=''
                      class=' w-[165px] h-60 rounded-lg border-zinc border border-2  transform transition-transform hover:scale-110'
                    />

                    <p class='border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold  text-[10px] p-1'>
                      1080p
                    </p>
                    <p className="absolute bg-lightblack rounded-lg h-[300px] w-60  p-2 top-2 left-20 hidden group-hover:block z-10">
                {item.description}
              </p>
                  </div>
                  <div class='font-bold text-white hover:text-primary mt-4'>{item.name}</div>
                  <div class=' font-bold text-white hover:text-teritory mt-4 mb-4'>{item.year}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className=' ml-4 mr-4'>
          <TopUSerRank />
          <BestUser />
        </div>
      </div>
      <div className='bg-black flex justify-center text-white gap-4 pb-4 '>
        <div onClick={handlePrevClick}>Prev</div>
        {numbers}
        <div onClick={handleNextClick}>Next</div>
      </div>
    </div>
  );
};

export default AllMovie;


