
function NuevosPanels() {
    return (
        <>
            <section className="pricing py-5">
                <h2 className="text-center  font-weight-bold mb-5">Planes</h2>
                <div className="@guest px-5 @endguest">
                    <div className="row">
                        {/* <!-- Free Tier --> */}
                        <div className="col-lg-4 px-0 px-md-2">
                            <div className="card mb-5 mb-lg-0 ">
                                <div className="card-body d-flex flex-column altura_card">
                                    <h5 className="card-title text-muted text-uppercase text-center">Agenda</h5>
                                    <h6 className="card-price text-center">$0<span className="period">USD /mes</span></h6>
                                    <hr />
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>Acceso a tu información 24/7
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Control de tu agenda en tiempo real
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Recordatorio de citas a pacientes
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Perfil profesional completo
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Pacientes guiados por geolocalización
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-block text-titulos text-center disabled00 mt-auto align-items-end">GRATIS</a>
                                    {/* <!-- <a href="#" className="btn btn-block btn-azul text-uppercase align-self-end mt-auto">Suscribir</a> --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Plus Tier --> */}
                        <div className="col-lg-4 px-0 px-md-2">
                            <div className="card mb-5 mb-lg-0 borde-azul">
                                <div className="card-body d-flex flex-column altura_card">
                                    <h5 className="card-title text-muted text-uppercase text-center">Profesional</h5>
                                    <h6 className="card-price text-center">$20<span className="period">USD /mes</span></h6>
                                    <hr/>
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>Acceso a tu información 24/7
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Control de tu agenda en tiempo real
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Recordatorio de citas a pacientes
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Perfil profesional completo
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Pacientes guiados por geolocalización
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Redes sociales visibles
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Teléfonos de contacto visibles
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá tener usuario tipo asistente con permisos editables
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá compartir su agenda online en tiempo real para nuevas citas
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá ser calificado y obtener más pacientes
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Módulo de control de ingresos
                                        </li>
                                    </ul>
                                    {/* @if(Session::has('landing'))
                                        <a href="{{ route('medico.create') }}" className="btn btn-block btn-azul text-uppercase mt-auto align-items-end">Prueba gratis 30 días</a>
                                    @else
                                        @if(Auth::check() and Auth::user()->hasRole('medic'))
                                            @if(Auth::user()->plan->where('pivot.condition','Prueba')->count() == 0)
                                                <a className="btn btn-azul mt-auto align-items-end" href="{{route('trial',['plan' => $plan_profesional[0] ])}}">Prueba Gratis</a>
                                            @elseif(Auth::user()->plan->first() != 'Plan Agenda')
                                                <button type="button" className="btn btn-azul btn-block mt-auto align-items-end" data-toggle="modal" data-target="#exampleModal11">
                                                    Contratar
                                                </button>
                                            @else
                                                <a href="{{route('plan_profesional_contract',\Hashids::encode(Auth::user()->id))}}" className="btn btn-azul btn-block mt-auto align-items-end">Contratar</a>
                                            @endif
                                        @endif
                                    @endif */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Pro Tier --> */}
                        <div className="col-lg-4 px-0 px-md-2">
                            <div className="card  ">
                                <div className="card-body d-flex flex-column altura_card">
                                    <h5 className="card-title text-muted text-uppercase text-center">Platino</h5>
                                    <h6 className="card-price text-center">$39<span className="period">USD /mes</span></h6>
                                    <hr/>
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>Acceso a tu información 24/7
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Control de tu agenda en tiempo real
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Recordatorio de citas a pacientes
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Perfil profesional completo
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Pacientes guiados por geolocalización
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Redes sociales visibles
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Teléfonos de contacto visibles
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá tener usuario tipo asistente con permisos editables
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá compartir su agenda online en tiempo real para nuevas citas
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Podrá ser calificado y obtener más pacientes
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Módulo de control de ingresos
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Expedientes digitales
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Notas médicas configurables
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Impresión de recetas y estudios de laboratorio
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fas fa-check"></i>
                                            </span>
                                            Respaldo en la nube de toda su información
                                        </li>
                                    </ul>
                                    {/* @if(Session::has('landing'))
                                        <a href="{{ route('medico.create') }}" className="btn btn-block btn-azul text-uppercase mt-auto align-items-end disabled00" style="opacity: 0.5;">Prueba gratis 30 días <br> <span style="font-size: 10px;">(próximamente)</span></a>
                                    @else
                                        @if(Auth::check() and Auth::user()->hasRole('medic'))
                                            @if(Auth::user()->plan->where('pivot.condition','Prueba')->count() == 0)

                                            <a href="{{ route('medico.create') }}" className="btn btn-block btn-azul text-uppercase mt-auto align-items-end disabled00" style="opacity: 0.5;">Prueba gratis 30 días <br> <span style="font-size: 10px;">(próximamente)</span></a>
                                            
                                                <!-- <a className="btn btn-azul mt-auto align-items-end disabled00" style="opacity: 0.5;" href="{{route('trial',['plan' => $plan_profesional[0] ])}}">Prueba Gratis</a> -->
                                            @elseif(Auth::user()->plan->first() != 'Plan Agenda')

                                            <a href="{{ route('medico.create') }}" className="btn btn-block btn-azul mt-auto align-items-end disabled00" style="opacity: 0.5;">Contratar <br> <span style="font-size: 10px;">(próximamente)</span></a>
                                            
                                                <!-- <button type="button" className="btn btn-azul btn-block disabled00 mt-auto align-items-end disabled00" style="opacity: 0.5;" disabled data-toggle="modal" data-target="#exampleModal33">
                                                    Contratar
                                                </button> -->
                                            @else

                                            <a href="{{ route('medico.create') }}" className="btn btn-block btn-azul mt-auto align-items-end disabled00" style="opacity: 0.5;">Contratar <br> <span style="font-size: 10px;">(próximamente)</span></a>
                                            
                                                <!-- <a href="{{route('plan_platino_contract',\Hashids::encode(Auth::user()->id))}}" className="btn btn-azul btn-block mt-auto align-items-end disabled00" style="opacity: 0.5;">Contratar</a> -->
                                            @endif
                                        @endif
                                    @endif                   */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NuevosPanels