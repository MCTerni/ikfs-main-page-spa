import React from 'react'

function HomePricing() {
    return (
        <div>
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
                                <a href="/contact" className="primary-btn pricing-btn">Faça uma aula experimental</a>
                                <a href="/contact" className="thumb-icon"><i className="fa fa-picture-o" /></a>
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
        </div>
    )
}

export default HomePricing;