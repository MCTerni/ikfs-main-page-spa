import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer"
import TopMenu from "../components/TopMenu"

function Styles() {

    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Estilos e Terapias' subTitle='Estilos Externos e Internos'/>
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
            <Footer/>
        </div>
    );
}

export default Styles;