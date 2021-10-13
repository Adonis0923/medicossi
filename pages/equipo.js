import IndexContainer from '../components/indexContainer'
function Equipo() {
    return (
        <>
            <IndexContainer>
                {/* <script type="text/javascript">
                    _linkedin_partner_id = "1375010";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                </script>
                <script type="text/javascript">
                    (function() {
                        var s = document.getElementsByTagName("script")[0];
                        var b = document.createElement("script");
                        b.type = "text/javascript";
                        b.async = true;
                        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                        s.parentNode.insertBefore(b, s);
                    })();
                </script> <noscript> <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=1375010&fmt=gif" /> </noscript>
                <!-- End LinkedIn Tag -->
                <!-- Google Tag Manager (noscript) -->
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P32RZHX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                <!-- End Google Tag Manager (noscript) -->

                @include('landing.navbarlanding') */}
                <section className="mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="mt-5 container text-muted">
                                <br/><br/>
                                Buscamos innovadores que estén apasionados y listos para asumir grandes desafíos.
                                Sabemos que la diversidad nos convierte en una empresa más fuerte y nos enorgullecemos
                                de contratar personas talentosas de todos los orígenes, perspectivas y experiencias.
                            </div>
                            <div className="col-2 col-md-1 mt-5 px-0 text-right">
                                <i className="fas fa-user-tie fa-2x text-muted"></i>
                            </div>
                            <div className="col-10 col-md-5 mt-5">
                                <h4>
                                    Consultor SEO
                                </h4>
                                <p>Consultor / Tiempo parcial / Online</p>
                            </div>
                            <div className="col-2 col-md-1 mt-5 px-0 text-right">
                                <i className="fas fa-user-tie fa-2x text-muted"></i>
                            </div>
                            <div className="col-10 col-md-5 mt-5">
                                <h4>
                                    Especialista SEM
                                </h4>
                                <p>Google AdWords / Analista Digital</p>
                            </div>
                            <div className="col-2 col-md-1 mt-5 px-0 text-right">
                                <i className="fas fa-user-tie fa-2x text-muted"></i>
                            </div>
                            <div className="col-10 col-md-5 mt-5">
                                <h4>
                                    Community Manager
                                </h4>
                                <p>Creación y gestión de contenido / Tiempo Parcial</p>
                            </div>
                            <div className="col-12 text-center mt-4">
                                <button id="login" type="submit" className="btn btn-outline-azul " data-toggle="modal" data-target="#trabajo">
                                    APLICA PARA UNO <br className="d-block d-sm-none" /> DE ESTOS TRABAJO
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="js-heightControl" style={{height: "0"}}>&nbsp;</div>
            </IndexContainer>
        </>
    )
}

export default Equipo