import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Navbar(props){
    // console.log('navbar init');
    const urls = [
        {url: 'index', text: 'Inicio'},
        {url: 'service', text: 'Servicios'},
        {url: 'nosotros', text: 'Nosotros'},
        {url: 'equipo', text: 'Equipo'},
        {url: 'contact', text: 'Contacto'},
        {url: 'plans', text: 'Planes'}
    ]
    const router = useRouter()
    const [landing, setLanding] = useState('')

    let setLandingActive = (url) => {
        console.log(url);
        setLanding(url);
    }
    useEffect(() => {
        console.log(router.pathname);
        // console.log(router.pathname.split('/'))
        let url = router.pathname.split('/')[1]
        if(url == '') setLanding('index')
        else setLanding(url)
        // console.log(landing);
    })
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link href = "/">
                        <a  className = 'navbar-brand'>
                            <img className="logo" src="/img/logo22.png" alt="logotipo" />
                        </a>
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            
                            { 
                                urls.map((item, index) => {
                                    return (
                                        <li className="nav-item mx-2" key = {index}>
                                            <Link href = {`/${item.url == 'index' ? "" : item.url}`}><a className={`nav-link ${landing == item.url ? "active2" : ""}`}>{item.text} </a></Link>
                                        </li>
                                    )
                                })
                            }
                            <li>
                                <div className="dropdown">
                                    <button onClick = {() => {}} className="btn btn-outline-azul dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Ingresar / Registrar
                                    </button>
                                    <div className={`dropdown-menu dropdown-menu-right`} aria-labelledby="dropdownMenu2">
                                        <a href="#" id="call_modal_login" className="dropdown-item btn" >Ingresar</a>
                                        <a href="/register" className="dropdown-item btn" >Registrar gratis</a>
                                    </div>
                                </div>
                            </li>
                            {/*<li className="nav-item mx-2">
                                <a className="nav-link" href="{{url('service')}}">Servicios </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="{{url('nosotros')}}">Nosotros</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="{{url('equipo')}}">Equipo</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link @if(Session::get('landing') == 5 ) active2 @endif" href="{{url('contacto')}}">Contacto</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link @if(Session::get('landing') == 6 ) active2 @endif" href="{{url('planes')}}">Planes</a>
                            </li>
                                */}
                            </ul>
                        </div> 
                    </nav>
                </header>
        </>
    )
}

export default Navbar