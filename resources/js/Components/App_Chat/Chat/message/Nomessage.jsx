function NoMessag() {
    return ( 
    <>
    
    {/* <!-- Chat: Content --> */}
    <div className="chat-body hide-scrollbar flex-1 h-100">
        <div className="chat-body-inner h-100">

            <div className="d-flex flex-column h-100 justify-content-center">
                <div className="text-center mb-6">
                    <span className="icon icon-xl text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                </div>

                <p className="text-center text-muted">No messages yet, <br/> start the conversation!</p>
            </div>

        </div>
    </div>
    {/* <!-- Chat: Content --> */}
    
    </> 
    );
}

export default NoMessag;