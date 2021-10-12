import { useState, useEffect } from 'react'

function LoginModal(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let toggleModal = () => {
        console.log('toggle modal');
        $('#modal-login').modal('show');
    }
    
    useEffect(() => {
        console.log('show modal changed.');
    }, [props.showModal])

    return (

        <div  className={`modal fade`} id="modal-login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div  className="modal-dialog modal-dialog-centered" role="document">
                    <div  className="modal-content">
                        <div  className="alert alert-warning" role="alert" id="alert" style = {{display: "none", margin: "10px"}}>
                            {/* <button type="button"  className="close" onClick="$(this).parent().hide()"><span aria-hidden="true">&times;</span></button> */}
                            <button type="button"  className="close" onClick = {() => $(this).parent.hide()} ><span aria-hidden="true">&times;</span></button>
                            <div id="text-alert">
                            </div>
                        </div>
                        <div  className="alert alert-success" role="alert" id="alert-success-confirm" style = {{display: "none", margin: "10px"}}>
                            <button type="button"  className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <div>
                                <h5>Bienvenid@</h5>
                                <p id="text-success-confirm"></p>
                            </div>
                        </div>
                        <div  className="modal-header bg-azul" id="colorModal">
                            {/* <!-- <h5  className="modal-title" id="exampleModalLongTitle">Iniciar sesión</h5> --> */}
                            <button type="button"  className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i  className="fas fa-times"></i></span>
                            </button>
                        </div>
                        <div  className="modal-body">
                            {/* <!-- <div  className="row">
                                <div  className="col-12 text-center">
                                    <img width="80%" height="80%" src="{{asset('img/Medicossi-Marca original-01.png')}}">
                                </div>
                            </div> --> */}
                            <div  className="row">
                                <div  className="col-12">
                                    <h4  className="text-center">Iniciar sesión</h4>
                                </div>
                                <div  className="col-12">
                                    <h6  className="text-muted text-center"> con tu red social</h6>
                                </div>
                                <div  className="my-2 col-12 col-sm-6">
                                    <a href="/redirect/google"  className="google-btn btn btn-block">
                                        <span  className="social-icons">
                                            <img src="/img/google-hangouts.png" />
                                        </span>
                                        Google
                                    </a>
                                </div>
                                <div  className="my-2 col-12 col-sm-6">
                                    <a href="/redirect/facebook"  className="facebook-btn btn btn-block">
                                        <span  className="social-icons">
                                            <img src="/img/facebook.png" />
                                        </span>
                                        Facebook
                                    </a>
                                </div>
                                <div  className="col-12 box">
                                    <p  className="separator">
                                        <span>
                                            o
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div  className="row mt-2">
                                <div  className="col-12">
                                    <div  className="form-group">
                                        <input type="email"  className="form-control text-center" id="emailLogin" 
                                        aria-describedby="emailHelp" placeholder="email" value="{{ request()->email }}" 
                                        // name="email" autoComplete="off" onKeyDown="if (event.keyCode == 13) document.getElementById('login').click()" />
                                        value = {email}
                                        name="email" autoComplete="off" onChange = {(event) => {if (event.keyCode == 13) document.getElementById('login').click()}} />
                                    </div>
                                </div>
                                <div  className="col-12">
                                    <div  className="form-group">
                                        {/* <input type="password"  className="form-control text-center" id="passwordLogin" aria-describedby="emailHelp" placeholder="password" name="password" autoComplete="off" onKeyDown="if (event.keyCode == 13)
                                    document.getElementById('login').click()" /> */}
                                        <input type="password"  className="form-control text-center" id="passwordLogin" 
                                        aria-describedby="emailHelp" placeholder="password" name="password" autoComplete="off" 
                                        value = {password}
                                        onChange = {(event) => {if (event.keyCode == 13) document.getElementById('login').click()}} />
                                    </div>
                                </div>
                                {/* {{Form::hidden('solicitud_cita',null,['id'=>'solicitud_cita'])}} */}
                                {/* {{Form::hidden('agregar_lista',null,['id'=>'agregar_lista'])}} */}
                            </div>
                            <div  className="row">
                                <div  className="col-12">
                                    {/* <button id="login" type="button"  className="btn btn-azul btn-block" onclick="login()" onClick = {() => login()}>Iniciar */}
                                    <button id="login" type="button"  className="btn btn-azul btn-block" onClick = {() => login()}>Iniciar
                                        sesión</button>
                                </div>
                                <div  className="col-12">
                                    @csrf
                                    <a href="{{route('restore_pass')}}"  className=" btn btn-link text-azul btn-block mt-2">¿Olvidó su
                                        contraseña?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoginModal