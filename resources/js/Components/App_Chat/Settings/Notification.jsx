function Notification() {
    return (<>
        <div className="mt-8">
            <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Notifications</small>
            </div>

            {/* <!-- Accordion --> */}
            <div className="card border-0">
                <div className="card-body py-2">
                    <div className="accordion accordion-flush" id="accordion-notifications">
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordion-notifications-1">
                                <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-notifications-body-1" aria-expanded="false" aria-controls="accordion-notifications-body-1">
                                    <div>
                                        <h5>Message</h5>
                                        <p>Set custom notifications for users</p>
                                    </div>
                                </a>
                            </div>

                            <div id="accordion-notifications-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-notifications-1" data-parent="#accordion-notifications">
                                <div className="accordion-body">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5>Text</h5>
                                            <p>Show text in notifications</p>
                                        </div>

                                        <div className="col-auto">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" id="accordion-notifications-check-1" />
                                                <label className="form-check-label" for="accordion-notifications-check-1"></label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5>Sound</h5>
                                        <p>Enable sound notifications</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="accordion-notifications-check-3" />
                                            <label className="form-check-label" for="accordion-notifications-check-3"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5>Browser notifications</h5>
                                        <p>Enable browser notifications</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="accordion-notifications-check-2" checked />
                                            <label className="form-check-label" for="accordion-notifications-check-2"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Notification;