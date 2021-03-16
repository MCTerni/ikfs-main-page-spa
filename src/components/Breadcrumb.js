import React from 'react';
import breadcrumbBG from "../img/breadcrumb-bg.jpg"
import { Link } from 'react-router-dom'

function Breadcrumb(props) {
    return (
        <div>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-section set-bg" style={{backgroundImage:`url(${breadcrumbBG})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>{props.title}</h2>
                                <div className="bt-option">
                                    <Link to="">Home</Link>
                                    <span>{props.subTitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
        </div>
    )
}

export default Breadcrumb;