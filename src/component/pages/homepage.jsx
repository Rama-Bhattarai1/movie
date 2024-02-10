import React from 'react'
import { Button } from '../shared/Button'
import { Link } from 'react-router-dom'
import Footersecond from '../Layout/footer'
import* as Images from'../../assest/images';
const homepage = () => {
  return (
    <div class="">
       <div className='  '>
        <img src={Images.Image_39} alt="" className='w-[1270px] absolute'/>
      
            <div class="flex gap-4 justify-center relative top-0 relative ">
      <Link to="/"><Button
        title="Home"
        onClick={() => alert("Home")}
        variant="danger"
      /></Link>
      <Link to="/allmovie"><Button
        title="Movies"
        onClick={() => alert("Movies")}
        variant="danger"
      /></Link>
            <Link to="/allpopular"><Button
        title="Popular"
        onClick={() => alert("Popular")}
        variant="danger"
        
      /></Link>
        <Link to="/alllatest"><Button
        title="TV Shows"
        onClick={() => alert("TV Shows")}
        variant="danger"
      /></Link>
      </div>
      </div>
<Footersecond/>
     
    </div>
  )
}

export default homepage
