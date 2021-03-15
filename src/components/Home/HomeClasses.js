import React from 'react'

import imgClasses1 from "../../img/classes/class-1.jpg"
import imgClasses2 from "../../img/classes/class-2.jpg"
import imgClasses3 from "../../img/classes/class-3.jpg"
import imgClasses4 from "../../img/classes/class-4.jpg"
import imgClasses5 from "../../img/classes/class-5.jpg"

function HomeClasses() {
    return (
        <div>
            {/* Classes Section Begin */}
            <section className="classes-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Conheça nossa estrutura</span>
                                <h2>Um espaço dedicado a você</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={imgClasses1} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Espaço Nome</span>
                                    <h5>Breve explicação</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={imgClasses2} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Espaço Nome</span>
                                    <h5>Breve explicação</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={imgClasses3} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Espaço Nome</span>
                                    <h5>Breve explicação</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={imgClasses4} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Espaço Nome</span>
                                    <h4>Breve explicação</h4>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={imgClasses5} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Espaço Nome</span>
                                    <h4>Breve explicação</h4>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Classes Section End */}
        </div>
    )
}

export default HomeClasses;