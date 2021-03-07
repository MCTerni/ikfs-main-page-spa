import bannerBG from "../../img/banner-bg.jpg"
function StylesBanner() {
    return (
        <div>
            {/* Banner Section Begin */}
            <section className="banner-section set-bg" style={{backgroundImage:`url(${bannerBG})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text service-banner">
                                <h2>Para crianças e adultos</h2>
                                <div className="bt-tips">Aulas adequadas ao seu perfil e no seu limite!</div>
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i className="fa fa-caret-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}
        </div>
    )
}

export default StylesBanner;