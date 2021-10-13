
function VideoModal(){
    return (
        <>
            <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" id="vervideo_medico" role="dialog" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-azul">
                            <h5 className="modal-title text-white" id="exampleModalLabel">
                                VIDEO INFORMATIVO
                            </h5>
                            <button aria-label="Close" className="close text-white" data-dismiss="modal" type="button">
                                <span aria-hidden="true">
                                    <i className="fas fa-times">
                                    </i>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container text-justify">

                                <div className="embed-responsive embed-responsive-16by9">
                                    {/* <iframe  className="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/tZpmkkNhqqk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right">
                                        <button className="btn btn-outline-cancelar btn-sm" data-dismiss="modal" type="button">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div aria-hidden="true" aria-labelledby="exampleModalLabel" className="modal fade" id="vervideo_paciente" role="dialog" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-azul">
                            <h5 className="modal-title text-white" id="exampleModalLabel">
                                VIDEO INFORMATIVO
                            </h5>
                            <button aria-label="Close" className="close text-white" data-dismiss="modal" type="button">
                                <span aria-hidden="true">
                                    <i className="fas fa-times">
                                    </i>
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container text-justify">

                                <div className="embed-responsive embed-responsive-16by9">
                                    {/* <iframe  className="ytplayer" width="560" height="315" src="https://www.youtube.com/embed/cSseVigqcv8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                                </div>
                                <div className="row">
                                    <div className="col-12 text-right">
                                        <button className="btn btn-outline-cancelar btn-sm" data-dismiss="modal" type="button">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoModal