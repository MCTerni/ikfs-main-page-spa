import React from 'react'


import TopMenu from '../components/TopMenu'
import HomeHeader from '../components/Home/HomeHeader'
import HomeHero from '../components/Home/HomeHero'
import HomeChoseUs from '../components/Home/HomeChoseUs'
import HomeClasses from '../components/Home/HomeClasses'
import HomeBanner from '../components/Home/HomeBanner'
import HomePricing from '../components/Home/HomePricing'
import HomeGallery from '../components/Home/HomeGallery'
import HomeTeam from '../components/Home/HomeTeam'
import HomeGetInTouch from '../components/Home/HomeGetInTouch'
import Footer from '../components/Footer'

 

function Home(){
    return (
        <div>
          {/* Page Preloder */}
          <div id="preloder">
            <div className="loader" />
          </div>
          <TopMenu />
          <HomeHeader />
          <HomeHero />
          <HomeChoseUs/>
          <HomeClasses/>
          <HomeBanner/>
          <HomePricing/>
          <HomeGallery/>
          <HomeTeam/>
          <HomeGetInTouch/>
          <Footer/>
          {/* Search model Begin */}
          <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
              <div className="search-close-switch">+</div>
              <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....." />
              </form>
            </div>
          </div>
          {/* Search model end */}
          {/* Js Plugins */}
        </div>
      );
    
}

export default Home;