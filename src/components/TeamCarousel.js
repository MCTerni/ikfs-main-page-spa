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
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import '../css/custom.css'

function TeamCarousel() {
    return (<OwlCarousel className="ts-slider owl-carousel"
        items={3}
        loop
        autoplay
        autoplaySpeed={1000}
        autoplayHoverPause>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam1})` }} >
                <div className="ts_text">
                    <h4>Marco Serra</h4>
                    <span>Mestre com mais de 30 anos de dedicação </span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam2})` }}>
                <div className="ts_text">
                    <h4>Marcia Serra</h4>
                    <span>Mestre com mais de 30 anos de dedicação</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam3})` }}>
                <div className="ts_text">
                    <h4>Ronifabio</h4>
                    <span>Professor graduado em TL e CLF</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam4})` }}>
                <div className="ts_text">
                    <h4>Angela</h4>
                    <span>Professora graduada em TL e CLF</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam7})` }}>
                <div className="ts_text">
                    <h4>Ivani Andrade</h4>
                    <span>Intrutora</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam5})` }}>
                <div className="ts_text">
                    <h4>Jose Renato Passaro</h4>
                    <span>Auxiliar de Intrucao</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam6})` }}>
                <div className="ts_text">
                    <h4>Rafael P. Sazaki</h4>
                    <span>Auxiliar de Intrucao</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam8})` }}>
                <div className="ts_text">
                    <h4>Ivan M. Masocatto</h4>
                    <span>Auxiliar de Intrucao</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam9})` }}>
                <div className="ts_text">
                    <h4>Gabriel Luna</h4>
                    <span>Auxiliar de Intrucao</span>
                </div>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="ts-item set-bg" style={{ backgroundImage: `url(${imgTeam10})` }}>
                <div className="ts_text">
                    <h4>Felipe de Bartolo</h4>
                    <span>Auxiliar de Intrucao</span>
                </div>
            </div>
        </div>
    </OwlCarousel>
    )
}

export default TeamCarousel;