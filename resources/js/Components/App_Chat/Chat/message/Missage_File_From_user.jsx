import DropDown_Message from "./DropDown_Message";

function Message_File_From_user() {
    return (
    <>
    <div className="message message-out">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                <img className="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
            </a>

            <div className="message-inner">
                <div className="message-body">
    <div className="message-content">
    <a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                                            <img className="avatar-img" src="assets/img/avatars/1.jpg" alt=""/>
         </a>
    <div className="message-text">

    <div className="row align-items-center gx-4">
        <div className="col-auto">
            <a href="#" className="avatar avatar-sm">
                <div className="avatar-text bg-white text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
            </a>
        </div>
        <div className="col overflow-hidden">
            <h6 className="text-truncate text-reset">
                <a href="#" className="text-reset">filename.json</a>
            </h6>
            <ul className="list-inline text-uppercase extra-small opacity-75 mb-0">
                <li className="list-inline-item">79.2 KB</li>
            </ul>
        </div>
    </div>

        </div>

                                                    {/* <!-- Dropdown --> */}
                                                    <DropDown_Message/>
    </div>
    </div>

<div className="message-footer">
    <span className="extra-small text-muted">08:45 PM</span>
</div>
</div>
</div>
    </> 
    );
}

export default Message_File_From_user;