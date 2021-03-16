import React from 'react';
import Breadcrumb from "../components/Breadcrumb"
import ContactUsContact from "../components/ContactUs/ContactUsContact";
import Footer from "../components/Footer"
import TopMenu from "../components/TopMenu"

function ContactUs() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Fale com a gente!' subTitle='Entre em contato e saiba mais sobre nossa escola'/>
            
            <ContactUsContact/>
            <Footer/>
        </div>

    )
}

export default ContactUs;