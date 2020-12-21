import React from 'react'

import logo from '../img/logo.png'

function Footer() {
    return (
        <div>
            {/* Footer Section Begin */}
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="#"><img src={logo} alt="" /></a>
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
        </div>
    )
}

export default Footer;