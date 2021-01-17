function ClassesTimetable() {
    return (
        <div>
            {/* Class Timetable Section Begin */}
            <section className="class-timetable-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <span>Programação de Aulas</span>
                                <h2>Escolha seu horário de treino</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="table-controls">
                                <ul>
                                    <li className="active" data-tsfilter="all">Todas as Aulas</li>
                                    <li data-tsfilter="fitness">Aulas CLF</li>
                                    <li data-tsfilter="motivation">Aulas Ton Long</li>
                                    <li data-tsfilter="workout">Aulas Wu Hao</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="class-timetable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Segunda</th>
                                            <th>Terça</th>
                                            <th>Quarta</th>
                                            <th>Quinta</th>
                                            <th>Sexta</th>
                                            <th>Sábado</th>
                                            <th>Domingo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="class-time">6.00am - 8.00am</td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Faixas Pretas</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg blank-td" />
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="class-time">10.00am - 12.00am</td>
                                            <td className="blank-td" />
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="blank-td" />
                                        </tr>
                                        <tr>
                                            <td className="class-time">5.00pm - 7.00pm</td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="blank-td" />
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="class-time">7.00pm - 9.00pm</td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg blank-td" />
                                            <td className="hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>Yoga</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="motivation">
                                                <h5>Ton Long</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="dark-bg hover-bg ts-meta" data-tsmeta="fitness">
                                                <h5>Choy Lay Fut</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                            <td className="hover-bg ts-meta" data-tsmeta="workout">
                                                <h5>TaiChi</h5>
                                                <span>Aqui entra quem pode este horário</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Class Timetable Section End */}
        </div>
    )
}

export default ClassesTimetable;