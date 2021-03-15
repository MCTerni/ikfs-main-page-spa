import React from 'react'
import AboutUsAboutUs from '../components/AboutUs/AboutUsAboutUs'
import AboutUsBanner from '../components/AboutUs/AboutUsBanner'
import AboutUsChoseUs from '../components/AboutUs/AboutUsChoseUs'
import AboutUsTeam from '../components/AboutUs/AboutUsTeam'
import AboutUsTestimonial from '../components/AboutUs/AboutUsTestimonial'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'
import TopMenu from '../components/TopMenu'

function AboutUs() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Nossa Escola' subTitle='Conheça nossa escola'/>
            <AboutUsChoseUs/>
            <AboutUsAboutUs/>
            <AboutUsTeam/>
            <AboutUsBanner/>
            <AboutUsTestimonial/>
            <Footer/>
            
        </div>
    )
}

export default AboutUs;