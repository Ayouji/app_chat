import Dropdown from "@/Components/Dropdown";
import { Context_Data } from "@/CreatContexts";
import { usePage } from "@inertiajs/react";
import { useContext } from "react";

function HeaderChat_Group({children, typingUser , DataRoom , Path_Asset , }) {
    const url = usePage().props.url
    const {ShowMemberinroom,DetaisGroup}=useContext(Context_Data)

    const activeUsersCount = DataRoom.users.filter(itm => itm.is_active).length;
    
    return ( <>
    
    <div className="chat-header border-bottom py-4 py-lg-7">
                            <div className="row align-items-center">

                        
                                
                        {/* <!-- Mobile: close --> */}

                        <div className="col-2 d-xl-none">
                <Dropdown.Link href='/Chats/rooms' 
                className="icon icon-lg text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline></svg>
            </Dropdown.Link>
        </div>
                                
        {/* <!-- Mobile: close --> */}

                                <div className="col-8 col-xl-12">
                                    <div className="row align-items-center text-center text-xl-start">
                                        <div className="col-12 col-xl-6">
                                            <div className="row align-items-center gx-5">
                                                <div className="col-auto">
                                                    <div className="avatar d-none d-xl-inline-block">
                                                        
                                <a href={Path_Asset+'storage/'+DataRoom.image} 
                                    data-fancybox="image" 
                                    >
                                                        <img className="avatar-img" src={Path_Asset+'storage/'+DataRoom.image} alt=""/>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="col overflow-hidden">
                                                    <h5 className="text-truncate">{DataRoom.titre}</h5>
                                                    <p className="text-truncate">
                                                        {DataRoom.users.length+1} members, {activeUsersCount+1} online</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 d-none d-xl-block">
                                            <div className="row align-items-center justify-content-end gx-6">
                                                <div className="col-auto">
                                                    <button type="button"
                                                    onClick={()=>DetaisGroup(DataRoom,true)}  
                                                    className="btn btn-icon icon icon-lg text-muted" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                    </button >
                                                </div>

                                                <div className="col-auto">
                                                    <div className="avatar-group">
                                                        {DataRoom.users.map((itm,i)=>{
                                                            if(i<=3){
                                                                return  <a href={Path_Asset+'storage/'+itm.image} className="avatar avatar-sm" data-fancybox="image">
                                                                <img className="avatar-img" src={Path_Asset+'storage/'+itm.image} alt="#"/>
                                                            </a>
                                                            }
                                                        })}

                                                        <button type="button" class="btn btn-icon avatar avatar-sm" 
                                                        onClick={()=>ShowMemberinroom(DataRoom,true)}>
                                                            <span class="avatar-text" data-bs-toggle="tooltip" data-bs-placement="bottom" title={`<strong>Add People</strong><p>Invite friends to group</p>`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2 d-xl-none text-end">
                                    <div className="dropdown">
                                        <a className="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="icon icon-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                            </div>
                                        </a>

                                        <ul className="dropdown-menu">
                                            <li>
                                                <button type="button"  className="dropdown-item" onClick={()=>ShowMemberinroom(DataRoom,true)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas-add-members" aria-controls="offcanvas-add-members">Add members</button>
                                            </li>
                                            <li>
                                                <button type="button" className="dropdown-item" 
                                                 onClick={()=>DetaisGroup(DataRoom,true)}  data-bs-toggle="offcanvas" data-bs-target="#offcanvas-more-group" aria-controls="offcanvas-more-group">More</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            </> );
}

export default HeaderChat_Group;