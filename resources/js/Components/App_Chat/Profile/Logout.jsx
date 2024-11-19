import Dropdown from "@/Components/Dropdown";
import { useForm } from "@inertiajs/react";

function Logout({children}) {
    
    const {post , processing}=useForm()
    const LogoutHandl=()=>{
        
        post(route('logout'),{
            onSuccess: (response) => {
                    window.location.reload()
            }})
    }
    return ( 
    <>
    <Dropdown>
                                    <form onSubmit={LogoutHandl}>
                                            {children}
                                    </form>
    </Dropdown>
    </> );
}

export default Logout;