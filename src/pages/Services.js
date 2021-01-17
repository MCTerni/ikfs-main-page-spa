import Menu from "../components/menu"
import TopMenu from "../components/TopMenu"

function Services() {

    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>Services</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Services Section Begin */}
            <section className="services-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Kung Fu &amp; Taichi</span>
                                <h2>Conheça mais sobre nossos estilos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src="img/services/services-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Choy Lay Fut</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                      facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-3 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src="img/services/services-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-4 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Ton Long</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-8 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src="img/services/services-4.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-7 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Taichi Wu Hao</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                      facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-6 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src="img/services/services-3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-5 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Terapias</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}
            {/* Banner Section Begin */}
            <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
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
            {/* Pricing Section Begin */}
            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>O que praticamos aqui no IKFS</span>
                                <h2>Conheça nossos estilos marciais</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>Kung Fu</h3>
                                <div className="pi-price">
                                    <h2>CLF</h2>
                                    <span>Choy Lay Fut</span>
                                </div>
                                <ul>
                                    <li>Estilo dos 5 animais </li>
                                    <li>Um dos mais praticados no mundo</li>
                                    <li>Força e explosão muscular</li>
                                    <li>Criado para ser prático</li>
                                    <li>Originário do sul da china</li>
                                    <li>Uso de armas tradicionais</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Faça uma aula experimental</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>Kung Fu</h3>
                                <div className="pi-price">
                                    <h2>TL</h2>
                                    <span>Ton Long</span>
                                </div>
                                <ul>
                                    <li>Nascido no norte da china</li>
                                    <li>Altamente técnico e preciso</li>
                                    <li>Técnicas de curta distância</li>
                                    <li>Uso de Armas tradicionais</li>
                                    <li>Foca pontos sensíveis do oponente</li>
                                    <li>Velóz, preciso e leve</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Faça uma aula experimental</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>Taichi</h3>
                                <div className="pi-price">
                                    <h2>Wu Hao</h2>
                                    <span>Prática Interna</span>
                                </div>
                                <ul>
                                    <li>Base e equilíbrio</li>
                                    <li>Um dos estilos mais polulares no mundo</li>
                                    <li>Hamonia entre corpo, respiração e energia</li>
                                    <li>Fortalecimento muscular</li>
                                    <li>Qualidade de vida e longevidade</li>
                                    <li>Busca interior e meditativa</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">Faça uma aula experimental</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Section End */}
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
        </div>
    );
}

export default Services;