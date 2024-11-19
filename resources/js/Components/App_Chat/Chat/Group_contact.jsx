import { Link, usePage } from "@inertiajs/react";

function Group_Contact({setActiveComponent}) {
    const url = usePage().props.url
    return ( 
    <>
     {/* <!-- Sidebar --> */}
     <aside className="sidebar bg-light">
                <div className="tab-content h-100" role="tablist">
                   

                    {/* <!-- Chats --> */}
                    <div className="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
                        <div className="d-flex flex-column h-100 position-relative">
                            <div className="hide-scrollbar">

                                <div className="container py-8">
                                    {/* <!-- Title --> */}
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Chats</h2>
                                    </div>

                                    {/* <!-- Search --> */}
                                    <div className="mb-6">
                                        <form action="#">
                                            <div className="input-group">
                                                <div className="input-group-text">
                                                    <div className="icon icon-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    </div>
                                                </div>

                                                <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..."/>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Chats --> */}
                                    <div className="card-list">
                                        {/* <!-- Card --> */}
                                        {/* <a href="#" className="card border-0 text-reset"> */}
                                        <button className="card border-0 text-reset" onClick={() => {setActiveComponent('component2');}}>
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-online">
                                                            <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <h5 className="me-auto mb-0">William Wright</h5>
                                                            <span className="text-muted extra-small ms-2">12:45 PM</span>
                                                        </div>

                                                        <div className="d-flex align-items-center">
                                                            <div className="line-clamp me-auto">
                                                                Hello! Yeah, I'm going to meet my friend of mine at the departments stores now.
                                                            </div>

                                                            <div className="badge badge-circle bg-primary ms-5">
                                                                <span>3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>     {/*<!-- .card-body --> */}

                                             <div className="card-footer">
                                                <div className="row align-items-center gx-4">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-xs">
                                                            <img className="avatar-img"src={url+'/storage/images/logo01.png'}alt="Bootstrap Community"/>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <h6 className="mb-0">Bootstrap Community</h6>
                                                    </div>

                                                    <div className="col-auto">
                                                        <div className="avatar-group">
                                                            <div className="avatar avatar-xs">
                                                                <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                            </div>

                                                            <div className="avatar avatar-xs">
                                                                <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                            </div>

                                                            <div className="avatar avatar-xs">
                                                                <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                            </div>

                                                            <div className="avatar avatar-xs">
                                                                <span className="avatar-text">+5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 
                                           </div>
                                        
                                        </button>
                                        {/*<!-- .row --> */}
                                            {/* <!-- .card-footer --> */}
                                        {/* <!-- Card --> */}
                                        {/* <Link
                            href="#"
                            onClick={() => setActiveComponent('component1')}
                        >
                        </Link> */}
                                        {/* <!-- Card --> */}
                                        <button className="card border-0 text-reset" onClick={() => {setActiveComponent('component1');}}>
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-online">
                                                            <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <h5 className="me-auto mb-0">Ollie Chandler</h5>
                                                            <span className="text-muted extra-small ms-2">08:45 PM</span>
                                                        </div>

                                                        <div className="d-flex align-items-center">
                                                            <div className="line-clamp me-auto">
                                                                Hello! Yeah, I'm going to meet friend of mine at the departments stores now.
                                                            </div>

                                                            <div className="badge badge-circle bg-primary ms-5">
                                                                <span>3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           </div> {/* <!-- .card-body --> */}
                                        </button>
                                        {/* <!-- Card --> */}

                                        {/* <!-- Card --> */}
                                        <a href="chat-empty.html" className="card border-0 text-reset">
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-online">
                                                            <img src={url+'/storage/images/logo01.png'} alt="#" className="avatar-img"/>
                                                        </div>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <h5 className="me-auto mb-0">Elise Dennis</h5>
                                                            <span className="text-muted extra-small ms-2">08:35 PM</span>
                                                        </div>

                                                        <div className="d-flex align-items-center">
                                                            <div className="line-clamp me-auto">
                                                                is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           </div> {/* <!-- .card-body --> */}
                                        </a>
                                        {/* <!-- Card --> */}

                                        <a href="chat-direct.html" className="card border-0 text-reset">
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
                                                                <span className="placeholder col-5"></span>
                                                            </h5>
                                                        </div>

                                                        <div className="placeholder-glow">
                                                            <span className="placeholder col-12"></span>
                                                            <span className="placeholder col-8"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>{/*<!-- .card-body --> */}
                                        </a>
                                        {/* <!-- Card --> */}

                                        {/* <!-- Card --> */}
                                        {/* <a href="chat-direct.html" className="card border-0 text-reset">
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
                                                            <h5 className="placeholder-glow  w-100  mb-0">
                                                                <span className="placeholder col-5"></span>
                                                            </h5>
                                                        </div>

                                                        <div className="placeholder-glow">
                                                            <span className="placeholder col-12"></span>
                                                            <span className="placeholder col-8"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                             </div>
                                        </a> */}
                                        {/* <!-- Card --> */}
                                    </div>
                                    {/* <!-- Chats --> */}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </aside>
    </> 
    );
}

export default Group_Contact;