import { useState } from 'react'
import Link from 'next/link'

import LoginModal from './loginModal'

function Footer() {
    
    const [showModal, setShowModal] = useState('')

    let toggleModal = () => {
        console.log('toggle modal')
        $('#modal-login').modal('show')
    }

    return (
        <>
            <footer  className="footerLanding pt-4">
                <div  className="container-fluid text-center text-md-left">
                    <div  className="row">
                        <div  className="col-md-6 offset-md-1  mt-md-0 mt-3 mb-2">
                            <p  className="ml-2">MédicosSí, la plataforma donde encuentras profesionales de la salud
                                recomendados por sus propios pacientes, <b>¡ agenda tu cita con ellos en línea !</b>.</p>
                            {/* {{-- <p  className="mb-3 "> */}
                            <Link href = '#'><a className="anclaNone"><i  className="fab fa-whatsapp iconFooter"></i></a></Link>
                            <Link href = '#'><a className="anclaNone"><i  className="fab fa-google iconFooter"></i></a></Link>
                            <Link href = '#'><a className="anclaNone"><i  className="fab fa-facebook-f iconFooter"></i></a></Link>
                            {/* </p> --}} */}
                            <div  className="">
                                <img  className="imgFooter" src="/img/logo.png" alt="logotipo" />
                            </div>
                        </div>
                        <hr  className="clearfix w-100 d-md-none pb-3" />
                        <div  className="col-6 col-md-2 mb-md-0 mb-3">
                            <h6  className="font-weight-bold">Pacientes</h6>
                            <ul  className="listUl">
                                <li>
                                    <Link href = '#'><a  className="anclaNone" onClick = {() => $('#modal-login').modal('show')}>Ingresar</a></Link>
                                </li>
                                <li>
                                    <Link href = '#'><a className="anclaNone" href="{{route('specialtyList1',['typeSearch' => 'Médicos y Especialistas' ])}}">Buscar un especialista</a></Link>
                                </li>
                                <li>
                                    <Link href = '#'><a  className="anclaNone disabled00" href="{{route('tolist2',['typeSearch' => 'Centro Medico', 'categorialist' => 1 ])}}"  className="loginModal">Buscar centros médicos</a></Link>
                                </li>
                                <li>
                                    <Link href = '#'><a  className="anclaNone" href="{{route('specialtyList2',['typeSearch' => 'Dentistas' ])}}">Dentistas</a></Link>
                                </li>
                            </ul>
                        </div>
                        <div  className="col-6 col-md-2 mb-md-0 mb-3">
                            <h6  className="font-weight-bold">Profesionales</h6>
                            <ul  className="listUl">
                                <li>
                                    <a  className="anclaNone" href="#">Profesional de la salud</a>
                                </li>
                                <li>
                                    <a  className="anclaNone" href="#">Visitadores médicos</a>
                                </li>
                                <li>
                                    <a  className="anclaNone" href="{{ url('/planes') }}">Planes</a>
                                </li>
                                <li>
                                    {/* <a  className="anclaNone" href="#"></a> */}
                                    <a  className="anclaNone" href="{{route('register')}}">Registrarse</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div  className="py-2" style = {{backgroundColor: "#fff"}}>
                    <p  className=" text-center  mb-0">
                        <a href="#"  className="anclaNone"><i  className="fab fa-whatsapp iconFooter"></i></a>
                        {/* {{-- <a href="#"  className="anclaNone"><i  className="fab fa-google iconFooter"></i></a> --}} */}
                        <a href="https://www.linkedin.com/company/37895789/admin/" target="_blank"  className="anclaNone"><i  className="fab fa-linkedin-in iconFooter"></i></a>
                        <a href="https://www.facebook.com/Medicossi-1257110577724479/" target="_blank"  className="anclaNone"><i  className="fab fa-facebook-f iconFooter"></i></a>
                    </p>
                    {/* {{-- © 2018 Copyright:
                <a  className="anclaNone text-white" href="#"><img  className="imgFooter" src="{{asset('img/logo.png')}}" alt="logotipo">
                    </a> --}} */}
                </div>
                {/* {{-- <div  className="bg-azul text-center py-2">
                <a  className="anclaNone text-white" href="#">
                    <img  className="imgFooter" src="{{asset('img/logo.png')}}" alt="logotipo">
                </a>
                </div> --}} */}
            </footer>
            <LoginModal showModal = {showModal} />
        </>
    )
}

export default Footer