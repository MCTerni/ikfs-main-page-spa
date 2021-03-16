import React from 'react'

import TopMenu from '../components/TopMenu'
import HomeHero from '../components/Home/HomeHero'
import HomeChoseUs from '../components/Home/HomeChoseUs'
import HomeClasses from '../components/Home/HomeClasses'
import HomeBanner from '../components/Home/HomeBanner'
import HomePricing from '../components/Home/HomePricing'
import HomeGallery from '../components/Home/HomeGallery'
import HomeTeam from '../components/Home/HomeTeam'
import Footer from '../components/Footer'

 

function Home(){
    return (
        <div>
          {/* Page Preloder */}
          <div id="preloder">
            <div className="loader" />
          </div>
          <TopMenu />
          <HomeHero />
          <HomeChoseUs/>
          <HomeClasses/>
          <HomeBanner/>
          <HomePricing/>
          <HomeGallery/>
          <HomeTeam/>
          <Footer/>
          
        </div>
      );
    
}

export default Home;