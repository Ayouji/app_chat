import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import '../../../css/css0.css'
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });
    
    const {url} = usePage().props.ziggy
    // --------------------------------------------------
    // const img = usePage().props.base_url
    // console.log(img);
// -------------------------------------------

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {

        e.preventDefault();

        // setTimeout(location.reload(true)  ,100000)
        post(route('login'),{
            onSuccess: (response) => {
                // window.location.reload();
            }});
        
    };
    // useEffect(()=>{
    //     if (window.aut) {
            
    //     }
    // },[])

    return (
        < >
            <Head title="Log in" />

            {status && <div className="mb-4s font-medium text-sm text-green-600">{status}</div>}

           
            

    <div class="containers">

<div class="rows justify-content-centers">
            
            <div class="cols-xl-10 cols-lg-12 cols-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5s">
                    <div class="card-bodys p-0s">
                        <div class="rows">
                            <div class="cols-lg-6 d-nones d-lg-block bg-login-image">
                                
                <img src={url+'/storage/images/Tablet login-cuate.png'} alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div class="cols-lg-6">
                                <div class="p-5s">
                                    <div class="text-centers">
                                        <h1 class="h4 text-gray-900 mb-4s">Welcome Back!</h1>
                                    </div>
                                    <form class="user" onSubmit={submit}>
                                        <div class="form-group">
                                    <InputLabel htmlFor="email" value="Email" className="text-secondary pl-4"/>
                                        <InputError message={errors.email} className="mt-2 pl-4" />
                                            <input 
                                             class="form-controls form-controls-user"
                                             placeholder="example@gmail.com " 
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={handleOnChange}/>

                                        </div>
                                        <div class="form-group">
                                            
                                    <InputLabel htmlFor="email" value="Password" className="text-secondary pl-4"/>
                                        <InputError message={errors.password} className="mt-2 pl-4"  />
                                            <input type="password" 
                                            
                                            id="password"
                                            name="password"
                                            value={data.password}
                                            autoComplete="current-password"
                                            onChange={handleOnChange}
                                            class="form-controls form-controls-user"
                                            placeholder="Password"/>
                                            
                                            <InputError message={errors.password} className="mt-2" />

                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="form-check-input custom-control-input"
                                                 name="remember" value={data.remember} onChange={handleOnChange}/>
                                                <span class="custom-control-labels">Remember
                                                    Me</span>
                                            </div>
                                        </div>
                                        
                                        <button  type="submit" class="btns btns-primary btns-user btns-block" disabled={processing}>
                                            
                                        {processing ? 
                                            <div className="cols overflow-hidden">
                                                <p className="text-truncate">is Login<span className='typing-dots'>
                                                    <span>.</span><span>.</span><span>.</span></span></p>
                                            </div>
                                            :
                                            'Login'
                                            }
                                        </button>

                                    </form>
                                    <hr/>
                                    <div class="text-centers">
                                        {canResetPassword && (
                                            <Link
                                                href={route('password.request')} class="small" >
                                                Forgot your password?
                                            </Link>
                                        )}
                                    </div>
                                    <div class="text-centers">
                                        <Link
                                                href={route('register')} class="small" >
                                                Create an Account!
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

</div></div>
        </>
    );
}
