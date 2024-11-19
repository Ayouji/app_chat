function Message_is_typing() {
    return ( 
    <>
       {/* <!-- Message --> */}
       <div className="message">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-online avatar-responsive">
                                            <img className="avatar-img" src="assets/img/avatars/7.jpg" alt=""/>
                                        </a>

                                        <div className="message-inner">
                                            <div className="message-body">
                                                <div className="message-content">
                                                    <div className="message-text">
                                                        <p>William is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span></p>
                                                        <br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
        </div>
    </>
     );
}

export default Message_is_typing;