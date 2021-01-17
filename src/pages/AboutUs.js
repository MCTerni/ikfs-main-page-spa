import React from 'react'
import AboutUsAboutUs from '../components/AboutUs/AboutUsAboutUs'
import AboutUsBanner from '../components/AboutUs/AboutUsBanner'
import AboutUsBreadcrumb from '../components/AboutUs/AboutUsBreadcrumb'
import AboutUsChoseUs from '../components/AboutUs/AboutUsChoseUs'
import AboutUsGetInTouch from '../components/AboutUs/AboutUsGetInTouch'
import AboutUsTeam from '../components/AboutUs/AboutUsTeam'
import AboutUsTestimonial from '../components/AboutUs/AboutUsTestimonial'
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
            <AboutUsBreadcrumb/>
            <AboutUsChoseUs/>
            <AboutUsAboutUs/>
            <AboutUsTeam/>
            <AboutUsBanner/>
            <AboutUsTestimonial/>
            <AboutUsGetInTouch/>
            <Footer/>
            
        </div>
    )
}

export default AboutUs;