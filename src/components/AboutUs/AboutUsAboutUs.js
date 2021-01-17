import aboutUsBG from "../../img/about-us.jpg"

function AboutUsAboutUs() {
    return (
        <div>
            {/* About US Section Begin */}
            <section className="aboutus-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="about-video set-bg" style={{ backgroundImage: `url(${aboutUsBG})`}} >
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i className="fa fa-caret-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="about-text">
                                <div className="section-title">
                                    <span>São mais de 30 anos de desicação</span>
                                    <h2>Instituto de Kung Fu Shaolin</h2>
                                </div>
                                <div className="at-desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                                <div className="about-bar">
                                    <div className="ab-item">
                                        <p>Dedicação para que você tenha uma qualidade de vida melhor!</p>
                                        <div id="bar1" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Dedicação para que você viva de forma mais saudável e feliz!</p>
                                        <div id="bar2" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ab-item">
                                        <p>Dedicação para com todos, homens mulheres e crianças de todas as idades!</p>
                                        <div id="bar3" className="barfiller">
                                            <span className="fill" data-percentage={100} />
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About US Section End */}
        </div>
    )
}

export default AboutUsAboutUs;