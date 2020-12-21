import React from 'react'
import TopMenu from '../components/TopMenu'

function AboutUs() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            {/* Header Section Begin */}
            <header className="header-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="nav-menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="./about-us.html">Escola</a></li>
                                    <li><a href="./class-details.html">Horários</a></li>
                                    <li><a href="./services.html">Kung Fu | Taichi</a></li>
                                    <li><a href="./team.html">Equipe</a></li>
                                    <li><a href="#">+</a>
                                        <ul className="dropdown">
                                            <li><a href="./about-us.html">Sobre Nós</a></li>
                                            <li><a href="./class-timetable.html">Horários</a></li>
                                            <li><a href="./bmi-calculator.html">Agende!</a></li>
                                            <li><a href="./team.html">Equipe</a></li>
                                            <li><a href="./gallery.html">Galeria</a></li>
                                            <li><a href="./blog.html">Conteúdos</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./contact.html">Contato</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="top-option">
                                <div className="to-search search-switch">
                                    <i className="fa fa-search" />
                                </div>
                                <div className="to-social">
                                    <a href="#"><i className="fa fa-whatsapp" /></a>
                                    <a href="https://www.facebook.com/institutodekungfushaolin"><i className="fa fa-facebook" /></a>
                                    <a href="https://www.youtube.com/channel/UC-0awwTIV1QLHCgmkO5zE7g"><i className="fa fa-youtube-play" /></a>
                                    <a href="https://www.instagram.com/institutodekungfu/"><i className="fa fa-instagram" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas-open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
            {/* Header End */}
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
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
            {/* ChoseUs Section Begin */}
            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Mais qualidade de vida para o seu dia a dia</span>
                                <h2>Pratique Kung Fu e Taichi</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-034-stationary-bike" />
                                <h4>Saúde Física</h4>
                                <p>Práticas que respeitam seu rítmo. Seja no Kung Fu ou Taichi, a prática regular trará um melhor condicionamento físico para você.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice" />
                                <h4>Saúde Mental</h4>
                                <p>O Kung Fu e o Taichi são metodologias marciais chinesas que porporcionam ao praticante além de um melhor condicionamento físico uma melhor qualidade mental. Ajudando no sono, nas práticas diárias e na concentração.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell" />
                                <h4>Equilíbrio Perfeito</h4>
                                <p>O kung Fu e o Taichi trazem o equilíbrio entre corpo, mente e espírito. Propoporcionando ao praticante autoconhcimento. Além de relacionamento e disciplina.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat" />
                                <h4>Você 100%</h4>
                                <p>Disciplina e dedicação à você mesmo. A pratica marcial promove o bem estar, te ajudando a superar suas prórpias metas. permita-se!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ChoseUs Section End */}
            {/* About US Section Begin */}
            <section className="aboutus-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="about-video set-bg" data-setbg="img/about-us.jpg">
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i className="fa fa-caret-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="about-text">
                                <div className="section-title">
                                    <span>São mais de 30 anos de desicação</span>
                                    <h2>Instituto de Kung Fu Shaolin</h2>
                                </div>
                                <div className="at-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div className="about-bar">
                                    <div className="ab-item">
                                        <p>Dedicação para que você tenha uma qualidade de vida melhor!</p>
                                        <div id="bar1" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Dedicação para que você viva de forma mais saudável e feliz!</p>
                                        <div id="bar2" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Dedicação para com todos, homens mulheres e crianças de todas as idades!</p>
                                        <div id="bar3" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About US Section End */}
            {/* Team Section Begin */}
            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Profissionais 100% dedicados</span>
                                    <h2>Conheça nosso time!</h2>
                                </div>
                                <a href="#" className="primary-btn btn-normal appoinment-btn">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ts-slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-1.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-2.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-3.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-4.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-5.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" data-setbg="img/team/team-6.jpg">
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section End */}
            {/* Banner Section Begin */}
            <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>Aulas especiais para crianças</h2>
                                <div className="bt-tips">Traga seu filho para uma aula experimental</div>
                                <a href="#" className="primary-btn  btn-normal">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}
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
                    <div className="ts_slider owl-carousel">
                        <div className="ts_item">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="ti_pic">
                                        <img src="img/testimonial/testimonial-1.jpg" alt="" />
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
                                        <img src="img/testimonial/testimonial-2.jpg" alt="" />
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
                    </div>
                </div>
            </section>
            {/* Testimonial Section End */}
            {/* Get In Touch Section Begin */}
            <div className="gettouch-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-map-marker" />
                                <p>Rua Alvarenga, 1433<br />Butantã, São Paulo - SP<br />CEP 05509-003</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                <i className="fa fa-mobile" />
                                <ul>
                                    <li>55 11 3816-0848</li>
                                    <li>55 11 98564-0028</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text email">
                                <i className="fa fa-envelope" />
                                <p>ikfs@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Get In Touch Section End */}
            {/* Footer Section Begin */}
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="#"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>Instituto de kung Fu Shaolin - Escola com mais de 25 anos de ensino em Kung Fu Tradicional e Taichi.</p>
                                <div className="fa-social">
                                    <a href="https://www.facebook.com/institutodekungfushaolin"><i className="fa fa-facebook" /></a>
                                    <a href="https://www.youtube.com/channel/UC-0awwTIV1QLHCgmkO5zE7g"><i className="fa fa-youtube-play" /></a>
                                    <a href="https://www.instagram.com/institutodekungfu/"><i className="fa fa-instagram" /></a>
                                    <a href="#"><i className="fa  fa-envelope-o" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Links Principais</h4>
                                <ul>
                                    <li><a href="#">Nossa Escola</a></li>
                                    <li><a href="#">Equipe</a></li>
                                    <li><a href="#">Horários</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Fique por Dentro</h4>
                                <ul>
                                    <li><a href="#">Estilos de Kung Fu</a></li>
                                    <li><a href="#">Sobre o Taichi</a></li>
                                    <li><a href="#">Espaço Meditação</a></li>
                                    <li><a href="#">Sala Terapias</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fs-widget">
                                <h4>Kung Fu &amp; Taichi</h4>
                                <div className="fw-recent">
                                    <h6><a href="#">Kung Fu tradicional</a></h6>
                                    <ul>
                                        <li>Choy Lay Fu (5 Animais)</li>
                                        <li>Ton long (louva a Deus)</li>
                                    </ul>
                                </div>
                                <div className="fw-recent">
                                    <h6><a href="#">Taichi</a></h6>
                                    <ul>
                                        <li>Wu Hao</li>
                                        <li>Prática interna</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright © All rights reserved | Design By <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://creative360rg.com.br" target="_blank">Creative360RG</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer Section End */}
            {/* Search model Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search model end */}
            {/* Js Plugins */}
        </div>
    )
}

export default AboutUs;