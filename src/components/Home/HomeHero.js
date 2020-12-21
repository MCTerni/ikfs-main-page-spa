import React from 'react';

import imgHero1 from "../../img/hero/hero-1.jpg"
import imgHero2 from "../../img/hero/hero-2.jpg"

function HomeHero() {
    return (
        <div>
            {/* Hero Section Begin */}
            <section className="hero-section">
                <div className="hs-slider owl-carousel">
                    <div className="hs-item set-bg" data-setbg={imgHero1} >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-6">
                                    <div className="hi-text">
                                        <span>Instituto de Kung Fu Shaolin</span>
                                        <h1>Pratique <strong>Kung Fu e</strong> Taichi</h1>
                                        <a href="#" className="primary-btn">Saiba Mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hs-item set-bg" data-setbg={imgHero2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-6">
                                    <div className="hi-text">
                                        <span>Instituto de Kung Fu Shaolin</span>
                                        <h1>Qualidade <strong>de vida</strong> para você</h1>
                                        <a href="#" className="primary-btn">Saiba Mais</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
        </div>
    )
}

export default HomeHero;