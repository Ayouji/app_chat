function Charge_Attede() {
    const rand0 = Number(Math.ceil(Math.random()*3+9));
    // alert(rand0)
    const rand = Number(Math.ceil(Math.random()*6+6));
    const rand1 = Number(Math.ceil(Math.random()*10+2));
    // alert(rand)

    return ( 
    <>
    
                                        <div className="card border-0 text-reset">
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar">
                                                            <svg className="avatar-img placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                                                <title>Placeholder</title>
                                                                <rect width="100%" height="100%" fill="#868e96"></rect>
                                                            </svg>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <h5 className="placeholder-glow w-100 mb-0">
                                                                <span className={"placeholder col-"+rand0}></span><br/>
                                                            </h5>
                                                        </div>

                                                        <div className="placeholder-glow">
                                                            <span className={"placeholder col-"+rand}></span><br />
                                                            <span className={"placeholder col-"+rand1}></span><br />
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </div>
    </> );
}

export default Charge_Attede;