import TopMenu from "../components/TopMenu"

function ContactUs() {
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
                                <h2>Fale com a gente!</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <a href="#">Estilos de Kung Fu</a>
                                    <span>Entre em contato e saiba mais sobre nossa escola</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Contact Section Begin */}
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title contact-title">
                                <span>Via Whatsapp, telefone, email ou formulário</span>
                                <h2>Fale Conosco</h2>
                            </div>
                            <div className="contact-widget">
                                <div className="cw-text">
                                    <i className="fa fa-map-marker" />
                                    <p>Rua Alvarenga, 1433<br />Butantã, São Paulo - SP<br />CEP 05509-003</p>
                                </div>
                                <div className="cw-text">
                                    <i className="fa fa-mobile" />
                                    <ul>
                                        <li>55 11 3816-0848</li>
                                    </ul>
                                </div>
                                <div className="cw-text">
                                    <i className="fa fa-Whatsapp" />
                                    <ul>
                                        <li>55 11 98564-0028</li>
                                    </ul>
                                </div>
                                <div className="cw-text email">
                                    <i className="fa fa-envelope" />
                                    <p>ikfs@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form action="#">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Celular" />
                                    <textarea placeholder="Mensagem" defaultValue={""} />
                                    <button type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9799886625055!2d-46.71410248502207!3d-23.56916218467905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56539e6a7475%3A0x6185f20988eee72d!2sR.%20Alvarenga%2C%201433%20-%20Butant%C3%A3%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005509-003!5e0!3m2!1spt-BR!2sbr!4v1603049499928!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowFullScreen height={550} />
                    </div>
                </div>
            </section>
            {/* Contact Section End */}
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

    )
}

export default ContactUs;