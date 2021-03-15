import TeamCarousel from "../TeamCarousel"

function AboutUsTeam() {
    return (
        <div>
            {/* Team Section Begin */}
            <section className="team-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-title">
                                <div className="section-title">
                                    <span>Profissionais 100% dedicados</span>
                                    <h2>Conheça nosso time!</h2>
                                </div>
                                <a href="/team" className="primary-btn btn-normal appoinment-btn">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <TeamCarousel/>
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </div>
    )
}

export default AboutUsTeam;