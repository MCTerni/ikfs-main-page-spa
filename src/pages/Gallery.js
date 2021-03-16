import React from 'react';
import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu"
import GalleryGallery from "../components/Gallery/GalleryGallery"

function Gallery() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Gallery' subtitle='Gallery'/>
            <GalleryGallery/>
            <Footer/>
        </div>

    )
}

export default Gallery;