import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import '../../../css/css0.css'

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const {url} = usePage().props.ziggy
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />


            
            
    <div className="containers">

<div className="rows justify-content-centers">

    <div className="cols-xl-10 cols-lg-12 cols-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
                <div className="rows">
                    <div className="cols-lg-6 d-nones d-lg-block bg-password-image">

                        
                <img src={url+'/storage/SVG/Fingerprint-cuate.svg'} alt="" width={'100%'} height={'100%'} />
                    </div>
                    <div className="cols-lg-6">
                        <div className="p-5s">
                            <div className="text-centers">
                                <h1 className="h4 text-gray-900 mb-2s">Forgot Your Password?</h1>
                                <p className="mb-4s">We get it, stuff happens. Just enter your email address below
                                    and we'll send you a link to reset your password!</p>
                            </div>
                            
            {status && <div className="m-4 font-medium text-sm text-green-600 dark:text-green-400 text-success">{status}</div>}
                            <form className="user" onSubmit={submit}>
                                
                             <InputError message={errors.email} className="m-2 text-danger" />
                                <div className="form-group">
                                    <input type="email" 
                                        className="form-controls form-controls-user"
                                        id="exampleInputEmail" 
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."
                                        
                                        name="email"
                                        value={data.email}
                                        isFocused={true}
                                        onChange={onHandleChange}
                                        
                                        />
                                </div>
                                <button type='submit' disabled={processing} className="btns btns-primary btns-user btns-block">
                                    Reset Password
                                </button>
                            </form>
                            <hr/>
                            <div className="text-centers">
                                <Link className="small" href={route('register')}>Create an Account!</Link>
                            </div>
                            <div className="text-centers">
                                <Link className="small" href={route('login')}>Already have an account? Login!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
        </>
    );
}
