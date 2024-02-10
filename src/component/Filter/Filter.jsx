// 

// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import * as Images from "../../assest/images";
// // import * as Icon from "../../assest/icon";
// // import { LatestData } from '../AllMovie/LatestTv';
// const LatestData = [
//   {
//   id:1,
//   img:Images.Image_10,
//   name:"Fargo",
//   year:2023,
//   geners:"Action",
//   sort:"Latest",
//   },
//   {
//   id:2,
//   img:Images.Image_11,
//   name:"Percy Jakson",
//   year:2024,
//   geners:"Action",
//   sort:"Latest",
//   },
//       {
//   id:3,
//   img:Images.Image_12,
//   name:"Night Court",
//   year:2023,
//   geners:"Action",
//   sort:"Latest",
//   },
//   {
//   id:4,
//   img:Images.Image_13,
//   name:"Raising Kanan",
//   year:2025,
//   geners:"Action",
//   sort:"Latest",
//   },
//   {
//   id:5,
//   img:Images.Image_14,
//   name:"Monarch Legacy of Monsters",
//   year:2025,
//   geners:"Drama",
//   sort:"popular",
//   },
//   {
//   id:6,
//   img:Images.Image_15,
//   name:"Reacher",
//   year:2023,
//   geners:"Drama",
//   sort:"popular",
//    },
//    {
//    id:7,
//    img:Images.Image_16,
//    name:"Slow Horses",
//    year:2024,
//    geners:"Drama",
//    sort:"popular",
//    },
//   {
//   id:8,
//   img:Images.Image_17,
//    name:"What If..?",
//   year:2025,
//   geners:"Advanture",
//   sort:"popular",
//   },
//   {
//   id:9,
//   img:Images.Image_18,
//   name:"Vigil",
//   year:2023,
//   geners:"Advanture",
//   sort:"popular",
//   },
//   {
//   id:10,
//   img:Images.Image_31,
//   name:"Such Brave Girls",
//   year:2023,
//   geners:"Advanture",
//   sort:"popular",
//   },
//       {
//   id:11,
//   img:Images.Image_32,
//   name:"Acting Good",
//   year:2023,
//   geners:"Advanture",
//   sort:"popular",
//   },
//   {
//   id:12,
//   img:Images.Image_33,
//   name:"Ncis Sydney",
//   year:2023,
//   geners:"Advanture",
//   sort:"popular",
//   },
        
// ];

// const FilterDropdown = ({ title, options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     if (onSelect) {
//       onSelect(option);
//     }
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-1 text-white hover:text-primary"
//       >
//         {title}
//         <FaChevronDown className='text-primary' />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 bg-white rounded shadow-md">
//           {LatestData.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className={`py-2 px-4 cursor-pointer ${
//                 selectedOption.title === option.title ? '' : ''
//               }`}
//             >
//               {option.title}
//               {}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Filters = () => {
//   const [selectedGenre, setSelectedGenre] = useState(genresData[0]);
//   const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
//   const [selectedYear, setSelectedYear] = useState(yearsData[0]);

//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre);
//   };

//   const handleSortSelect = (sort) => {
//     setSelectedSort(sort);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   return (
//     <div className="flex  ml-4 mt-4 mb-4 gap-4">
//         <div  className="flex gap-2 ">
//        < FaFolderOpen className="mt-1 text-teritory"/> 
//       <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
//       </div>
     
//       <div  className="flex  gap-2">
//       <SlCalender className="mt-1 text-teritory"/>
//       <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       </div>
//    <div  className="flex  gap-2">
//        <FaSortAmountDown className="mt-1 text-teritory"/>
//       <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
//       </div>
//     </div>
//   );
// };

// export default Filters;




// // const FilterDropdown = ({ title, options, onSelect }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [selectedOption, setSelectedOption] = useState(options[0]);

// //   const handleOptionClick = (option) => {
// //     setSelectedOption(option);
// //     if (onSelect) {
// //       onSelect(option);
// //     }
// //     setIsOpen(false);
// //   };

// //   return (
// //     <div className="relative inline-block">
// //       <button
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="flex items-center gap-1 text-white hover:text-primary"
// //       >
// //         {title}
// //         <FaChevronDown className='text-primary' />
// //       </button>
// //       {isOpen && (
// //         <div className="absolute z-10 mt-1 bg-white rounded shadow-md">
// //           {options.map((option, index) => (
// //             <div
// //               key={index}
// //               onClick={() => handleOptionClick(option)}
// //               className={`py-2 px-4 cursor-pointer ${
// //                 selectedOption.name === option.name ? 'bg-primary text-white' : ''
// //               }`}
// //             >
// //               {option.name}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const Filters = () => {
// //   const [selectedGenre, setSelectedGenre] = useState(genresData[0]);
// //   const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
// //   const [selectedYear, setSelectedYear] = useState(yearsData[0]);

// //   const handleGenreSelect = (genre) => {
// //     setSelectedGenre(genre);
// //   };

// //   const handleSortSelect = (sort) => {
// //     setSelectedSort(sort);
// //   };

// //   const handleYearSelect = (year) => {
// //     setSelectedYear(year);
// //   };

// //   return (
// //     <div className="flex ml-4 mt-4 mb-4 gap-4">
// //       <div className="flex gap-2 ">
// //         <FaFolderOpen className="mt-1 text-teritory" />
// //         <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
// //       </div>

// //       <div className="flex gap-2">
// //         <SlCalendar className="mt-1 text-teritory" />
// //         <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
// //       </div>

// //       <div className="flex gap-2">
// //         <FaSortAmountDown className="mt-1 text-teritory" />
// //         <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Filters;




// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import * as Images from "../../assest/images";

// const LatestData = [
//   {
//     id: 1,
//     img: Images.Image_10,
//     name: 'Fargo',
//     year: 2023,
//     genres: 'Action',
//     sort: 'Latest',
//   },
//   {
//     id: 2,
//     img: Images.Image_11,
//     name: "Percy Jackson",
//     year: 2024,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 3,
//     img: Images.Image_12,
//     name: "Night Court",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 4,
//     img: Images.Image_13,
//     name: "Raising Kanan",
//     year: 2025,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 5,
//     img: Images.Image_14,
//     name: "Monarch Legacy of Monsters",
//     year: 2025,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 6,
//     img: Images.Image_15,
//     name: "Reacher",
//     year: 2023,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 7,
//     img: Images.Image_16,
//     name: "Slow Horses",
//     year: 2024,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 8,
//     img: Images.Image_17,
//     name: "What If..?",
//     year: 2025,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 9,
//     img: Images.Image_18,
//     name: "Vigil",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 10,
//     img: Images.Image_31,
//     name: "Such Brave Girls",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 11,
//     img: Images.Image_32,
//     name: "Acting Good",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 12,
//     img: Images.Image_33,
//     name: "Ncis Sydney",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
// ];

// const FilterDropdown = ({ title, options = [], onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(options[0] || {});

//   const handleOptionChange = (event) => {
//     const selectedGenre = event.target.value;
//     setSelectedOption(selectedGenre);
//     if (onSelect) {
//       onSelect(selectedGenre);
//     }
//   };
  


//   return (
//     <div className="relative inline-block">
//       <label className="text-white">{title}</label>
//       <select
//         value={selectedOption}
//         onChange={handleOptionChange}
//         className="mt-1 block pl-3 pr-10 py-2 text-white bg-transparent border border-white rounded-md focus:outline-none focus:border-primary"
//       >
//         {options.map((option, index) => (
//           <option key={index} value={option}>{option}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// const Filters = () => {
//   const genresData = [...new Set(LatestData.map(item => item.genres))];
//   const yearsData = [...new Set(LatestData.map(item => item.year))];
//   const sortOptions = [{ id: 'latest', title: 'Latest' }, { id: 'popular', title: 'Popular' }];

//   const [selectedGenre, setSelectedGenre] = useState(genresData[0] || '');
//   const [selectedSort, setSelectedSort] = useState(sortOptions[0] || {});
//   const [selectedYear, setSelectedYear] = useState(yearsData[0] || '');

//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre);
//   };

//   const handleSortSelect = (sort) => {
//     setSelectedSort(sort);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   const filteredData = LatestData.filter(item => item.genres === selectedGenre);
//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4 bg-black h-[600px]">
//       <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
//       <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       <FilterDropdown title="Sort" options={sortOptions.map(option => option.title)} onSelect={handleSortSelect} />
      
//       <div className="text-white">
//         {filteredData.map(item => (
//           <div key={item.id}>
//             <img src={item.img} alt={item.name} />
//             <p>{item.name}</p>
//             <p>{item.year}</p>
//             {/* Add more fields as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Filters;


// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown, FaCheck } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";

// const genresData = [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Drama",
// ];

// const sortOptions = [
//   "Popular",
//   "Latest",
// ];

// const yearsData = [
//   2024,
//   2023,
//   2022,
//   2021,
//   2020,
//   2019,
// ];

// const FilterDropdown = ({ title, options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     if (onSelect) {
//       onSelect(option);
//     }
//   };

//   const handleDropdownClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block">
//       <button
//         onClick={handleDropdownClick}
//         className="flex items-center gap-1 text-white hover:text-primary relative"
//       >
//         {title}
        
//         <FaChevronDown className='text-primary' /> 
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-8 bg-gray-800 rounded shadow-md">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className={`py-2 px-4 cursor-pointer flex  ${
//                 selectedOption === option ? 'bg-gray-600' : ''
//               }`}
//             >
//               {selectedOption === option && <FaCheck className="mr-2 text-primary" />}
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Filters = () => {
//   // const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
//   // const [selectedYear, setSelectedYear] = useState(yearsData[0]);

//   // const handleSortSelect = (sort) => {
//   //   setSelectedSort(sort);
//   // };

//   // const handleYearSelect = (year) => {
//   //   setSelectedYear(year);
//   // };

//   return (
//     <div className="flex  ml-4 mt-4 mb-4 gap-4">
//       <div className="flex gap-2">
//         <FaFolderOpen className=" text-teritory"/> 
//         <FilterDropdown title="Genres"options={genresData} />
//       </div>
     
//       <div className="flex gap-2 ">
//         <SlCalender className=" text-teritory"/>
//         <FilterDropdown title="Years" options={yearsData}  />
//       </div>
      
//       <div className="flex gap-2">
//         <FaSortAmountDown className=" text-teritory"/>
//         <FilterDropdown title="Sort" options={sortOptions}  className ="bg-white"/>
//       </div>
//     </div>
//   );
// };

// export default Filters;




// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";
// import * as Images from "../../assest/images";
// // Your LatestData array
// const LatestData = [
//   {
//     id: 1,
//     img: "Images.Image_10",
//     name: "Fargo",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//         id: 2,
//         img: Images.Image_11,
//         name: "Percy Jackson",
//         year: 2024,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 3,
//         img: Images.Image_12,
//         name: "Night Court",
//         year: 2023,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 4,
//         img: Images.Image_13,
//         name: "Raising Kanan",
//         year: 2025,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 5,
//         img: Images.Image_14,
//         name: "Monarch Legacy of Monsters",
//         year: 2025,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 6,
//         img: Images.Image_15,
//         name: "Reacher",
//         year: 2023,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 7,
//         img: Images.Image_16,
//         name: "Slow Horses",
//         year: 2024,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 8,
//         img: Images.Image_17,
//         name: "What If..?",
//         year: 2025,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 9,
//         img: Images.Image_18,
//         name: "Vigil",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 10,
//         img: Images.Image_31,
//         name: "Such Brave Girls",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 11,
//         img: Images.Image_32,
//         name: "Acting Good",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 12,
//         img: Images.Image_33,
//         name: "Ncis Sydney",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
// ];

// Your FilterDropdown component
// const FilterDropdown = ({ title, options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     if (onSelect) {
//       onSelect(option);
//     }
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-1 text-white hover:text-primary"
//       >
//         {title}
//         <FaChevronDown className='text-primary' />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 bg-gray rounded shadow-md">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className={`py-2 px-4 cursor-pointer ${
//                 selectedOption === option ? 'bg-gray-200' : ''
//               }`}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Filters = () => {
//   // Extracting genres, years, and sort options from LatestData
//   const genresData = [...new Set(LatestData.map((val) => val.genres))];
//   // const yearsData = [...new Set(LatestData.map(item => item.year))];
//   // const sortOptions = [...new Set(LatestData.map(item => item.sort))];

//   const [selectedGenre, setSelectedGenre] = useState(genresData[0]);
//   // const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
//   // const [selectedYear, setSelectedYear] = useState(yearsData[0]);

//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre);
//   };

//   // const handleSortSelect = (sort) => {
//   //   setSelectedSort(sort);
//   // };

//   // const handleYearSelect = (year) => {
//   //   setSelectedYear(year);
//   // };

// //filter
// const [item, setItems] =useState(LatestData)
// const filterItems =(gen) =>{
//   const newItems =LatestData.filter((newval)=> newval.genres === gen)
//   setItems(newItems)
// }
//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4">
//       <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
//       {/* <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} /> */}
//     </div>
//   );
// };

// export default Filters;


// import React, { useState } from 'react';
// import { FaChevronDown } from "react-icons/fa";
// import * as Images from "../../assest/images";

// const LatestData = [
//   {
//     id: 1,
//     img: Images.Image_10,
//     name: "Fargo",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 2,
//     img: Images.Image_11,
//     name: "Percy Jackson",
//     year: 2024,
//     genres: "Action",
//     sort: "Latest",
//   },
//        {
//         id: 3,
//         img: Images.Image_12,
//         name: "Night Court",
//         year: 2023,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 4,
//         img: Images.Image_13,
//         name: "Raising Kanan",
//         year: 2025,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 5,
//         img: Images.Image_14,
//         name: "Monarch Legacy of Monsters",
//         year: 2025,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 6,
//         img: Images.Image_15,
//         name: "Reacher",
//         year: 2023,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 7,
//         img: Images.Image_16,
//         name: "Slow Horses",
//         year: 2024,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 8,
//         img: Images.Image_17,
//         name: "What If..?",
//         year: 2025,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 9,
//         img: Images.Image_18,
//         name: "Vigil",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 10,
//         img: Images.Image_31,
//         name: "Such Brave Girls",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 11,
//         img: Images.Image_32,
//         name: "Acting Good",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
//       {
//         id: 12,
//         img: Images.Image_33,
//         name: "Ncis Sydney",
//         year: 2023,
//         genres: "Adventure",
//         sort: "popular",
//       },
// ];


// const FilterDropdown = ({ title, options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     if (onSelect) {
//       onSelect(option);
//     }
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-1 text-white hover:text-primary"
//       >
//         {title}
//         <FaChevronDown className='text-primary' />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 bg-gray rounded shadow-md">
//           {options.map((option, index) => (
//             <div
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className={`py-2 px-4 cursor-pointer ${
//                 selectedOption === option ? 'bg-gray-200' : ''
//               }`}
//             >
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Filters = () => {
//   const genresData = [...new Set(LatestData.map(item => item.genres))];
//   const yearsData = [...new Set(LatestData.map(item => item.year))];
//   const sortOptions = [...new Set(LatestData.map(item => item.sort))];

//   const [selectedGenre, setSelectedGenre] = useState(genresData[0]);
//   const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
//   const [selectedYear, setSelectedYear] = useState(yearsData[0]);

//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre);
//   };

//   const handleSortSelect = (sort) => {
//     setSelectedSort(sort);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   const filterItems = (item) => {
//     return (
//       item.genres === selectedGenre &&
//       item.year === selectedYear &&
//       item.sort === selectedSort
//     );
//   };

//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4">
//       <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
//       <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
//       {/* Render filtered items here */}
//       {filterItems.map((item) => (
//         <div key={item.id}>
//           <img src={item.img} alt={item.name} />
//           <p>{item.name}</p>
//           <p>{item.year}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Filters;
