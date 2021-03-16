import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu";
import TeamGalery from "../components/Team/TeamGalery"

function Team() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Nosso Time' subTitle='Nosso Time'/>
            <TeamGalery/>
            <Footer/>
        </div>
    );
}

export default Team;