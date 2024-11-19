import InputError from "@/Components/InputError";
import { Context_Data } from "@/CreatContexts";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

function Account() {
    const {Path_Asset,ChangeModeSpinner ,ModeDark , SetModeDark , spinner}= useContext(Context_Data)
    const {mustVerifyEmail, status , }=usePage().props
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'),{
            
            onSuccess: () => {
                
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'success',
                    title: 'Saved.'
                  })
                reset()
            }
        });
    };


    // ---------Switsh------------
    
    const HandlChangerMode=()=>{
        ChangeModeSpinner(1000)
        SetModeDark((ModeDark==='light')?'dark':(ModeDark==='dark')?'night':'light')
        let scheme = localStorage.getItem('color-scheme');
        ( scheme === 'light' )?localStorage.setItem("color-scheme", 'dark'):( scheme === 'dark' )?localStorage.setItem("color-scheme", 'night'):localStorage.setItem("color-scheme", 'light')


        window.location.reload()
    }
//    alert(ModeDark)
useEffect(()=>{

    SetModeDark((localStorage.getItem('color-scheme')==='light')?'light':(localStorage.getItem('color-scheme')==='dark')?'dark':'night')
    
},[])
 
    return (
        <>
            <div className="mt-8">
                <div className="d-flex align-items-center mb-4 px-6">
                    <small className="text-muted me-auto">Account</small>
                </div>

                <div className="card border-0">
                    <div className="card-body py-2">
                        {/* <!-- Accordion --> */}
                        <div className="accordion accordion-flush" id="accordion-profile">
                            <div className="accordion-item">
                                <div className="accordion-header" id="accordion-profile-1">
                                    <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-1" aria-expanded="false" aria-controls="accordion-profile-body-1">
                                        <div>
                                            <h5>Profile settings</h5>
                                            <p>Change your profile settings</p>
                                        </div>
                                    </a>
                                </div>

                                <form id="accordion-profile-body-1" 
                                className="accordion-collapse collapse" 
                                aria-labelledby="accordion-profile-1" data-parent="#accordion-profile"
                                onSubmit={submit}
                                >

                                    <div className="accordion-body">
                                        
                                <InputError className="mt-2 mx-2 text-danger" message={errors.name} />
                                        <div className="form-floating mb-6">
                                            <input type="text" 
                                            className="form-control" 
                                            id="profile-name" 
                                            placeholder="Name" 
                                                                
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            isFocused
                                            autoComplete="name"
                                          />

                                            
                
                                            <label for="profile-name">Name</label>
                                        </div>

                                        <InputError className="mt-2 mx-2 text-danger" message={errors.email} />
                                        <div className="form-floating mb-6">
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            id="profile-email" 
                                            placeholder="Email address" 
                                            
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            autoComplete="username"

                                            />
                                            <label for="profile-email">Email</label>
                                        </div>



                                        

                                        {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="btn btn-icone text-primary"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                     
                    <div className="m-2 font-medium text-sm text-green-600 dark:text-green-400">
                A new verification link has been sent to your email address.
            </div>
                        )}
                    </div>
             )} 



                                        <button type="submit" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                    </div>
                                </form>
                            </div>

                            {/* <div className="accordion-item">
                                <div className="accordion-header" id="accordion-profile-2">
                                    <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-profile-body-2" aria-expanded="false" aria-controls="accordion-profile-body-2">
                                        <div>
                                            <h5>Connected accounts</h5>
                                            <p>Connect with your accounts</p>
                                        </div>
                                    </a>
                                </div>

                                <div id="accordion-profile-body-2" className="accordion-collapse collapse" aria-labelledby="accordion-profile-2" data-parent="#accordion-profile">
                                    <div className="accordion-body">
                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-twitter" placeholder="Twitter" />
                                            <label for="profile-twitter">Twitter</label>
                                        </div>

                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-facebook" placeholder="Facebook" />
                                            <label for="profile-facebook">Facebook</label>
                                        </div>

                                        <div className="form-floating mb-6">
                                            <input type="text" className="form-control" id="profile-instagram" placeholder="Instagram" />
                                            <label for="profile-instagram">Instagram</label>
                                        </div>

                                        <button type="button" className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                    </div>
                                </div>
                            </div> */}

                            {/* <!-- Switch --> */}
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5>Appearance</h5>
                                            <p>Choose light or dark theme</p>
                                        </div>
                                        <div className="col-auto">
                                          {
                                          spinner?
                    
                    <div class="text-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                    
                    :  <button className="btn bt-icon switcher-btn text-reset" type="button" title="Themes" onClick={HandlChangerMode}>
                                                
                    { ModeDark==='dark'?
                                                <div className="switcher-icon switcher-icon-dark icon icon-lg " data-theme-mode="dark">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                                </div>
                                                :ModeDark==='light'?
                                                <div className="switcher-icon switcher-icon-light icon icon-lg" data-theme-mode="light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                                </div>

                                                :
                                                                    <div className="switcher-icon switcher-icon-light icon icon-lg" data-theme-mode="light">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg> </div>
                }                                
                            
                                            </button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default Account;