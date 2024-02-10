import React from 'react'
import Movie from './movie'
import Latest from './LatestTvShow';
import Popular from './Popular';
// import Navbar from"../../component/Layout/navbar";
import Homepage from '../Home/home';
// import Search from'../Search/search';
// import Filters from '../Filter/Filter';
// Filters
const Alldata = () => {
  return (
    <div>
      <Homepage/>
      {/* <Navbar/> */}
      <Movie/>
      <Latest/>
      <Popular/>
      {/* <Search/> */}
      {/* <Filters/> */}
    </div>
  )
}

export default Alldata;
