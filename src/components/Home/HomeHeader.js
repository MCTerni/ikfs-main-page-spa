import React from 'react'

import logo from '../../img/logo.png'
import Menu from '../menu';

function HomeHeader() {
    return (
        <div>
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
                                <Menu/>
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
        </div>
    )
}

export default HomeHeader;