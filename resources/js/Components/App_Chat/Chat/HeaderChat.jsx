import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
import { Audio } from "../SVG/Svg_Type";

function HeaderChat({children, typingUser , RecordingUser , DataRoom , Path_Asset , IsShowUserMsg}) {
    const {url , auth} = usePage().props
    return ( <>
    
    {/* <!-- Chat: Header --> */}
    <div className="chat-header border-bottom py-4 py-lg-7">
    <div className="row align-items-center">

{/* <!-- Mobile: close --> */}
<div className="col-2 d-xl-none">
            <Dropdown.Link href='/Chats/rooms' 
                className="icon icon-lg text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </Dropdown.Link>
        </div>
{/* <!-- Mobile: close --> */}

<div className="col-8 col-xl-12">
    <div className="row align-items-center text-center text-xl-start">
        {/* <!-- Title --> */}
        <div className="col-12 col-xl-6">
            <div className="row align-items-center gx-5">
                <div className="col-auto">
                    <div className="avatar d-none d-xl-inline-block">
                        <img className="avatar-img" src={Path_Asset+'storage/'+DataRoom.users[0].image} alt=""/>
                    </div>
                </div>

                <div className="col overflow-hidden">
                    <h5 className="text-truncate">{DataRoom.users[0].name}</h5>
                    {typingUser && <p className="text-truncate ">{typingUser.name} is typing<span className='typing-dots'>
                        <span>.</span><span>.</span><span>.</span></span></p>}
                        {RecordingUser &&  <p className="text-truncate ">{RecordingUser.name+' '}
                        is Recording <Audio/> <span className='typing-dots'>
                        <span>.</span><span>.</span><span>.</span></span></p>}
                        
                    {/* {IsShowUserMsg && <p className="text-truncate ">{IsShowUserMsg.name} Vues...</p>} */}
                </div>
            </div>
        </div>
        {/* <!-- Title --> */}

        {/* <!-- Toolbar --> */}
        <div className="col-xl-6 d-none d-xl-block">
            <div className="row align-items-center justify-content-end gx-6">
                <div className="col-auto">
                    <a href="#" className="icon icon-lg text-muted" data-offcanvas="info">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </a>
                </div>

                <div className="col-auto">
                    <div className="avatar-group">
                        <a href="#" className="avatar avatar-sm" data-bs-toggle="modal" data-bs-target="#modal-user-profile">
                            <img className="avatar-img" src={Path_Asset+'storage/'+DataRoom.users[0].image} alt="#"/>
                        </a>

                        <a href="#" className="avatar avatar-sm" data-bs-toggle="modal" data-bs-target="#modal-profile">
                            <img className="avatar-img" src={Path_Asset+'storage/'+auth.user.image} alt="#"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Toolbar --> */}
    </div>
</div>
{/* <!-- Content --> */}

{/* <!-- Mobile: more --> */}
<div className="col-2 d-xl-none text-end">
    <a href="#" className="icon icon-lg text-muted" data-offcanvas="info">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
    </a>
</div>
{/* <!-- Mobile: more --> */}

</div>
</div>
            </> );
}

export default HeaderChat;