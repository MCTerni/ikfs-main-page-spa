import React from 'react';
import Breadcrumb from "../components/Breadcrumb"
import ClassesDetails from "../components/Classes/ClassesDetails"
import ClassesTimetable from "../components/Classes/ClassesTimetable"
import Footer from "../components/Footer"
import TopMenu from "../components/TopMenu"

function Classes(){
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
            <div className="loader" />
            </div>
            <TopMenu/>            
            <Breadcrumb title ='Cuidados essenciais' subTitle='Prevenção Covid-19'/>
            <ClassesTimetable/>
            <ClassesDetails/>
            <Footer/>
        </div>
    )
}

export default Classes;