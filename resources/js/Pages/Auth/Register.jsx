import { useEffect, useRef, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

import '../../../css/css0.css'

export default function Register() {
    const {url} = usePage().props.ziggy
    const RefFileImage = useRef(null)
    const [image,setImage]= useState(null)
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        image:'',
        password: '',
        password_confirmation: '',
    });
    const handleOnChangeImage=(e)=>{
        setData('image',e.target.files[0])
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        console.log(data);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />

            {/* ------------------------------------------------------------------------------------------- */}
            
    <div class="containers">

<div class="card o-hidden border-0 shadow-lg my-5s">
    <div class="card-bodys p-0s">
        <div class="rows">
            <div class="cols-lg-5 d-nones d-lg-block bg-register-image">
                <img src={url+'/storage/images/Sign up-amico.png'} alt="" width={'100%'} height={'100%'} />
            </div>
            <div class="cols-lg-7">
                <div class="p-5s">
                    <div class="text-centers">
                        <h1 class="h4 text-gray-900 mb-4s">Create an Account!</h1>
                    </div>
                    <form class="user" onSubmit={submit}>
                        {/* 
                        ----------------------------------------------------------------------
                        */}
                        <div class="profile-photo">
                                <input type="file"
                                className='d-nones'
                                onChange={handleOnChangeImage}
                                name = 'image'
                                ref={RefFileImage}
                                accept="image/*"/>

									<button type="button" class=" btn btn-icon edit-avatar " 
                                            onClick={() => RefFileImage.current.click()}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                                        
                                        </button>
                                        
                                    {!image?<img src={url+'/storage/images/Avatar-Profile.png'}
                                     alt="" class="avatar-photo" width={'100%'} height={'100%'} />
                                        :
									<img src={image}
                                     alt="" class="avatar-photo" width={'100%'} height={'100%'}/>}
									
								</div>
                        {/* 
                        ----------------------------------------------------------------------
                        */}
                        <div class="form-group ">
                    {/* <InputLabel htmlFor="name" className='pl-4 text-secondary' value="Name" /> */}
                    <InputError message={errors.name} className="mt-2 pl-4" />
                                <input type="text" class="form-controls form-controls-user" 
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                onChange={handleOnChange}
                                // required
                                    placeholder="Name" />
                            
                        </div>
                        
                        <div class="form-group">
                    {/* <InputLabel htmlFor="email" className='pl-4 text-secondary' value="Email" /> */}
                    <InputError message={errors.email} className="mt-2 pl-4" />
                            <input type="email" 
                            class="form-controls form-controls-user" 
                                placeholder="example@gmail.com "
                                id="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={handleOnChange}
                                required/>
                        </div>
                        {/* <div class="form-group "> */}
                            
                    {/* <InputLabel htmlFor="password" className='pl-4 text-secondary' value="Password" /> */}
                    {/* <InputError message={errors.password} className="mt-2 pl-4" />
                            <input type="password" 
                                class="form-controls form-controls-user"
                                placeholder="Password" 
                                id="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                />
                            </div> */}
                        {/* <div class="form-group "> */}
                    {/* <InputLabel htmlFor="password_confirmation" className='pl-4 text-secondary' value="confirmation password" /> */}
                    {/* <InputError message={errors.password_confirmation} className="mt-2 pl-4" />

                                <input type="password" 

                                class="form-controls form-controls-user"
                                id="password"
                                placeholder="confirmation password "
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={handleOnChange}
                                required
                />
                        </div> */}
                        <div class="form-group rows">
                                    <div class="cols-sm-6 mb-3 mb-sm-0">
                                        <InputError message={errors.password} className="mt-2 pl-4" />
                                <input type="password" 
                                    class="form-controls form-controls-user"
                                    placeholder="Password" 
                                    id="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="new-password"
                                    onChange={handleOnChange}
                                    required
                    />
                                    </div>
                                    <div class="cols-sm-6">
                                    <InputError message={errors.password_confirmation} className="mt-2 pl-4" />

                                    <input type="password" 

                                    class="form-controls form-controls-user"
                                    id="password"
                                    placeholder="confirmation password "
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="new-password"
                                    onChange={handleOnChange}
                                    required
                                    />
                                    </div>
                                </div>
                        <button  type="submit" class="btns btns-primary btns-user btns-block" disabled={processing}>
                                            
                                        {processing ? 
                                            <div className="cols overflow-hidden">
                                                <p className="text-truncate"><span className='typing-dots'>
                                                    <span>.</span><span>.</span><span>.</span><span>.</span></span></p>
                                            </div>
                                            :
                                            'Register Account'
                                            }
                        </button>

                    </form>
                    <hr/>
                    
                    <div class="text-centers">
                        <Link
                             href={route('login')} class="small" >Already have an account? Login!
                        </Link>
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
