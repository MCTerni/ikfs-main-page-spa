import TeamCarousel from "../TeamCarousel"

function HomeTeam() {
    return (
        <div>
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
                                <a href="/team" className="primary-btn btn-normal appoinment-btn">Saiba mais</a>
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

export default HomeTeam;