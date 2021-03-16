import React from 'react';
import testimonial1 from "../../img/testimonial/testimonial-1.jpg"
import testimonial2 from "../../img/testimonial/testimonial-2.jpg"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../../css/custom.css'


function AboutUsTestimonial() {
    return (
        <div>
            {/* Testimonial Section Begin */}
            <section className="testimonial-section spad" style={{ backgroundColor: '#666' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Confira o que nossos alunos dizem!</span>
                                <h2>Depoimentos</h2>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className="ts_slider owl-carousel"
                        items = {1}
                        loop
                        nav
                        margin={0}
                        autoplay
                        autoplaySpeed={1000}
                        autoplayHoverPause>
                        <div className="ts_item">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="ti_pic">
                                        <img src={testimonial1} alt="" />
                                    </div>
                                    <div className="ti_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                        <h5>Marshmello Gomez</h5>
                                        <div className="tt-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ts_item">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="ti_pic">
                                        <img src={testimonial2} alt="" />
                                    </div>
                                    <div className="ti_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
                                        <h5>Marshmello Gomez</h5>
                                        <div className="tt-rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            {/* Testimonial Section End */}
        </div>
    )
}

export default AboutUsTestimonial;