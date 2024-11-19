function Storage() {
    return (<>
        <div className="mt-8">
            <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Storage</small>

                <div className="flex align-items-center text-muted">
                    <a href="#" className="text-muted small">Clear storage</a>

                    <div className="icon icon-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                    </div>
                </div>
            </div>

            <div className="card border-0">
                <div className="card-body py-2">
                    {/* <!-- Accordion --> */}
                    <div className="accordion accordion-flush" id="accordion-storage">
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordion-storage-1">
                                <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-storage-body-1" aria-expanded="false" aria-controls="accordion-storage-body-1">
                                    <div>
                                        <h5>Cache</h5>
                                        <p>Maximum cache size</p>
                                    </div>
                                </a>
                            </div>

                            <div id="accordion-storage-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-storage-1" data-parent="#accordion-storage">
                                <div className="accordion-body">
                                    <div className="row justify-content-between mb-4">
                                        <div className="col-auto">
                                            <small>2 GB</small>
                                        </div>
                                        <div className="col-auto">
                                            <small>4 GB</small>
                                        </div>
                                        <div className="col-auto">
                                            <small>6 GB</small>
                                        </div>
                                        <div className="col-auto">
                                            <small>8 GB</small>
                                        </div>
                                    </div>
                                    <input type="range" className="form-range" min="1" max="4" step="1" id="custom-range-1" />
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <div className="accordion-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5>Keep media</h5>
                                        <p>Photos, videos and other files</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="accordion-storage-check-1" />
                                            <label className="form-check-label" for="accordion-storage-check-1"></label>
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

export default Storage;