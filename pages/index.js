import IndexContainer from '../components/indexContainer'

function Index(){
    return (
        <>
            <IndexContainer>
                <section style={{position: 'relative', marginTop: '0px'}}>
                    <div className="" style={{position: 'relative', marginTop: '80px'}}>
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <p className="text-center text_banner ">
                                    ¿Buscas un <span className="text-azul bold_import">Profesional de la salud</span> calificado y con buenas <span className=""> recomendaciones</span>?
                                </p>
                                <div className="text-center px-2">
                                    <a href="/home" className="btn btn-outline-verde responsive-btn wow bounceIn btn-lg" data-wow-duration="2s">
                                        Encuéntralo
                                    </a>
                                </div>

                            </div>
                            <div className="col-5 d-none d-md-block">
                                <img width="80%" className = "" src = "/img/landing/medico22.png" alt="bg" />
                            </div>
                            <div className="col-12 text-center">
                                <div className=" mt-4 mt-md-1">
                                    <a className="anclasClick my-sm-3 my-md-0" href="{{route('tolist2', ['search' => 'Pediatra', 'typeSearch' => 'Especialidad Medica'])}}"> Pediatra</a> -
                                    <a className="anclasClick my-sm-3 my-md-0" href="{{route('tolist2', ['search' => 'Cardiólogo', 'typeSearch' => 'Especialidad Medica'])}}"> Cardiólogo</a> -
                                    <a className="anclasClick my-sm-3 my-md-0" href="{{route('tolist2', ['search' => 'Ginecología', 'typeSearch' => 'Especialidad Medica'])}}"> Ginecología</a> -
                                    <a className="anclasClick my-sm-3 my-md-0" href="{{route('tolist2', ['search' => 'Medicina General', 'typeSearch' => 'Especialidad Medica'])}}"> Medicina General</a> -
                                    <a className="anclasClick my-sm-3 my-md-0" href="{{route('tolist2', ['search' => 'Nutriólogo', 'typeSearch' => 'Especialidad Medica'])}}"> Nutriólogo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="servicios" className="mt-2 servi-responsive">
                    <br/>
                    <div className="mx-md-5">
                        <div className="row">
                            <div className="col-6 col-sm">
                                <a className="anclaNone disabled00" href="{{route('tolist2',['typeSearch' => 'Centro Medico', 'categorialist' => 1 ])}}">
                                    <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                        <img className="imgCircle" src="/img/servicios/centros1.jpg" alt="Búsqueda" />
                                    </div>
                                    <p className="titleCircle">
                                        Centros médicos y hospitales <br/>
                                        <span className="text-muted">(Proximamente)</span>
                                    </p>
                                </a>
                            </div>
                            <div className="col-6 col-sm">
                                <a className="anclaNone " href="{{route('specialtyList1',['typeSearch' => 'Médicos y Especialistas' ])}}">
                                    <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                        <img className="imgCircle" src="/img/servicios/medicos1.jpg" alt="Búsqueda" />
                                    </div>
                                    <p className="titleCircle">
                                        Médicos y especialistas
                                    </p>
                                </a>
                            </div>
                            <div className="col-6 col-sm">
                                <a className="anclaNone " href="{{route('specialtyList2',['typeSearch' => 'Dentistas' ])}}">
                                    <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                        <img className="imgCircle" src="/img/servicios/dentista1.jpg" alt="Búsqueda" />
                                    </div>
                                    <p className="titleCircle">
                                        Dentistas
                                    </p>
                                </a>
                            </div>
                            {/* {{-- <div className="col-6 col-sm">
                                <a className="anclaNone " href="{{route('specialtyList1',['typeSearch' => 'Médicos y Especialistas' ])}}">
                            <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                <img className="imgCircle" src="/img/servicios/medicos1.jpg" alt="Búsqueda">
                            </div>
                            <p className="titleCircle">
                                Pediatras.
                            </p>
                            </a>
                        </div> --}} */}
                        <div className="col-6 col-sm">
                            <a className="anclaNone " href="{{route('specialtyList3',['typeSearch' => 'Medicina Alternativa' ])}}">
                                <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                    <img className="imgCircle" src="/img/servicios/alternativa1.jpg" alt="Búsqueda" />
                                </div>
                                <p className="titleCircle">
                                    Medicina alternativa
                                </p>
                            </a>
                        </div>
                        <div className="col-6 col-sm">
                            <a className="anclaNone " href="{{route('specialtyList4',['typeSearch' => 'Terapeutas y Nutricion' ])}}">
                                <div className="boxImgCircle wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                    <img className="imgCircle" src="/img/servicios/terapeuta1.jpg" alt="Búsqueda" />
                                </div>
                                <p className="titleCircle">
                                    Terapeutas y nutrición
                                </p>
                            </a>
                        </div>
                    </div>
                    </div>
                </section>
                <section id="nosotros" className="px-3 my-5">
                    <div className="row">
                        <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
                            <img className="logoPublicidad" src="img/landing/pc2.png" alt=""/>
                        </div>
                        <div className="col-12 col-md-5 pl-0 pr-md-5 d-flex align-items-center">
                            <div className="row">
                                <div className="col-12 d-flex align-items-center">
                                    <h2 className="my-0 wow fadeIn">
                                        El sitio donde encuentras <br />
                                        los médicos más confiables de México.
                                    </h2>
                                </div>
                                <div className="col-12 mt-3 wow bounceInRight">
                                    <p className="text-muted">
                                        Busca por Estado, Ciudad, nombre del especialista, especialidad, y más..
                                    </p>
                                    <a href="{{url('/home')}}" className="btn btn-md btn-green my-2 my-md-0">Buscar</a>
                                    <a href="{{url('/register')}}" className="btn btn-md btn-outline-verde">Registrarme</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {{-- <img className="boxPublicidad wow fadeIn" src="img/Publicidad.jpg" alt="Publicidad"> --}} */}
                </section>
                <section className="px-5 marginYSection">
                    <br />
                    <div className="row mt-3 px-5">
                        <div className="col-12 col-sm-6 col-md-4 wow bounceInLeft">
                            <i className="fas fa-search mb-3 text-azul fa-3x"></i>
                            <h5 className="font-weight-bold">Búsquedas</h5>
                            <p className="text-muted ">
                                <span className="title">83%</span> de las personas buscan información sobre salud en internet
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 wow fadeIn">
                            <i className="fas fa-calendar-check mb-3 text-azul fa-3x"></i>
                            <h5 className="font-weight-bold">En linea</h5>
                            <p className="text-muted">
                                <span className="title">92%</span> de las personas prefieren agendar citas médicas desde su móvil u ordenador
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 wow bounceInRight">
                            <i className="fas fa-user-check mb-3 text-azul fa-3x"></i>
                            <h5 className="font-weight-bold">Garantizados</h5>
                            <p className="text-muted ">
                                <span className="title">91%</span> de las personas que han usado MédicosSí lo recomiendan
                            </p>
                        </div>
                    </div>
                </section>
                <section id="" className="mb-5 marginYSection">
                    <div className="title text-center">
                        <img className="logoSmall" src="/img/logo.png" alt="" />
                    </div>
                    <div className="title text-center">
                        El directorio médico más confiable de México disponible para ti
                    </div>
                    <br />
                    <div className="row text-center ingresar-section">
                        <div className="col-12 col-sm-4 my-3 my-md-0">
                            <h5 className="hgH5">¿Eres centro médico?</h5>
                            <button id="center1" className="btn  btn-outline-verde wow bounceInLeft">Sí, quiero ingresar</button> <br/>
                            <a className="anclasClick wow bounceIn mb-2" data-target="#vervideo_medico" data-toggle="modal" href="">Ver video</a> <br/>
                        </div>
                        <div className="col-12 col-sm-4 my-3 my-md-0">
                            <h5 className="hgH5">¿Eres médico?</h5>
                            <button id="medico1" className="btn  btn-outline-verde wow bounceIn mb-2">Sí, quiero ingresar</button> <br/>
                            <a className="anclasClick wow bounceIn" data-target="#vervideo_medico" data-toggle="modal" href="">Ver video</a> <br/>
                        </div>
                        <div className="col-12 col-sm-4 my-3 my-md-0">
                            <h5 className="hgH5">¿Eres paciente?</h5>
                            <button id="paciente1" className="btn  btn-outline-verde wow bounceInRight mb-2">Sí, quiero ingresar</button> <br/>
                            <a className="anclasClick wow bounceIn" data-target="#vervideo_paciente" data-toggle="modal" href="">Ver video</a> <br/>
                        </div>
                    </div>
                    {/* @include('home.modal_ver_video') */}
                </section>
                <section className="marginYSection">
                    <div className="title text-center">
                        <span className="">
                            ¿Buscas un médico con buenas recomendaciones de sus pacientes? <br className="d-block d-md-none" />
                            <a href="{{url('/home" className="btn btn-lg btn-outline-verde wow bounceIn my-2 my-md-0" data-wow-duration="1s" data-wow-delay="1s">Si, buscar</a>
                        </span>
                    </div>
                </section>
            </IndexContainer>    
        </>
    )
}

export default Index;