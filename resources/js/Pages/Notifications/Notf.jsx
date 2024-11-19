import formatDate from "@/Components/App_Chat/FormatData";
import { Context_Data } from "@/CreatContexts";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import '../../bootstrap'
import Swal from "sweetalert2";
function Notif({status}) {
    // alert(status)
    const userId = usePage().props.auth.user.id 
    // --------------------get invittation-----------------------
    const {AuthUserId,Invitation_data , Path_Asset}=useContext(Context_Data)
    // ---------------------------------------------------------
    const [invitDt,setinvitDt]=useState([...Invitation_data])
    console.log(invitDt);

  
// ---------------- private channel 
useEffect(()=>{
    window.Echo.private(`Notification.${userId}`)
    .subscribed((users) => {
        // this.setState({ activeUsers: users });
        console.log('I m here');
    })
    .listen("SendNotification", (event) => {
        setinvitDt([...invitDt,event])
        Invitation_data.push(event)
            })
            }
            ,[])
            
    return ( 
    
    <>
            {/* <!-- Notifications - Notices --> */}
            
<aside className="sidebar brd-Right ms-2 me-5">
    <div className="tab-content h-100" role="tablist">
                    <div className="tab-pane fade h-100  show active" id="tab-content-notifications" role="tabpanel">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar">
                                <div className="container py-8">

                                    {/* <!-- Title --> */}
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Notifications</h2>
                                    </div>

                                    {/* <!-- Today --> */}
                                    <div className="card-list">
                                        {/* <!-- Title --> */}
                                        <div className="d-flex align-items-center my-4 px-6">
                                            <small className="text-muted me-auto">Today</small>
                                            <a href="#" className="text-muted small">Clear all</a>
                                        </div>
                                        {/* <!-- Title --> */}

                                        {/* <!-- Card Invitation --> */}
                                        {invitDt &&
                                        invitDt.map((itm,i)=>{
           
                                    return <div className="card border-0 mb-5" key={i}>
                                            <div className="card-body">

                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        {/* <!-- Avatar --> */}
                                                        <a href="#" className="avatar">
                                                            <img className="avatar-img" src={Path_Asset+'storage/'+itm.users_sender.image} alt=""/>

                                                            <div className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <h5 className="me-auto mb-0">
                                                                <a href="#">{itm.users_sender.name}</a>
                                                            </h5>
                                                            <span className="extra-small text-muted ms-2">{formatDate(itm.created_at)}</span>
                                                        </div>

                                                        <div className="d-flex">
                                                            <div className="me-auto">Send you a friend request.</div>

                                                            <div className="dropdown ms-5">
                                                                <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                </a>
                                                                {/* <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item" href="#">Show less often</a></li>
                                                                    <li><a className="dropdown-item" href="#">Hide</a></li>
                                                                </ul> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer">
                                                <div className="row gx-4">
                                                    <div className="col">
                                                        <Link to='#' className="btn btn-sm btn-soft-primary w-100">Hide</Link>
                                                    </div>
                                                    <div className="col">
                                                        <Link href={route('Invit.Accepte',{'id':itm.users_sender.id})} className="btn btn-sm btn-primary w-100">Confirm</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                        {/* <!-- Card --> */}

                                        {/* <!-- Card --> */}
                                        {/* <div className="card border-0 mb-5">
                                            <div className="card-body">

                                                <div className="row gx-5">
                                                    <div className="col-auto"> */}
                                                        {/* <!-- Avatar --> */}
                                                        {/* <a href="#" className="avatar">
                                                            <span className="avatar-text bg-warning">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                            </span>

                                                            <div className="badge badge-circle bg-warning border-outline position-absolute bottom-0 end-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-gift"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <h5 className="me-auto mb-0">
                                                                <a href="#">Congratulations!</a>
                                                            </h5>
                                                            <span className="extra-small text-muted ms-2">08:45 PM</span>
                                                        </div>

                                                        <div className="d-flex">
                                                            <div className="me-auto">You win 5GB free disk space.</div>

                                                            <div className="dropdown ms-5">
                                                                <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                                                </a>
                                                                <ul className="dropdown-menu">
                                                                    <li><a className="dropdown-item" href="#">Show less often</a></li>
                                                                    <li><a className="dropdown-item" href="#">Hide</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div> */}
                                        {/* <!-- Card --> */}
                                    </div>
                                    {/* <!-- Today --> */}

                                    {/* <!-- Yesterday --> */}
                                    
{/* ................................................................................ */}
                                    {/* <!-- Card --> */}
                                    </div>
                            </div>
                        </div>
                    </div></div>
            </aside>
        {/* </Authenticated> */}

    </> 
    );
}

export default Notif;