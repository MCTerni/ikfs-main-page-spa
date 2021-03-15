import React from 'react'

import imgGallery1 from "../../img/gallery/gallery-1.jpg"
import imgGallery2 from "../../img/gallery/gallery-2.jpg"
import imgGallery3 from "../../img/gallery/gallery-3.jpg"
import imgGallery4 from "../../img/gallery/gallery-4.jpg"
import imgGallery5 from "../../img/gallery/gallery-5.jpg"
import imgGallery6 from "../../img/gallery/gallery-6.jpg"

function HomeGallery() {
    return (
        <div>
            {/* Gallery Section Begin */}
            <div className="gallery-section">
                <div className="gallery">
                    <div className="grid-sizer" />
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: `url(${imgGallery1})`}}>
                        <a href={imgGallery1} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${imgGallery2})`}}>
                        <a href={imgGallery2} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${imgGallery3})`}}>
                        <a href={imgGallery3} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${imgGallery4})`}}>
                        <a href={imgGallery4} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${imgGallery5})`}}>
                        <a href={imgGallery5} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: `url(${imgGallery6})`}}>
                        <a href={imgGallery6} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                </div>
            </div>
            {/* Gallery Section End */}
        </div>
    )
}

export default HomeGallery;