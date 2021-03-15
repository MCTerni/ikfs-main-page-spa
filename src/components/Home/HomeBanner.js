import React from 'react'

import imgBannerBG from "../../img/banner-bg.jpg"

function HomeBanner() {
    return (
        <div>
            {/* Banner Section Begin */}
            <section className="banner-section set-bg" style={{backgroundImage:`url(${imgBannerBG})`}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>Traga seus filhos para treinar</h2>
                                <div className="bt-tips">Aulas especiais para crianças.</div>
                                <a href="#" className="primary-btn  btn-normal">Saiba Mais!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}
        </div>
    )
}

export default HomeBanner;