import React from 'react'

import imgTeam1 from "../../img/team/team-1.jpg"
import imgTeam2 from "../../img/team/team-2.jpg"
import imgTeam3 from "../../img/team/team-3.jpg"
import imgTeam4 from "../../img/team/team-4.jpg"
import imgTeam5 from "../../img/team/team-5.jpg"
import imgTeam6 from "../../img/team/team-6.jpg"
import imgTeam7 from "../../img/team/team-7.jpg"
import imgTeam8 from "../../img/team/team-8.jpg"
import imgTeam9 from "../../img/team/team-9.jpg"
import imgTeam10 from "../../img/team/team-10.jpg"

function HomeTeam() {
    return (
        <div>
            {/* Team Section Begin */}
            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Conheça o time de profissionais do IKFS</span>
                                    <h2>Uma equipe dedicada a você</h2>
                                </div>
                                <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ts-slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam1}>
                                    <div className="ts_text">
                                        <h4>Marco Serra</h4>
                                        <span>Mestre com mais de 30 anos de dedicação </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam2}>
                                    <div className="ts_text">
                                        <h4>Marcia Serra</h4>
                                        <span>Mestre com mais de 30 anos de dedicação</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam3}>
                                    <div className="ts_text">
                                        <h4>Ronifabio</h4>
                                        <span>Professor graduado em TL e CLF</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam4}>
                                    <div className="ts_text">
                                        <h4>Angela</h4>
                                        <span>Professora graduado em TL e CLF</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam5}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam6}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam7}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam8}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam9}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg={imgTeam10}>
                                    <div className="ts_text">
                                        <h4>Athart Rachel</h4>
                                        <span>Gym Trainer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </div>
    )
}

export default HomeTeam;