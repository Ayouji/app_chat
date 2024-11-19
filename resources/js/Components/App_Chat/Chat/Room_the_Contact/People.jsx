import { Context_Data } from "@/CreatContexts";
import { useContext } from "react";

function People({user_auth , contact}) {
    
    const {Path_Asset}=useContext(Context_Data)
    return ( <>
                <div class="tab-pane fade show active" id="offcanvas-group-tab-members" role="tabpanel">
                            <ul class="list-group list-group-flush">
                                { <li class="list-group-item">
                                    <div class="row align-items-center gx-5">
                                        {/* <!-- Avatar --> */}
                                        <div class="col-auto">
                                            <a href="#" class="avatar avatar-online">
                                                <img class="avatar-img" src={Path_Asset+"storage/"+user_auth.image} alt=""/>
                                            </a>
                                        </div>
                                        {/* <!-- Avatar --> */}

                                        {/* <!-- Text --> */}
                                        <div class="col">
                                            <h5><a href="#">{user_auth.name}</a></h5>
                                            <p>online</p>
                                        </div>
                                        {/* <!-- Text --> */}

                                        {/* <!-- Owner --> */}
                                        {user_auth.pivot.is_Admin && (<div class="col-auto">
                                            <span class="extra-small text-primary">owner</span>
                                        </div>)}
                                        {/* <!-- Owner --> */}

                                        {/* <!-- Dropdown --> */}
                                        <div class="col-auto">
                                            <div class="dropdown">
                                                <a class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                                            Promote
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                                            Restrict
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li><hr class="dropdown-divider"/></li>
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                            Delete
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>}
{contact.map((itms)=>{
                                return <li class="list-group-item">
                                    <div class="row align-items-center gx-5">
                                        {/* <!-- Avatar --> */}
                                        <div class="col-auto">
                                            <a href="#" class={`avatar ${itms.is_active?'avatar-online':'avatar-offline'}`}>
                                                <img class="avatar-img" src={Path_Asset+"storage/"+itms.image} alt=""/>
                                            {/* <a href="#" class="avatar">
                                                <span class="avatar-text">O</span>
                                            </a> */}
                                            </a>
                                        </div>
                                        {/* <!-- Avatar --> */}

                                        {/* <!-- Text --> */}
                                        <div class="col">
                                            <h5><a href="#">{itms.name}</a></h5>
                                            <p>{itms.is_active?'online':'offline'}</p>
                                        </div>

                                        {itms.pivot.is_Admin ? (<div class="col-auto">
                                            <span class="extra-small text-primary">owner</span>
                                        </div>):''}
                                        {/* <!-- Text --> */}

                                        {/* <!-- Dropdown --> */}
                                        <div class="col-auto">
                                            <div class="dropdown">
                                                <a class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                                            Promote
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                                            Restrict
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li><hr class="dropdown-divider"/></li>
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                            Delete
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li> })}

                             
                            </ul>
                        </div>
            </> );

       
}

export default People;