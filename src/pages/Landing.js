import React from 'react'

import logo from '../img/logo.png'
import imgHero1 from "../img/hero/hero-1.jpg"
import imgHero2 from "../img/hero/hero-2.jpg"
import imgClasses1 from "../img/classes/class-1.jpg"
import imgClasses2 from "../img/classes/class-2.jpg"
import imgClasses3 from "../img/classes/class-3.jpg"
import imgClasses4 from "../img/classes/class-4.jpg"
import imgClasses5 from "../img/classes/class-5.jpg"
import imgBannerBG from "../img/banner-bg.jpg"
import imgGallery1 from "../img/gallery/gallery-1.jpg"
import imgGallery2 from "../img/gallery/gallery-2.jpg"
import imgGallery3 from "../img/gallery/gallery-3.jpg"
import imgGallery4 from "../img/gallery/gallery-4.jpg"
import imgGallery5 from "../img/gallery/gallery-5.jpg"
import imgGallery6 from "../img/gallery/gallery-6.jpg"
import imgTeam1 from "../img/team/team-1.jpg"
import imgTeam2 from "../img/team/team-2.jpg"
import imgTeam3 from "../img/team/team-3.jpg"
import imgTeam4 from "../img/team/team-4.jpg"
import imgTeam5 from "../img/team/team-5.jpg"
import imgTeam6 from "../img/team/team-6.jpg"
import imgTeam7 from "../img/team/team-7.jpg"
import imgTeam8 from "../img/team/team-8.jpg"
import imgTeam9 from "../img/team/team-9.jpg"
import imgTeam10 from "../img/team/team-10.jpg"

function Landing(){
    return (
        <div>
          {/* Page Preloder */}
          <div id="preloder">
            <div className="loader" />
          </div>
          {/* Offcanvas Menu Section Begin */}
          <div className="offcanvas-menu-overlay" />
          <div className="offcanvas-menu-wrapper">
            <div className="canvas-close">
              <i className="fa fa-close" />
            </div>
            <div className="canvas-search search-switch">
              <i className="fa fa-search" />
            </div>
            <nav className="canvas-menu mobile-menu">
              <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about-us.html">Escola</a></li>
                <li><a href="./classes.html">Horários</a></li>
                <li><a href="./services.html">Kung Fu | Taichi</a></li>
                <li><a href="./team.html">Equipe</a></li>
                <li><a href="">+</a>
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
            <div id="mobile-menu-wrap" />
            <div className="canvas-social">
              <a href="#"><i className="fa fa-whatsapp" /></a>
              <a href="https://www.facebook.com/institutodekungfushaolin"><i className="fa fa-facebook" /></a>
              <a href="https://www.youtube.com/channel/UC-0awwTIV1QLHCgmkO5zE7g"><i className="fa fa-youtube-play" /></a>
              <a href="https://www.instagram.com/institutodekungfu/"><i className="fa fa-instagram" /></a>
            </div>
          </div>
          {/* Offcanvas Menu Section End */}
          {/* Header Section Begin */}
          <header className="header-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3">
                  <div className="logo">
                    <a href="./index.html">
                      <img src={logo} alt="" />
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
          {/* Hero Section Begin */}
          <section className="hero-section">
            <div className="hs-slider owl-carousel">
              <div className="hs-item set-bg" data-setbg={imgHero1}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                      <div className="hi-text">
                        <span>Instituto de Kung Fu Shaolin</span>
                        <h1>Pratique <strong>Kung Fu e</strong> Taichi</h1>
                        <a href="#" className="primary-btn">Saiba Mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hs-item set-bg" data-setbg={imgHero2}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                      <div className="hi-text">
                        <span>Instituto de Kung Fu Shaolin</span>
                        <h1>Qualidade <strong>de vida</strong> para você</h1>
                        <a href="#" className="primary-btn">Saiba Mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Hero Section End */}
          {/* ChoseUs Section Begin */}
          <section className="choseus-section spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <span>Fique por dentro do que temos em nossa escola</span>
                    <h2>Saiba mais sobre o IKFS</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-item">
                    <span className="flaticon-034-stationary-bike" />
                    <h4>Kung Fu - Choy Lay Fut</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      dolore facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-item">
                    <span className="flaticon-033-juice" />
                    <h4>Kung Fu - Louva a Deus</h4>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                      facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-item">
                    <span className="flaticon-002-dumbell" />
                    <h4>Taichi - Wu Hao</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      dolore facilisis.</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="cs-item">
                    <span className="flaticon-014-heart-beat" />
                    <h4>Terapias Tradicionais</h4>
                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                      facilisis.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ChoseUs Section End */}
          {/* Classes Section Begin */}
          <section className="classes-section spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <span>Conheça nossa estrutura</span>
                    <h2>Um espaço dedicado a você</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="class-item">
                    <div className="ci-pic">
                      <img src={imgClasses1} alt="" />
                    </div>
                    <div className="ci-text">
                      <span>Espaço Nome</span>
                      <h5>Breve explicação</h5>
                      <a href="#"><i className="fa fa-angle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="class-item">
                    <div className="ci-pic">
                      <img src={imgClasses2} alt="" />
                    </div>
                    <div className="ci-text">
                      <span>Espaço Nome</span>
                      <h5>Breve explicação</h5>
                      <a href="#"><i className="fa fa-angle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="class-item">
                    <div className="ci-pic">
                      <img src={imgClasses3} alt="" />
                    </div>
                    <div className="ci-text">
                      <span>Espaço Nome</span>
                      <h5>Breve explicação</h5>
                      <a href="#"><i className="fa fa-angle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="class-item">
                    <div className="ci-pic">
                      <img src={imgClasses4} alt="" />
                    </div>
                    <div className="ci-text">
                      <span>Espaço Nome</span>
                      <h4>Breve explicação</h4>
                      <a href="#"><i className="fa fa-angle-right" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="class-item">
                    <div className="ci-pic">
                      <img src={imgClasses5} alt="" />
                    </div>
                    <div className="ci-text">
                      <span>Espaço Nome</span>
                      <h4>Breve explicação</h4>
                      <a href="#"><i className="fa fa-angle-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ChoseUs Section End */}
          {/* Banner Section Begin */}
          <section className="banner-section set-bg" data-setbg={imgBannerBG}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="bs-text">
                    <h2>Traga seus filhos para treinar</h2>
                    <div className="bt-tips">Aulas especiais para crianças.</div>
                    <a href="#" className="primary-btn  btn-normal">Saiba Mais!</a>
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
          {/* Gallery Section Begin */}
          <div className="gallery-section">
            <div className="gallery">
              <div className="grid-sizer" />
              <div className="gs-item grid-wide set-bg" data-setbg={imgGallery1}>
                <a href={imgGallery1} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
              <div className="gs-item set-bg" data-setbg={imgGallery2}>
                <a href={imgGallery2} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
              <div className="gs-item set-bg" data-setbg={imgGallery3}>
                <a href={imgGallery3} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
              <div className="gs-item set-bg" data-setbg={imgGallery4}>
                <a href={imgGallery4} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
              <div className="gs-item set-bg" data-setbg={imgGallery5}>
                <a href={imgGallery5} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
              <div className="gs-item grid-wide set-bg" data-setbg={imgGallery6}>
                <a href={imgGallery6} className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
              </div>
            </div>
          </div>
          {/* Gallery Section End */}
          {/* Team Section Begin */}
          <section className="team-section spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="team-title">
                    <div className="section-title">
                      <span>Conheça o time de profissionais do IKFS</span>
                      <h2>Uma equipe dedicada a você</h2>
                    </div>
                    <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="ts-slider owl-carousel">
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam1}>
                      <div className="ts_text">
                        <h4>Marco Serra</h4>
                        <span>Mestre com mais de 30 anos de dedicação </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam2}>
                      <div className="ts_text">
                        <h4>Marcia Serra</h4>
                        <span>Mestre com mais de 30 anos de dedicação</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam3}>
                      <div className="ts_text">
                        <h4>Ronifabio</h4>
                        <span>Professor graduado em TL e CLF</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam4}>
                      <div className="ts_text">
                        <h4>Angela</h4>
                        <span>Professora graduado em TL e CLF</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam5}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam6}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam7}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam8}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam9}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ts-item set-bg" data-setbg={imgTeam10}>
                      <div className="ts_text">
                        <h4>Athart Rachel</h4>
                        <span>Gym Trainer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Team Section End */}
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
      );
    
}

export default Landing;