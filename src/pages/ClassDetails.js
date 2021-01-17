import Menu from "../components/menu"
import TopMenu from "../components/TopMenu"

function ClassDetails(){
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
                    <h2>Cuidados essenciais</h2>
                    <div className="bt-option">
                        <a href="./index.html">Home</a>
                        <a href="#">Horários</a>
                        <span>Prevensção Covid-19</span>
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
                    <h2>Escolha seu horário de treino</h2>
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
            {/* Class Details Section Begin */}
            <section className="class-details-section spad">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="class-details-text">
                    <div className="cd-pic">
                        <img src="img/classes/class-details/class-detailsl.jpg" alt="" />
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
                            <img src="img/classes/class-details/trainer-profile.jpg" alt="" />
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
                        <div className="latest-large set-bg" data-setbg="img/letest-blog/latest-1.jpg">
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
                            <img src="img/letest-blog/latest-2.jpg" alt="" />
                        </div>
                        <div className="li-text">
                            <h6><a href="#">Grilled Potato and Green Bean Salad</a></h6>
                            <span className="li-time">Aug 15, 2019</span>
                        </div>
                        </div>
                        <div className="latest-item">
                        <div className="li-pic">
                            <img src="img/letest-blog/latest-3.jpg" alt="" />
                        </div>
                        <div className="li-text">
                            <h6><a href="#">The $8 French Rosé I Buy in Bulk Every Summer</a></h6>
                            <span className="li-time">Aug 15, 2019</span>
                        </div>
                        </div>
                        <div className="latest-item">
                        <div className="li-pic">
                            <img src="img/letest-blog/latest-4.jpg" alt="" />
                        </div>
                        <div className="li-text">
                            <h6><a href="#">Ina Garten's Skillet-Roasted Lemon Chicken</a></h6>
                            <span className="li-time">Aug 15, 2019</span>
                        </div>
                        </div>
                        <div className="latest-item">
                        <div className="li-pic">
                            <img src="img/letest-blog/latest-5.jpg" alt="" />
                        </div>
                        <div className="li-text">
                            <h6><a href="#">The Best Weeknight Baked Potatoes, 3 Creative Ways</a></h6>
                            <span className="li-time">Aug 15, 2019</span>
                        </div>
                        </div>
                    </div>
                    <div className="so-banner set-bg" data-setbg="img/sidebar-banner.jpg">
                        <h5>Banner 300x300</h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* Class Details Section End */}
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

export default ClassDetails;