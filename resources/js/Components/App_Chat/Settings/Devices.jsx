function Devices() {
    return ( <><div className="mt-8">
    <div className="d-flex align-items-center my-4 px-6">
        <small className="text-muted me-auto">Devices</small>

        <div className="flex align-items-center text-muted">
            <a href="#" className="text-muted small">End all sessions</a>

            <div className="icon icon-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            </div>
        </div>
    </div>

    <div className="card border-0">
        <div className="card-body py-3">

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <h5>Windows ⋅ USA, Houston</h5>
                            <p>Today at 2:48 pm ⋅ Browser: Chrome</p>
                        </div>
                        <div className="col-auto">
                            <span className="text-primary extra-small">active</span>
                        </div>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col">
                            <h5>iPhone ⋅ USA, Houston</h5>
                            <p>Yesterday at 2:48 pm ⋅ Browser: Chrome</p>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </div>

</div></> );
}

export default Devices;