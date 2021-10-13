import IndexContainer from '../components/indexContainer'
import NuevosPanels from '../components/landing/nuevosPanels'

function Nosotros(){
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
                <br/>
                <section>
                    <h2 className="text-center fadeTitle font-weight-bold mt-5">Nosotros</h2>
                    {/* {{-- <div className="title text-center textGray3 mt-5">
                        Nosotros
                    </div> --}} */}
                    <div className="mb-5 container text-justify">
                        <h5 className="grey-text  mx-auto mb-5">
                            <b>MédicosSí</b> es una plataforma online donde profesionales de la salud y pacientes convergen para tener acceso y proporcionar servicios médicos.
                        </h5>
                        <div className="row">
                            <div className="col-lg-7 text-center text-lg-left">
                                <img className="img-fluid" src="/img/landing/puente.png" alt="Sample image" />
                            </div>
                            <div className="col-lg-5 fontPNosotros">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <p className="grey-text">
                                            Cada usuario sera provisto de herramientas funcionales según su naturaleza
                                        </p>

                                        <ul className="ml-3">
                                            <li className="my-2">
                                                <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                                <b>Paciente</b>
                                            </li>
                                            <li className="my-2">
                                                <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                                <b>Profesional de la salud</b>
                                            </li>
                                            <li className="my-2">
                                                <i className="fa fa-circle circle-list" aria-hidden="true"></i>
                                                <b>Centro médico</b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <h4 className="h5Nosotros text-center">¡Tu salud es nuestra prioridad!</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="row">
                            <div className="col-12">
                                <h4 className="text-center h5Nosotros">¡Tu salud es nuestra prioridad!</h4>
                            </div>
                        </div> --> */}
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 text-center align-middle align-self-center">
                            <p className="text-center p_doctores text-nowrap"> ¿No te has registrado?</p>
                            <a href="{{route('medico.create" className="btn btn-outline-verde">REGISTRATÉ GRATIS</a>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-left ">
                            <img className="" width="80%" src="/img/landing/monitor.png" alt="Grupo médicos" />
                        </div>
                    </div>
                    <div className="container marginTopSection">
                        <h4 className="text-titulos text-center mb-4">
                            Beneficios de ser parte de <b>MédicosSí</b> 
                        </h4>
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-agenda" role="tab" aria-controls="agenda">Agenda</a>
                                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-asistente" role="tab" aria-controls="asistente">Asistente</a>
                                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-citas" role="tab" aria-controls="citas">Citas</a>
                                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-ingresos" role="tab" aria-controls="ingresos">Ingresos</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active textGrisDark" id="list-agenda" role="tabpanel" aria-labelledby="list-agenda-list">
                                        <div className="row">
                                            <div className="col-12 col-md-7">
                                                <p className="mt-2 ">
                                                    En <b>MédicosSí</b> tendrás una agenda 100% personalizable donde encontrarás un
                                                    apartado para programar tus eventos personales y agendar citas para tus
                                                    pacientes de una forma rápida y organizada.
                                                </p>
                                                <p>
                                                    <b>MI AGENDA</b> tiene un sistema de filtrado que te permitirá buscar según el
                                                    tipo de cita, tipo de pago, nombre o cédula del paciente.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <img src="/img/landing/agenda.png" alt="Agenda" className="imgTabs" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade textGrisDark" id="list-asistente" role="tabpanel" aria-labelledby="list-asistente-list">
                                        <div className="row">
                                            <div className="col-12 col-md-7">
                                                <p className="mt-2 ">

                                                    Si eres un médico <a href="{{route('medico.create"><b>registrado</b></a> en
                                                    nuestra plataforma, tendrás la opción de incorporar un <b>ASITENTE</b> que podrá
                                                    realizar tareas dependiendo de la configuración dada por ti en el panel de
                                                    <b>permisos</b>.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <img src="/img/landing/asistente.png" alt="Asistente" className="imgTabs" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade textGrisDark" id="list-citas" role="tabpanel" aria-labelledby="list-citas-list">
                                        <div className="row">
                                            <div className="col-12 col-md-7">

                                                <p className="mt-2">
                                                    Al estar <a href="{{route('medico.create"><b>registrado</b></a> en
                                                    <b>MédicosSí</b> como profesional de la salud, tus pacientes podrán encontrarte, agregarte y
                                                    agendar citas según el horario establecido por ti.
                                                </p>
                                                <p className="">
                                                    Para tus pacientes que acuden de forma recurrente a tu consultorio podrás tú o
                                                    tu asistente agendar la proxima cita, reservando ese día y horario para ese
                                                    paciente en específico, permitiendote administrar tu agenda muy fácil.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <img src="/img/landing/citas.png" alt="Citas" className="imgTabs" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade textGrisDark" id="list-ingresos" role="tabpanel" aria-labelledby="list-ingresos-list">
                                        <div className="row">
                                            <div className="col-12 col-md-7">
                                                <p className="mt-2">
                                                    Sabemos lo importante que es llevar el control de tus ingresos de forma fácil y
                                                    eficiente es por eso que en MedicosSi hemos desarrollado para
                                                    ti el <b>MODULO DE INGRESOS </b> en donde podrás llevar control de tus citas;
                                                    filtrar por fecha determinada, semana, día o mes; y filtrando por el
                                                    estado de la cita ya sea citas pagadas, pendientes por pagar (aseguradoras)
                                                    y otras más.
                                                </p>
                                                <p className="mt-2 ">
                                                    Lo hacemos fácil para ti para que te dediques a lo más
                                                    importante que son tus pacientes.
                                                </p>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <img src="/img/landing/ingresos.png" alt="ingresos" className="imgTabs" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="marginYSection">
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className="mb-0"> 
                                <span className="font_lg">Gestiona todas tus citas</span>
                                </p>
                                <p> 
                                <span className="font_sm ">en un solo lugar</span>
                                </p>
                                <a href="{{route('medico.create" className="btn btn-outline-azul btn-lg">
                                    ¡Comienza tu prueba gratis por 30 días!
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* <!-- <section>
                        <div className="boxBanner marginTopSection">
                            <img width="100%" height="320px" src="/img/landing/bg-nostros.jpg" alt="registrate">
                            <a href="{{url("/register")}}" className="btn btn-blue-white buttonNosotros2">
                                ¡Comienza tu prueba gratis por 30 días!
                            </a>
                        </div>
                    </section> --> */}

                    {/* @include('landing.planes_nuevos') */}
                    <NuevosPanels />
                    <div className="text-center my-2 my-md-5">
                        <img className="logoSmall" src="/img/logo.png" alt="logo" />
                    </div>
                </section>
                {/* @include('landing.footerlanding') */}
            </IndexContainer>
        </>
    )
}

export default Nosotros