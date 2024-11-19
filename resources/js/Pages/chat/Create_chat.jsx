import Button_DP from "@/Components/App_Chat/Create_Chate_Group/Button_Details_People";
import Button_start_Chat from "@/Components/App_Chat/Create_Chate_Group/Button_start_Chat";
import Contact_Add_in_Group from "@/Components/App_Chat/Create_Chate_Group/Contact_Add_in_Group";
import Detais_Group from "@/Components/App_Chat/Create_Chate_Group/Details_Group";
import { Context_Data } from "@/CreatContexts";
import { router, useForm } from "@inertiajs/react";
import { useContext, useRef, useState } from "react";
import Swal from "sweetalert2";

function Creat_Chate() {
    const { Liste_data_des_Contact, AuthUserId } = useContext(Context_Data);
    console.log(Liste_data_des_Contact);

    const { post, data, setData, processing } = useForm({
        Status_Chat: 'group',
        titre: '',
        image: '',
        Description: '',
        contacts: []
    });

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked && !data.contacts.find(id => id === parseInt(value))) {
            setData('contacts', [...data.contacts, parseInt(value)]);
        } else {
            setData('contacts', data.contacts.filter((id) => id !== parseInt(value)));
        }
    };

    const inputFile = useRef(null);
    const [UrlFile, setUrlFile] = useState(null);

    const handleAddFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setData('image', event.target.files[0]);
            const url = URL.createObjectURL(event.target.files[0]);
            setUrlFile(url);
            console.log('Url', url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        post(route('chat.create_Group'), {
            onSuccess: (response) => {
                console.log(response.props.flash.Create_Group);

                Swal.fire({
                    icon: response.props.flash.Create_Group.icon,
                    title: response.props.flash.Create_Group.message,
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });

                location.reload();
            },
            onError: (errors) => {
                console.error(errors);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while creating the group. Please try again.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                    }
                });
            }
        });
    };

    return (
        <>
            <aside className="sidebar brd-Right ms-2 me-5">
                <div className="tab-content h-100" role="tablist">
                    <div className="tab-pane fade h-100 show active" id="tab-content-create-chat" role="tabpanel">
                        <form className="d-flex flex-column h-100" onSubmit={handleSubmit}>
                            <div className="hide-scrollbar">
                                <div className="container py-8">
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Create chat</h2>
                                    </div>
                                    <div className="mb-6">
                                        <Button_DP />
                                    </div>
                                    <div className="tab-content" role="tablist">
                                        <Detais_Group
                                            HandelAddFile={handleAddFile}
                                            inputFile={inputFile}
                                            UrlFile={UrlFile}
                                            setData={setData}
                                        />
                                        <Contact_Add_in_Group
                                            data_contact={Liste_data_des_Contact}
                                            handleChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-n4 mb-8 position-relative">
                                <button className="btn btn-lg btn-primary w-100 d-flex align-items-center" type="submit" disabled={processing}>
                                    Start chat
                                    <span className="icon ms-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Creat_Chate;
