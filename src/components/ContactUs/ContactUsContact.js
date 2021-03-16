import React from 'react';
import ContactUs from "../../pages/ContactUs"

function ContactUsContact() {
    return (
        <div>
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
        </div>
    )
}

export default ContactUsContact;