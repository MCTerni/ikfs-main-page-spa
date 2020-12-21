import React from 'react'
import {Link} from 'react-router-dom'


function TopMenu(){
    return (
        <div>
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
                <li><Link to = "">Home</Link></li>
                <li><Link to="about">Escola</Link></li>
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
        </div>
    )
}

export default TopMenu;