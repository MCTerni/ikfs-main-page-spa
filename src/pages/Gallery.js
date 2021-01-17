import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer";
import TopMenu from "../components/TopMenu"

function Gallery() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Gallery' subtitle='Gallery'/>
            {/* Gallery Section Begin */}
            <div className="gallery-section gallery-page">
                <div className="gallery">
                    <div className="grid-sizer" />
                    <div className="gs-item grid-wide set-bg" data-setbg="img/gallery/gallery-1.jpg">
                        <a href="img/gallery/gallery-1.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-2.jpg">
                        <a href="img/gallery/gallery-2.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-3.jpg">
                        <a href="img/gallery/gallery-3.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-4.jpg">
                        <a href="img/gallery/gallery-4.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-5.jpg">
                        <a href="img/gallery/gallery-5.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" data-setbg="img/gallery/gallery-6.jpg">
                        <a href="img/gallery/gallery-6.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" data-setbg="img/gallery/gallery-7.jpg">
                        <a href="img/gallery/gallery-7.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-8.jpg">
                        <a href="img/gallery/gallery-8.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                    <div className="gs-item set-bg" data-setbg="img/gallery/gallery-9.jpg">
                        <a href="img/gallery/gallery-9.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
                    </div>
                </div>
            </div>
            {/* Gallery Section End */}
            <Footer/>
        </div>

    )
}

export default Gallery;