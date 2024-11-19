import InputError from "@/Components/InputError";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import Swal from "sweetalert2";

function Update_Pass() {


    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => {
                
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'center',
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
                    title: 'Password changed successfully'
                  })
                reset()
            },
            onError: () => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (<>
        <div className="mt-8">
            <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Security</small> 
               
            </div>

            <div className="card border-0">
                <div className="card-body py-2">
                    {/* <!-- Accordion --> */}
                    <div className="accordion accordion-flush" id="accordion-security">
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordion-security-1">
                                <a href="#" className="accordion-button text-reset collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-security-body-1" aria-expanded="false" aria-controls="accordion-security-body-1">
                                    <div>
                                        <h5>Password</h5> 
                                      
                                        <p>Change your password</p>
                                          <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-success">Saved.</p>
                    </Transition>
                                    </div>
                                </a>
                            </div>

                            <div id="accordion-security-body-1" className="accordion-collapse collapse" aria-labelledby="accordion-security-1" data-parent="#accordion-security">
                                <div className="accordion-body">


            {/* ---Changer password---- */}

                                    <form action="#" autocomplete="on"   onSubmit={updatePassword}>
                                    <InputError message={errors.current_password} className="mx-4 my-2 text-danger" />
                                        <div className="form-floating mb-6">
                                            
                                            <input type="password" 
                                            className="form-control" 
                                            id="profile-current-password" 
                                            placeholder="Current Password" 
                                            
                                            autoComplete="current-password"
                                            ref={currentPasswordInput}
                                            value={data.current_password}
                                            onChange={(e) => setData('current_password', e.target.value)}
                                            />
                    

                                            <label for="profile-current-password">Current Password</label>


                                        </div>

                                        <InputError message={errors.password} className="mx-4 my-2 text-danger" />
                                        <div className="form-floating mb-6">
                                            <input type="password" 
                                            className="form-control" 
                                            id="profile-new-password"
                                             placeholder="New password" 
                                            
                                            ref={passwordInput}
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            autoComplete="new-password"
                        />
                            

                                            <label for="profile-new-password">New password</label>
                                        </div>

                                        <InputError message={errors.password_confirmation} className="mx-4 my-2 text-danger" />
                                        <div className="form-floating mb-6">

                                            <input type="password" 
                                            className="form-control"
                                            id="profile-verify-password" 
                                            placeholder="Verify Password" 
                                            
                                            autoComplete="new-password" 
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            />
                                          
                                            <label for="profile-verify-password">Verify Password</label>
                                        </div>
                                    <button type="submit" disabled={processing} className="btn btn-block btn-lg btn-primary w-100">Save</button>
                                   

                                

                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Switch --> */}
                        {/* <div className="accordion-item">
                            <div className="accordion-header">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5>Two-step verifications</h5>
                                        <p>Enable two-step verifications</p>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="accordion-security-check-1" />
                                            <label className="form-check-label" for="accordion-security-check-1"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Update_Pass;