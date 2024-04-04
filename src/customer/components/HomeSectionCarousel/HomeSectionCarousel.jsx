import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex,setActiveIndex] = useState(0);

    const responsive = {
         0: { items: 1 },
         720: { items: 3 },
         1024: { items: 5.5 },
    };

    const slidePrev=() => setActiveIndex(activeIndex-1);
    const slideNext=() => setActiveIndex(activeIndex+1);

    const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

    const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

    const onSlideChanged = (e) => {
      syncActiveIndexForSwipeGestures(e);
      console.log(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
  };

  const onUpdated = (e) => {
   console.log(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
};

   return (
    <div className=' border'>
      <div className='p-4'><h2 className='text-2xl font-extrabold text-gray-900'>{sectionName}</h2></div>
      <div className='relative p-5 '>
         <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls={false} 
            responsive={responsive}
            disableDotsControls={true}
            activeIndex={activeIndex}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
      />
      {activeIndex !== items.length-5 && <Button variant="contained" className="z-50 bg-white" 
         onClick={slideNext}
      sx={{position:"absolute", top:"8rem",right:"0rem", 
      transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}}
      aria-label="next" >
         <KeyboardArrowLeftIcon sx={{transform: "rotate(90deg)",color:"black"}}/>
      </Button>}

      {activeIndex !== 0 && <Button variant="contained" className="z-50 bg-white"
      onClick={slidePrev} 
      sx={{position:'absolute', top:"8rem",left:"0rem", 
      transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}}
      aria-label="next" >
         <KeyboardArrowLeftIcon sx={{transform: "rotate(-90deg)",color:"black"}}/>
      </Button>}
      </div>
    </div>
   )
}

export default HomeSectionCarousel
