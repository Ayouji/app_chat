const { default: ImageProfile } = require("./imageProfile");

function User_Profile() {
    return ( 
    <>
    {/* <!-- Modal: User profile --> */}
        <div className="modal fade" id="modal-user-profile" tabIndex="-1" aria-labelledby="modal-user-profile" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
                <div className="modal-content">

                    {/* <!-- Modal body --> */}
                    <div className="modal-body py-0">
                        {/* <!-- Header --> */}
                        <div className="profile modal-gx-n">
                            
                            <ImageProfile/>

                            <div className="profile-body">
                                <div className="avatar avatar-xl">
                                    <img className="avatar-img" src="./assets/img/avatars/9.jpg" alt="#"/>

                                    <a href="#" className="badge badge-lg badge-circle bg-primary text-white border-outline position-absolute bottom-0 end-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </a>
                                </div>

                                <h4 className="mb-1">William Wright</h4>
                                <p>last seen 5 minutes ago</p>
                            </div>
                        </div>
                        {/* <!-- Header --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Location</h5>
                                        <p>USA, Houston</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>E-mail</h5>
                                        <p>william@studio.com</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Phone</h5>
                                        <p>1-800-275-2273</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- List --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Notifications</h5>
                                        <p>Enable sound notifications</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="user-notification-check"/>
                                            <label className="form-check-label" for="user-notification-check"></label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- List --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <a href="#" className="text-reset">Send Message</a>
                            </li>

                            <li className="list-group-item">
                                <a href="#" className="text-danger">Block User</a>
                            </li>
                        </ul>
                        {/* <!-- List --> */}
                    </div>
                    {/* <!-- Modal body --> */}

                </div>
            </div>
        </div>
    </> );
}

export default User_Profile;