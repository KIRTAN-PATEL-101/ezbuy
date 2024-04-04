import React from 'react';
import Maincarousel from '../../components/HomeCarousel/Maincarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { kurtaPage1 } from '../../../data/mens_kurta';

const HomePage = () => {
   return (
      <div>
         <div>
            <Maincarousel />
         </div>
         <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-5'>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"mens kurta"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"womens saare"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"womens saare"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"womens saare"}/>
            
         </div>
         <div>
            other content
         </div>
      </div>
   )
}

export default HomePage;