import bannerBG from '../../img/banner-bg.jpg'

function AboutUsBanner() {
    return (
        <div>
            {/* Banner Section Begin */}
            <section className="banner-section set-bg" style={{ backgroundImage: `url(${bannerBG})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>Aulas especiais para crianças</h2>
                                <div className="bt-tips">Traga seu filho para uma aula experimental</div>
                                <a href="/contact" className="primary-btn  btn-normal">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}
        </div>
    )
}

export default AboutUsBanner;