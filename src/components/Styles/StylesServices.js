import services1 from "../../img/services/services-1.jpg"
import services2 from "../../img/services/services-2.jpg"
import services3 from "../../img/services/services-3.jpg"
import services4 from "../../img/services/services-4.jpg"
function StylesServices() {
    return (
        <div>
            {/* Services Section Begin */}
            <section className="services-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Kung Fu &amp; Taichi</span>
                                <h2>Conheça mais sobre nossos estilos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={services1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Choy Lay Fut</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                      facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-3 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={services2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-4 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Ton Long</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-8 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={services4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-7 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Taichi Wu Hao</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                      facilisis.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-6 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={services3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-5 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Terapias</h4>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                                <a href="#">Explore</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}
        </div>
    )
}
export default StylesServices;