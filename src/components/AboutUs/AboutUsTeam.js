import team1BG from '../../img/team/team-1.jpg'
import team2BG from '../../img/team/team-2.jpg'
import team3BG from '../../img/team/team-3.jpg'
import team4BG from '../../img/team/team-4.jpg'
import team5BG from '../../img/team/team-5.jpg'
import team6BG from '../../img/team/team-6.jpg'

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
                                <a href="#" className="primary-btn btn-normal appoinment-btn">Saiba mais!</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="ts-slider owl-carousel">
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team1BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team2BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team3BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team4BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team5BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ts-item set-bg" style={{ backgroundImage: `url(${team6BG})`}}>
                                    <div className="ts_text">
                                        <h4>Nome do Profissional</h4>
                                        <span>Função na Escola</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </div>
    )
}

export default AboutUsTeam;