import { usePage } from "@inertiajs/react";
import Logout from "../Profile/Logout";

function Profile() {
    const {user} = usePage().props.auth
    const {Path_Asset} = usePage().props
    return ( 
    <>
     <div className="card border-0">
    <div className="card-body">
        <div className="row align-items-center gx-5">
            <div className="col-auto">
                <div className="avatar">
                <a
															href={Path_Asset+'storage/'+user.image}

															data-fancybox="images"
                                                            
															>
                    <img src={Path_Asset+'storage/'+user.image} alt="#" className="avatar-img"/>

                    <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                    <input id="upload-profile-photo" className="d-none" type="file"/>
                    <label className="stretched-label mb-0" for="upload-profile-photo"></label>
                </a>
                </div>
            </div>
            <div className="col">
                <h5>{user.name}</h5>
                <p>{user.email}</p>
            </div>
            <div className="col-auto">
                
            <Logout > 
                <button type="submit"  className="text-muted btn btn-icon">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </div>
                </button>
                
        </Logout > 
            </div>
        </div>
    </div>
                                    </div>
    </> );
}

export default Profile;