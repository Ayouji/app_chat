import ImageProfile from "@/Components/App_Chat/Profile/imageProfile";
import InputError from "@/Components/InputError";
import InputSucces from "@/Components/InputSucces";
import { router, useForm, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import '../../bootstrap'
import Swal from "sweetalert2";

function Modal_Add_Friend({}) {
        // ---------------------------ADD Contact or friends------------------------------
    // alert(auth.user.id)
    // 	id	Status_Chat	titre	Channel_id	creator_id
    // chats_id	status_invite	receiver_id	Sender_id	
    const {user} = usePage().props.auth
    const emailRef =useRef('');
    const MessageRef = useRef('');
    const [etat,setEtat] = useState(false)
    const { data, setData, post, processing, errors,setError, reset, get }= useForm({
        email : '',
        // Sender : user,
        // receiver_id : 1
    })
    // -------------------------------
    

        const ADD_CONTACT_FRIENDS=async (event)=>{
//         onCancelToken: cancelToken => {},
            //   onCancel: () => {}, 

           const dt = await event.preventDefault();
            // console.log(data);
            // alert(errors.email)
             post(route('Contacts.Add_Contact'),
            {
                onSuccess: (responce) => {
                    // alert('success')
                    // setEtat()
                    console.log(responce.props);
                //     router.reload({ only: ['users'] })
                //    alert("User sucessfully Invitated ")
                //    event.reset()
                setError('email','danger')
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 7000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: responce.props.flash.session_Email_Invit.icon,
                    title: responce.props.flash.session_Email_Invit.message
                  })
                  
    // Swal.bindClickHandler()

    // Swal.mixin({
    //   toast: true,
    // }).bindClickHandler('data-swal-toast-template').fire({
    //         icon: 'error',
    //         title: responce.props.flash.session_Email_Invit.message
    //       })

                
                }
          }
                )
            // event.target.reset();
            
          console.log(dt);
        }
        
    //--------------------------------------------------------- 
    return ( 
    <>

{/* <!-- Modal: Invite --> */}
        <div className="modal fade" id="modal-invite" tabIndex="-1" aria-labelledby="modal-invite" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
                <div className="modal-content">

                    {/* <!-- Modal: Body --> */}
                    <div className="modal-body py-0">
                        {/* <!-- Header --> */}
                        <div className="profile modal-gx-n">
                        <ImageProfile/>

                            <div className="profile-body">
                                <div className="avatar avatar-lg">
                                    <span className="avatar-text bg-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                    </span>
                                </div>

                                <h4 className="fw-bold mb-1">Invite your friends</h4>
                                <p style={{fontSize: "16px"}}>Send invitation links to your friends</p>
                            </div>
                        </div>
                        {/* <!-- Header --> */}

                        <hr className="hr-bold modal-gx-n my-0"/>

                        {/* <!-- Form --> */}
                        <div className="modal-py">
                            <form className="row gy-6" 
                            // -------------------------Submit-------------------
                            onSubmit={ADD_CONTACT_FRIENDS}
                            // -------------------------Submit-----${errors.email && 'border border-'+errors.email}--------------
                            >
                                <div className="col-12">
                                    
                                <InputSucces message={etat} className="mt-2 "></InputSucces>
                                    <label htmlFor="invite-email" className="form-label text-muted">E-mail</label>

                                    <input type="email" 
                                    className={`form-control form-control-lg `} 
                                    id="email" 
                                    placeholder="name@example.com"
                                    name="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)} 
                                    // onChange={handleSetData}
                                    // data-swal-toast-template="#my-template"
                                    />
                                    {/* <InputError message={errors.email} className="mt-2"></InputError> */}
                                </div>

                                <div className="col-12 my-10">
                                    {/* <label 
                                    htmlFor="invite-message" 
                                    className="form-label text-muted">Message</label> */}
                                    <dir className=""></dir>
                                    
                                </div>


                        {/* <!-- Button -------------------> */}
                        <div className="modal-py">
                            <button  className="btn btn-lg btn-primary w-100 d-flex align-items-center"
                            //  data-bs-toggle={etat === true?"modal":""}
                             data-bs-target="#invite-modal"
                            
                             >
                                Send

                                <span className="icon ms-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </span>
                            </button>
                        </div>
                            </form>
                        </div>
                        {/* <!-- Form --> */}

                        
                        {/* <!-- Button --> */}
                    </div>
                    {/* <!-- Modal: Body --> */}

                </div>
            </div>
        </div>
    </> );
}

export default Modal_Add_Friend;