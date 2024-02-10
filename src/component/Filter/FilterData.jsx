// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
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
//   // const [selectedGenre, setSelectedGenre] = useState(genresData[0]);
//   const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
//   const [selectedYear, setSelectedYear] = useState(yearsData[0]);

//   // const handleGenreSelect = (genre) => {
//   //   setSelectedGenre(genre);
//   // };

//   const handleSortSelect = (sort) => {
//     setSelectedSort(sort);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   return (
//     <div className="flex  ml-4 mt-4 mb-4 gap-4">
//       <div className="flex gap-2">
//         <FaFolderOpen className="mt-1 text-teritory"/> 
//         <FilterDropdown title="Genres" options={genresData}  />
//       </div>
     
//       <div className="flex gap-2">
//         <SlCalender className="mt-1 text-teritory"/>
//         <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       </div>
      
//       <div className="flex gap-2">
//         <FaSortAmountDown className="mt-1 text-teritory"/>
//         <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
//       </div>
//     </div>
//   );
// };

// export default Filters;


// import React, { useState } from 'react';

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
//     id: 2,
//     img: "Images.Image_11",
//     name: "Percy Jackson",
//     year: 2024,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 3,
//     img: "Images.Image_12",
//     name: "Night Court",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 4,
//     img: "Images.Image_13",
//     name: "Raising Kanan",
//     year: 2025,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//     id: 5,
//     img: "Images.Image_14",
//     name: "Monarch Legacy of Monsters",
//     year: 2025,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 6,
//     img: "Images.Image_15",
//     name: "Reacher",
//     year: 2023,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 7,
//     img: "Images.Image_16",
//     name: "Slow Horses",
//     year: 2024,
//     genres: "Drama",
//     sort: "popular",
//   },
//   {
//     id: 8,
//     img: "Images.Image_17",
//     name: "What If..?",
//     year: 2025,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 9,
//     img: "Images.Image_18",
//     name: "Vigil",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 10,
//     img: "Images.Image_31",
//     name: "Such Brave Girls",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 11,
//     img: "Images.Image_32",
//     name: "Acting Good",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
//   },
//   {
//     id: 12,
//     img: "Images.Image_33",
//     name: "Ncis Sydney",
//     year: 2023,
//     genres: "Adventure",
//     sort: "popular",
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
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 bg-white rounded shadow-md">
//           {options.map((option) => (
//             <div
//               key={option}
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
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [selectedSort, setSelectedSort] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');

//   const handleGenreSelect = (genre) => {
//     setSelectedGenre(genre);
//   };

//   const handleSortSelect = (sort) => {
//     setSelectedSort(sort);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   // Extracting unique genres, years, and sort options from LatestData
//   const genres = [...new Set(LatestData.map(item => item.genres))];
//   const years = [...new Set(LatestData.map(item => item.year))];
//   const sortOptions = [...new Set(LatestData.map(item => item.sort))];

//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4">
//       <FilterDropdown title="Genres" options={genres} onSelect={handleGenreSelect} />
//       <FilterDropdown title="Years" options={years} onSelect={handleYearSelect} />
//       <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
//     </div>
//   );
// };

// export default Filters;
// import React, { useState } from 'react';

// const LatestData = [
//   {
//     id: 1,
//     name: "Fargo",
//     year: 2023,
//     genres: "Action",
//     sort: "Latest",
//   },
//   {
//         id: 2,
//         img: "Images.Image_11",
//         name: "Percy Jackson",
//         year: 2024,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 3,
//         img: "Images.Image_12",
//         name: "Night Court",
//         year: 2023,
//         genres: "Action",
//         sort: "Latest",
//       },
//       {
//         id: 4,
//         img: "Images.Image_13",
//         name: "Raising Kanan",
//         year: 2025,
//         genres: "Drama",
//         sort: "Latest",
//       },
//       {
//         id: 5,
//         img: "Images.Image_14",
//         name: "Monarch Legacy of Monsters",
//         year: 2025,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 6,
//         img: "Images.Image_15",
//         name: "Reacher",
//         year: 2023,
//         genres: "Drama",
//         sort: "popular",
//       },
//       {
//         id: 7,
//         img: "Images.Image_16",
//         name: "Slow Horses",
//         year: 2024,
//         genres: "Drama",
//         sort: "popular",
//       },
//     ]
// const FilterDropdown = ({ title, options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onSelect(option);
//   };

//   return (
//     <div className="relative inline-block">
//       <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-gray-200 rounded-md">
//         {title}
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 mt-1 bg-white rounded shadow-md">
//           {options.map((option, index) => (
//             <div key={index} onClick={() => handleOptionClick(option)} className="py-2 px-4 cursor-pointer">
//               {option}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Filters = () => {
//   const [selectedGenre, setSelectedGenre] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');

//   const handleGenreSelect = (genres) => {
//     setSelectedGenre(genres);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//   };

//   // Extracting unique genres and years from LatestData
//   const genres = [...new Set(LatestData.map(item => item.genres))];
//   const years = [...new Set(LatestData.map(item => item.year))];

//   // Filter movies based on selected genre and year
//   const filteredMovies = LatestData.filter(movie => {
//     return (!selectedGenre || movie.genres === selectedGenre) &&
//            (!selectedYear || movie.year === selectedYear);
//   });

//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4">
//       <FilterDropdown title="Genres" options={genres} onSelect={handleGenreSelect} />
//       <FilterDropdown title="Years" options={years} onSelect={handleYearSelect} />
      
//       <div className="flex flex-col">
//         <h2>Filtered Movies</h2>
//         <ul>
//           {filteredMovies.map(movie => (
//             <li key={movie.id}>{movie.name}</li>
            
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Filters;


// import React, { useState } from 'react';
// import { FaFolderOpen, FaSortAmountDown, FaChevronDown } from "react-icons/fa";
// import { SlCalender } from "react-icons/sl";

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
//   // Add other data entries...
// ];

// // Your FilterDropdown component
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

//   return (
//     <div className="flex ml-4 mt-4 mb-4 gap-4">
//       <FilterDropdown title="Genres" options={genresData} onSelect={handleGenreSelect} />
//       <FilterDropdown title="Years" options={yearsData} onSelect={handleYearSelect} />
//       <FilterDropdown title="Sort" options={sortOptions} onSelect={handleSortSelect} />
//     </div>
//   );
// };

// export default Filters;
