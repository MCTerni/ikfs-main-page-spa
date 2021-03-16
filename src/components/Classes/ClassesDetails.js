import React from 'react';
import latest1 from "../../img/letest-blog/latest-1.jpg"
import latest2 from "../../img/letest-blog/latest-2.jpg"
import latest3 from "../../img/letest-blog/latest-3.jpg"
import latest4 from "../../img/letest-blog/latest-4.jpg"
import latest5 from "../../img/letest-blog/latest-5.jpg"
import sidebarBanner from "../../img/sidebar-banner.jpg"
import imgClassDetails from "../../img/classes/class-details/class-detailsl.jpg"
import trainerProfile from "../../img/classes/class-details/trainer-profile.jpg"

function ClassesDetails() {
    return (
        <div>
            {/* Class Details Section Begin */}
            <section className="class-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="class-details-text">
                                <div className="cd-pic">
                                    <img src={imgClassDetails} alt="" />
                                </div>
                                <div className="cd-text">
                                    <div className="cd-single-item">
                                        <h3>Como estamos prevenindo</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua accusantium doloremque
                            laudantium. Excepteur sint occaecat cupidatat non proident sculpa.</p>
                                    </div>
                                    <div className="cd-single-item">
                                        <h3>Como proceder na escola</h3>
                                        <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur officia
                            deserunt mollit.</p>
                                    </div>
                                </div>
                                <div className="cd-trainer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="cd-trainer-pic">
                                                <img src={trainerProfile} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="cd-trainer-text">
                                                <div className="trainer-title">
                                                    <h4>Informações</h4>
                                                    <span>Importantes</span>
                                                </div>
                                                <div className="trainer-social">
                                                    <a href="#"><i className="fa fa-facebook" /></a>
                                                    <a href="#"><i className="fa fa-twitter" /></a>
                                                    <a href="#"><i className="fa fa-youtube-play" /></a>
                                                    <a href="#"><i className="fa fa-instagram" /></a>
                                                    <a href="#"><i className="fa  fa-envelope-o" /></a>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus
                                vel facilisis.</p>
                                                <ul className="trainer-info">
                                                    <li><span>Age</span>35</li>
                                                    <li><span>Weight</span>148lbs</li>
                                                    <li><span>Height</span>10' 2``</li>
                                                    <li><span>Occupation</span>no-founder</li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus
                                vel facilisis. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="sidebar-option">
                                <div className="so-categories">
                                    <h5 className="title">Dicas importantes</h5>
                                    <ul>
                                        <li><a href="#">Agende sua alula <span>ok</span></a></li>
                                        <li><a href="#">Traga sua água <span>ok</span></a></li>
                                        <li><a href="#">Treino com sapatilha <span>ok</span></a></li>
                                        <li><a href="#">4 por vez no vestiário <span>ok</span></a></li>
                                        <li><a href="#">Sempre de máscara <span>ok</span></a></li>
                                        <li><a href="#">Medir a temperatura <span>ok</span></a></li>
                                    </ul>
                                </div>
                                <div className="so-latest">
                                    <h5 className="title">Conteúdos</h5>
                                    <div className="latest-large set-bg" style={{backgroundImage:`url(${latest1})`}}>
                                        <div className="ll-text">
                                            <h5><a href="#" /></h5>
                                            <ul>
                                                <li>Aug 20, 2019</li>
                                                <li>20 Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="latest-item">
                                        <div className="li-pic">
                                            <img src={latest2} alt="" />
                                        </div>
                                        <div className="li-text">
                                            <h6><a href="#">Grilled Potato and Green Bean Salad</a></h6>
                                            <span className="li-time">Aug 15, 2019</span>
                                        </div>
                                    </div>
                                    <div className="latest-item">
                                        <div className="li-pic">
                                            <img src={latest3} alt="" />
                                        </div>
                                        <div className="li-text">
                                            <h6><a href="#">The $8 French Rosé I Buy in Bulk Every Summer</a></h6>
                                            <span className="li-time">Aug 15, 2019</span>
                                        </div>
                                    </div>
                                    <div className="latest-item">
                                        <div className="li-pic">
                                            <img src={latest4} alt="" />
                                        </div>
                                        <div className="li-text">
                                            <h6><a href="#">Ina Garten's Skillet-Roasted Lemon Chicken</a></h6>
                                            <span className="li-time">Aug 15, 2019</span>
                                        </div>
                                    </div>
                                    <div className="latest-item">
                                        <div className="li-pic">
                                            <img src={latest5} alt="" />
                                        </div>
                                        <div className="li-text">
                                            <h6><a href="#">The Best Weeknight Baked Potatoes, 3 Creative Ways</a></h6>
                                            <span className="li-time">Aug 15, 2019</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="so-banner set-bg" style={{backgroundImage:`url(${sidebarBanner})`}}>
                                    <h5>Banner 300x300</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Class Details Section End */}
        </div>
    )
}

export default ClassesDetails;