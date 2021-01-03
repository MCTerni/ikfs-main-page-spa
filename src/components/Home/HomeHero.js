import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../../css/custom.css'

import imgHero1 from "../../img/hero/hero-1.jpg";
import imgHero2 from "../../img/hero/hero-2.jpg";

function HomeHero() {
    return (
        <div>
            {/* Hero Section Begin */}
            <section className="hero-section">
                <OwlCarousel className="hs-slider owl-carousel owl-theme owl-nav" items={1}
                loop
                nav
                margin={0}
                >
                    <div className="hs-item " style={{backgroundImage:`url(${imgHero1})`}}>
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
                    <div className="hs-item set-bg" style={{backgroundImage:`url(${imgHero2})`}}>
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
                </OwlCarousel>
            </section>
            {/* Hero Section End */}
        </div>
    )
}

export default HomeHero;