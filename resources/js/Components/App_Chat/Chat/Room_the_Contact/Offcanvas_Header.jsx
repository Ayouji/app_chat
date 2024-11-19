function Offcanvas_Header({changeStatu,data_Group}) {
    const activeUsersCount = data_Group.users.filter(itm => itm.is_active).length;
    return (    <>
                    <div className="offcanvas-header py-4 py-lg-7 border-bottom">
                    <button type="button" className="btn btn-icon icon icon-lg text-muted"  onClick={changeStatu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="visibility-xl-invisible overflow-hidden text-center">
                        <h5 className="text-truncate">{data_Group.titre}</h5>
                        <p className="text-truncate">{data_Group.users.length+1} members, {activeUsersCount+1} online</p>
                    </div>

                    {/* <!-- Dropdown --> */}
                    <div className="dropdown">
                        {/* <a className="icon icon-lg text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                        </a>

                        <ul className="dropdown-menu">
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    Edit
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center">
                                    Mute
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <a href="#" className="dropdown-item d-flex align-items-center text-danger">
                                    Leave
                                    <div className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                    </div>
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                </> );
}

export default Offcanvas_Header;