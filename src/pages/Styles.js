import React from 'react';
import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer"
import TopMenu from "../components/TopMenu"
import StylesServices from "../components/Styles/StylesServices"
import StylesBanner from "../components/Styles/StylesBanner"
import StylesPricing from "../components/Styles/StylesPricing"

function Styles() {

    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Estilos e Terapias' subTitle='Estilos Externos e Internos'/>
            <StylesServices/>
            <StylesBanner/>
            <StylesPricing/>
            <Footer/>
        </div>
    );
}

export default Styles;