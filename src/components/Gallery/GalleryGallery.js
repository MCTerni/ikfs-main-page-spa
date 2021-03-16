import React from 'react';
import gallery1 from "../../img/gallery/gallery-1.jpg"
import gallery2 from "../../img/gallery/gallery-2.jpg"
import gallery3 from "../../img/gallery/gallery-3.jpg"
import gallery4 from "../../img/gallery/gallery-4.jpg"
import gallery5 from "../../img/gallery/gallery-5.jpg"
import gallery6 from "../../img/gallery/gallery-6.jpg"
import gallery7 from "../../img/gallery/gallery-7.jpg"
import gallery8 from "../../img/gallery/gallery-8.jpg"
import gallery9 from "../../img/gallery/gallery-9.jpg"

import '../../css/custom.css'

function GalleryGallery() {
    return (
        <div>
            {/* Gallery Section Begin */}
            <div className="gallery-section gallery-page">
                <div className="gallery">
                    <div className="grid-sizer" />
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: `url(${gallery1})`}}>
                        <a href={gallery1} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery2})`}}>
                        <a href={gallery2} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery3})`}}>
                        <a href={gallery3} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery4})`}}>
                        <a href={gallery4} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery5})`}}>
                        <a href={gallery5} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: `url(${gallery6})`}}>
                        <a href={gallery6} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: `url(${gallery7})`}}>
                        <a href={gallery7} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery8})`}}>
                        <a href={gallery8} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: `url(${gallery9})`}}>
                        <a href={gallery9} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                </div>
            </div>
            {/* Gallery Section End */}
        </div>
    )
}
export default GalleryGallery;