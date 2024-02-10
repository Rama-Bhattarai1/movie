
// import React,{useState} from 'react';
// import * as Images from '../../assest/images';
// import * as Icon from '../../assest/icon';
// import { GoDotFill } from 'react-icons/go';
// import { FaRegHeart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// // import Filterdata from '../AllMovie/Filterdata';

// const MovieData = [
//   {
//     id: 1,
//     img: Images.Image_2,
//     name: 'Next Goal Wins',
//     year: 2023,
//     description: (
//       <>
     
//         <h1 class="3xl">Next Goal Wins</h1>
//         <div class="flex gap-2">
//           <div class="flex gap-2">
//         <span><Icon.StarIcon className='w-4 '/></span>
//         <span>6.374</span>
//         </div>
//         <span>2023</span>
//         <span>2h38m</span>
//         <span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//         </div>
//         <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//         <div className='grid grid-cols-1 mb-2'>
        
//         <span>Generes Action,</span>
//         <span>Director Action,</span>
//         <span>cast Action,</span>
//         </div>
//         <div class="flex gap-2 ">
//         <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
// <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
// <button>Watch Movie</button>
// </div> 
// <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
// </div>

//       </>
//     ),
//   },
//   {
//     id: 2,
//     img: Images.Image_3,
//     name: 'The Boys In the Boot',
//     year: 2023,
//     description: (
//       <>
     
//         <h1 class="3xl">The Boys In the Boot</h1>
//         <div class="flex gap-2">
//           <div class="flex gap-2">
//         <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//         </div>
//         <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//         </div>
//         <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//         <div className='grid grid-cols-1 mb-2'>
//         <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//         </div>
//         <div class="flex gap-2 ">
//         <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
// <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
// <button>Watch Movie</button>
// </div> 
// <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
// </div>

//       </>
//     ),
//   },
//   {
//     id: 3,
//     img: Images.Image_4,
//     name: 'justic League Crisis on Infinite Earths part...',
//     year: 2023,
//     description: (
//       <>
//         <h1 class="3xl">justic League Crisis on Infinite Earths part...</h1>
//         <div class="flex gap-2">
//           <div class="flex gap-2">
//         <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//         </div>
//         <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//         </div>
//         <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//         <div className='grid grid-cols-1 mb-2'>
        
//         <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//         </div>
//         <div class="flex gap-2 ">
//         <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
// <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
// <button>Watch Movie</button>
// </div> 
// <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
// </div>

//       </>
//     ),
//   },
//   {
//     id:4,
//     img:Images.Image_5,
//     name:"The Color Purple",
//     year:2023,
//     description: (
//       <>
//         <h1 class="3xl">The Color Purple</h1>
//         <div class="flex gap-2">
//           <div class="flex gap-2">
//         <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//         </div>
//         <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//         </div>
//         <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//         <div className='grid grid-cols-1 mb-2'>
        
//         <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//         </div>
//         <div class="flex gap-2 ">
//         <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
// <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
// <button>Watch Movie</button>
// </div> 
// <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
// </div>

//       </>
//     ),
//     },
//     {
//     id:5,
//     img:Images.Image_6,
//     name:"Lift",
//     year:2023,
//     description: (
//       <>
//         <h1 class="3xl">Lift</h1>
//         <div class="flex gap-2">
//           <div class="flex gap-2">
//         <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//         </div>
//         <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//         </div>
//         <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//         <div className='grid grid-cols-1 mb-2'>
        
//         <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//         </div>
//         <div class="flex gap-2 ">
//         <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
// <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
// <button>Watch Movie</button>
// </div> 
// <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
// </div>

//       </>
//     ),
//     },
//     {
//         id:6,
//         img:Images.Image_7,
//         name:"Tiger3",
//         year:2023,
//         description: (
//           <>
//             <h1 class="3xl">Tiger3</h1>
//             <div class="flex gap-2">
//               <div class="flex gap-2">
//             <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//             </div>
//             <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//             </div>
//             <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//             <div className='grid grid-cols-1 mb-2'>
            
//             <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//             </div>
//             <div class="flex gap-2 ">
//             <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
//     <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
//     <button>Watch Movie</button>
//     </div> 
//     <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
//     </div>
    
//           </>
//         ),
//         },
//         {
//             id:7,
//             img:Images.Image_8,
//             name:"Napoleon",
//             year:2023,
//             description: (
//               <>
//                 <h1 class="3xl">Napoleon</h1>
//                 <div class="flex gap-2">
//                   <div class="flex gap-2">
//                 <span><Icon.StarIcon className='w-4 '/></span><span>6.374</span>
//                 </div>
//                 <span>2023</span><span>2h38m</span><span class=" text-primary border border-2 rounded-lg p-1">1080p</span>
//                 </div>
//                 <p class="text-start mb-2">Lorem ipsum dolor sitr.<br/> Animi harum vitae facilis?<br/> Ex est cupiditate iusto ab .</p>
//                 <div className='grid grid-cols-1 mb-2'>
                
//                 <span>Generes Action,</span><span>Director Action,</span><span>cast Action,</span>
//                 </div>
//                 <div class="flex gap-2 ">
//                 <div class="flex border border-2  rounded-lg p-2 h-10 w-40 pl-4 bg-ston gap-1 text-white font-bold">
//         <Icon.PlayIcon className="bg-primary rounded-full p-1"/>
//         <button>Watch Movie</button>
//         </div> 
//         <FaRegHeart className="bg-red  border border-2 border-white rounded-lg  h-10 w-14 p-2 "/>
//         </div>
        
//               </>
//             ),
//             },
// ];


// const Movie = () => {
//     const [visibleIndex, setVisibleIndex] = useState(0);
  
//     const handleLeftArrowClick = () => {
//       setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };
  
//     const handleRightArrowClick = () => {
//       setVisibleIndex((prevIndex) =>
//         Math.min(prevIndex + 1, MovieData.length - 7)
//       );
//     };
  
//     const totalPages = Math.ceil(MovieData.length / 7);
//     const dots = Array.from({ length: totalPages }).map((_, index) => (
//       <GoDotFill
//         key={index}
//         className={`mt-2 hover:text-primary ${index === visibleIndex / 7? 'text-primary' : ''}`}
//       />
//     ));
//   return (
//     <div className="bg-black pl-4 pr-4">
//      <div className='flex '>
//          <div className='flex gap-4 pt-14 pb-10'>
//         <div className='flex '>
//        <h1 className='text-xl font-bold text-white'>Movies</h1>
//             <Icon.DoubleRight className="w-4  mt-1 text-white"/>
//          </div>
//          <Link to="/allmovie"><button className='border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg text-[10px] '>All Movies</button></Link>
        
//              <ul class="text-white flex gap-4">
//                  <li className='text-primary '>Featured</li>
//                  <li className='text-teritory'>Latest Releases</li>
//                  <li className=' text-teritory'>Most Popular</li>
//                  <li className=" text-teritory">Latest Added</li>
//              </ul>
        
//          </div>
//          <div className='flex text-white h-10 w-15 mt-14 ml-[500px] gap-2'>
//           <Icon.AeroLeft onClick={handleLeftArrowClick} />
//           {dots}
//           <Icon.AeroRight onClick={handleRightArrowClick} />
//         </div> 
//      </div>
     
//       <div className="grid grid-cols-7 gap-4">
//       {MovieData.slice(visibleIndex, visibleIndex + 7).map((item, index) => (
//         <Link key={index} to={`/allmoviedetails/${item.id}`}>
//           <div className="relative group">
            
//             <img
//               src={item.img}
//               alt=""
//               className=" w-60 h-60 rounded-lg border border-black-2 transition transform hover:scale-95 group-hover:opacity-90"
//             />
//              <p className="  border border-2-black w-14 rounded-lg text-center text-primary bg-black absolute top-2 ml-24 font-bold text-[10px] p-1"> 1080p</p>
//             <p className="absolute bg-lightblack rounded-lg h-[300px] w-60  p-2 top-2 left-20 hidden group-hover:block z-10">{item.description}</p>
//             <div className="font-bold text-white hover:text-primary mt-4">{item.name}</div>
//             <div className="font-bold text-white hover:text-teritory mt-4">{item.year}</div>
            
//           </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Movie;





import React,{useState} from 'react';
import * as Icon from '../../assest/icon';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { MovieData } from '../Data/Data';

const Movie = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('featured');

  const handleLeftArrowClick = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightArrowClick = () => {
    setVisibleIndex((prevIndex) =>
      Math.min(prevIndex + 1, Math.ceil(MovieData.length / 7) - 1)
    );
  };

  const handleCategoryChange = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    setSelectedCategory(lowerCaseCategory);
    setVisibleIndex(0);
  };
  

  const filteredMovies = MovieData.filter(
    (movie) => movie.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredMovies.length / 7);
  const dots = Array.from({ length: totalPages }).map((_, index) => (
    <GoDotFill
      key={index}
      className={`mt-2 hover:text-primary ${
        index === Math.floor(visibleIndex / 7) ? 'text-primary' : ''
      }`}
    />
  ));

  return (
    <div className="bg-black pl-4 pr-4">
      <div className="flex ">
        <div className="flex gap-4 pt-14 pb-10">
          <div className="flex ">
            <h1 className="text-xl font-bold text-white">Movies</h1>
            <Icon.DoubleRight className="w-4  mt-1 text-white" />
          </div>
          <Link to="/allmovie">
            <button className="border border-teritory text-teritory hover:bg-white hover:text-black p-1 rounded-lg text-[10px] ">
              All Movies
            </button>
          </Link>

          <ul className="text-white flex gap-4">
          <li
  onClick={() => handleCategoryChange('featured')}
  className={` ${
    selectedCategory === 'featured' ? 'font-bold text-primary' : ''
  }`}
>
  Featured
</li>
<li
  onClick={() => handleCategoryChange('latest releases')}
  className={`${
    selectedCategory === 'latest releases' ? 'font-bold text-primary' : ''
  }`}
>
  Latest Releases
</li>
<li
  onClick={() => handleCategoryChange('mostpopular')}
  className={` ${
    selectedCategory === 'mostpopular' ? 'font-bold text-primary' : ''
  }`}
>
  Most Popular
</li>
          </ul>
        </div>
        <div className="flex text-white h-10 w-15 mt-14 ml-[500px] gap-2">
          <Icon.AeroLeft onClick={handleLeftArrowClick} />
          {dots}
          <Icon.AeroRight onClick={handleRightArrowClick} />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {filteredMovies.slice(visibleIndex, visibleIndex + 7).map((item, index) => (
          <Link key={index} to={`/allmoviedetails/${item.id}`}>
            <div className="relative group ">
              <img
                src={item.img}
                alt=""
                className=" w-60 h-60 rounded-lg border border-2 border-zinc transition transform hover:scale-95 group-hover:opacity-90"
              />
              <p className="  border border-2-black w-10 rounded-lg text-center text-primary border-zinc  bg-ston absolute top-2 ml-24 font-bold text-[12px] h-[22px]">
                1080p
              </p>
              <p className=" absolute bg-primary/50 text-white  rounded-lg h-[300px] w-60  p-2 top-2 left-20 hidden group-hover:block z-10">
                {item.description}
              </p>
              <div className="font-bold text-white hover:text-primary mt-4">
                {item.name}
              </div>
              <div className="font-bold text-white hover:text-teritory mt-4">
                {item.year}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movie;