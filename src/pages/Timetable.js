import Menu from "../components/menu"
import TopMenu from "../components/TopMenu"

function Timetable() {
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
                                <h2>Timetable</h2>
                                <div className="bt-option">
                                    <a href="./index.html">Home</a>
                                    <a href="#">Pages</a>
                                    <span>Services</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Class Timetable Section Begin */}
            <section className="class-timetable-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <span>Programação de Aulas</span>
                                <h2>FEscolha seu horário de treino</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="table-controls">
                                <ul>
                                    <li className="active" data-tsfilter="all">Todas as Aulas</li>
                                    <li data-tsfilter="fitness">Aulas CLF</li>
                                    <li data-tsfilter="motivation">Aulas Ton Long</li>
                                    <li data-tsfilter="workout">Aulas Wu Hao</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="class-timetable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="class-time">6.00am - 8.00am</td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Faixas Pretas</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg blank-td" />
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="class-time">10.00am - 12.00am</td>
                                            <td className="blank-td" />
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="blank-td" />
                                        </tr>
                                        <tr>
                                            <td className="class-time">5.00pm - 7.00pm</td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="blank-td" />
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="class-time">7.00pm - 9.00pm</td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg blank-td" />
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>Yoga</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Class Timetable Section End */}
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

export default Timetable;