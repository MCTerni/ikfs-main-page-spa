import React from 'react'

function HomeGetInTouch() {
    return (
        <div>
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
        </div>
    )
}

export default HomeGetInTouch;