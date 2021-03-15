import Breadcrumb from "../components/Breadcrumb";
import ClassesTimetable from "../components/Classes/ClassesTimetable";
import Footer from "../components/Footer"
import TopMenu from "../components/TopMenu"

function Timetable() {
    return (
        <div>
            {/* Page Preloder */}
            <div id="preloder">
                <div className="loader" />
            </div>
            <TopMenu/>
            <Breadcrumb title='Horários' subTitle='Horários'/>
            <ClassesTimetable/>
            <Footer/>
        </div>

    )
}

export default Timetable;