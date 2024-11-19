import { router, usePage } from "@inertiajs/react";
import ImageProfile from "../../Components/App_Chat/Profile/imageProfile";
import Logout from "../../Components/App_Chat/Profile/Logout";
import { useContext, useRef, useState } from "react";
import { Context_Data } from "@/CreatContexts";

function Profile() {
    const User = usePage().props.auth.user
    const{Path_Asset} = useContext(Context_Data)


    // ------------
    const inputFile = useRef(null)


const [UrlFile,setUrlFile] = useState(null)
// --------------------------------------------------
      const HandelAddFile=(event)=>{
          
          const url = URL.createObjectURL(event.target.files[0])
          setUrlFile(url)
          console.log('Url',url);
          const formData = new FormData();
          formData.append("ImageUp", event.target.files[0]);
            router.post(route('profile.ChangeImg'),formData)

      }
    //   ------------------------
    return ( 
    <>
       <div className="modal fade" id="modal-profile" tabIndex="-1" aria-labelledby="modal-profile" aria-hidden="true"  >
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down ">
                <div className="modal-content">

                    {/* <!-- Modal body --> */}
                    <div className="modal-body py-0 ">
                        {/* <!-- Header --> */}
                        <div className="profile modal-gx-n">
                            {/* Header image profile */}
                          <ImageProfile/>

                            <div className="profile-body">
                                <div className="avatar avatar-xl bg-secondary ">
                                    {/* IMage URL */}
                    {/* Image user
                     {UrlFile?
         
            <img className="avatar-img" src={UrlFile} alt="#"/>
            
            
            : <span className="avatar-text bg-primary" >

           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
           </span> } 
                    */}
                                    {UrlFile? <img className="avatar-img" src={UrlFile} alt="#"/>
                                    :
                                        <img className="avatar-img" src={`${Path_Asset}storage/${User.image}`} alt="#"/>}
                                    

                <div className="badge badge-lg badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>

                <input id="upload-chat-img" className="d-none" type="file" 
                
                onChange={HandelAddFile}
                ref={inputFile} 

                />
                <label className="stretched-label mb-0" htmlFor="upload-chat-img"></label>
                                </div>
                    {/* Name User */}
                                <h4 className="mb-1">{User.name}</h4>

                                <p>last seen 5 minutes ago</p>
                            </div>
                        </div>
                        {/* <!-- Header --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Location</h5>
                                        <p>Moroco, Fes</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        {/*         Email User        */}
                                        <h5>E-mail</h5>
                                        <p>{User.email}</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            {/* <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Phone</h5>
                                        <p>1-800-275-2273</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="btn btn-sm btn-icon btn-dark">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                        {/* <!-- List  --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row align-items-center gx-6">
                                    <div className="col">
                                        <h5>Active status</h5>
                                        <p>Show when you're active.</p>
                                    </div>

                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="profile-status" defaultChecked />
                                            <label className="form-check-label" htmlFor="profile-status"></label>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* <!-- List --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- List --> */}
                       <Logout > 
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                    {/* <Dropdown.Link href={route('logout')} className='btn btn-danger' method="post" as="button"  data-bs-dismiss="modal" aria-label="Close">
                                                Log Out
                                    </Dropdown.Link> */}
                                        <button type="submit" className='btn btn-danger' >
                                        Log Out
                                        </button>
                                
                            </li>
    </ul>
                       
                       </Logout>
                        {/* <!-- List --> */}
                    </div>
                    {/* <!-- Modal body --> */}

                </div>
            </div>
        </div>
    </>
     );
}

export default Profile;