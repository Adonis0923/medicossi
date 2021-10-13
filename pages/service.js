import IndexContainer from '../components/indexContainer'
import NuevosPanels from '../components/landing/nuevosPanels'

function Service () {
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
                <!-- End Google Tag Manager (noscript) --> */}

                {/* @include('landing.navbarlanding') */}
                <br/>
                <section>
                    {/* <!-- Servicios Paciente --> */}
                    <div className="marginTopSection mx-1 mx-md-5">
                        <div className="col-12 title textGray3 text-center mb-3">
                            ¡<b>MédicosSí</b> la mejor red de profesionales de la salud de México!
                        </div>
                        {/* <!--   <div className="title-service text-center mb-3">
                            Como paciente Podrás  
                        </div> --> */}
                        <div className="row">
                            <div className="col-md-5">
                                <img className="img-fluid rounded" src="/img/landing/paciente_servicio.png" alt="Sample image" />
                            </div>
                            <div className="col-md-7">
                                <ul className="list-group list-group-flush">
                                    <div className="titulos_servicios mb-3">
                                        Como <b>PACIENTE</b> Podrás:
                                    </div>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Encontrar a <b>médicos</b> calificados.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Ser guiado a su cita a través de <b>google map</b>.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Agendar tu cita en linea en <b>tiempo real</b> con tu <b>médico</b>.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Recibir <b>notificación y recordatorios</b> de tus citas.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        <b>Calificar</b> el servicio recibido
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Llevar un <b>historial médico</b> que podrás ir llenando para ti y tu familia.
                                    </li>
                                </ul>
                                <br/>
                                <a className="btn btn-outline-verde mx-md-2" href="/patient_register_view">Registrarme como paciente</a>
                                <a className="btn btn-outline-azul wow pulse mt-2 mt-md-0" data-target="#vervideo_paciente" data-toggle="modal" href="" data-wow-delay="2s">Ver video</a>
                            </div>
                        </div>
                    </div>
                    <div className="marginTopSection mx-1 mx-md-5">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <ul className="list-group list-group-flush">
                                    <div className="titulos_servicios mb-3">
                                        Como <b>MÉDICO</b> podrás:
                                    </div>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Gestionar tu <b>agenda</b> en tiempo real.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Ser promovido como <b>especialista</b> en el directorio online.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        <b>Recibir citas agendadas</b> por medio de internet y medios tradicionales.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Podrás contar con la ayuda de un asistente con permisos editables (ej. confirmación de citas, impresión de expecientes)
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Llevar control de sus ingresos, citas atendidas, por atender, etc.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Dirigir a tus pacientes a tu consultorio mediante <b>google maps</b>.
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Crear <b>notas y expedientes</b> digitales. <span className="text-muted">(proximamente)</span>
                                    </li>
                                    <li className="list-service grey-text text-justify">
                                        <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                        Hacer video consultas <span className="text-muted">(proximamente)</span>
                                    </li>
                                </ul>
                                <div className="mt-3">
                                    <a className="btn btn-outline-verde mx-2" href="/medico.create">Registrar gratis</a>
                                    <a className="btn btn-outline-azul wow pulse" data-target="#vervideo_medico" data-toggle="modal" href="">Ver video</a>
                                </div>
                            </div>

                            <div className="col-12 col-lg-5 d-none d-lg-block text-center">
                                <img className="img-fluid" src="/img/landing/medico_servicio.png" alt="Sample image"/>
                            </div>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-12 col-md-6">
                            <img className="" width="100%" src="/img/landing/medicos.png" alt="Grupo médicos"/>
                        </div>
                        <div className="col-12 col-md-6 text-center align-middle align-self-center">
                            <p className="text-center p_doctores text-nowrap"> ¿No te has registrado?</p>
                            <a href="/medico.create" className="btn btn-outline-verde">REGISTRATÉ GRATIS</a>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
                {/* <VideoModal /> */}
                <NuevosPanels />
            </IndexContainer>            
        </>
    )
}

export default Service;