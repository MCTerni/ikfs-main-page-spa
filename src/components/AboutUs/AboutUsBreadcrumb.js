import breadcrumbBG from '../../img/breadcrumb-bg.jpg'

function AboutUsBreadcrumb() {
    return (
        <div>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${breadcrumbBG})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>Nossa Escola</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>Conheça nossa escola</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
        </div>
    )
}

export default AboutUsBreadcrumb;