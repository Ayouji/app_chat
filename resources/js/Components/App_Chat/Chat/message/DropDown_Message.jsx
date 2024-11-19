import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";


function DropDown_Message({reportsButton , status_Message , path_file , Path_Asset, 
                           Id_msage      , Id_Reply       , setMessageDelete , Originale_Name_File}) {
    console.log(Id_Reply);
    const {post,data,setData , processing , reset ,get }=useForm({
        idMsg	: Id_msage,   
        IdReply: (Id_Reply ?Id_Reply.ID_Msg:null),	
})
const handleSubmitDeleted=(e)=>{
    // console.log(data);
    
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
    post(route('Delete.Message'),{
        onSuccess: (response) => {
            // alert('success')

            setMessageDelete({
                idMesg	: Id_msage,   
                replyMsg : (Id_Reply ?Id_Reply.ID_Msg:null)
            })

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: response.props.flash.Delete_message.icons,
                title: response.props.flash.Delete_message.message
              })
              

        }
    })
}
})
  }
    return ( 
    <>
     {/* <!-- Dropdown --> */}
     <div className="message-action">
                                 <div className="dropdown">
                                    {/* <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </a> */}
 <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
 </a>
 <ul className="dropdown-menu">
     {/* <li>
         <a className="dropdown-item d-flex align-items-center" href="#">
             <span className="me-auto">Edit</span>
             <div className="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
             </div>
         </a>
     </li> */}
     <li>
        {/* Button report --------------------------------- */}
       
      {status_Message==='text'? <button className="dropdown-item d-flex align-items-center" onClick={reportsButton}>
             <span className="me-auto">Reply</span>
             <div className="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
             </div>
        </button>:''}
         {/* ---------------------------------------- */}
     </li> 
     {status_Message==='image'|| status_Message==='video' || status_Message==='document'?
      <li>

         <a 
         className="dropdown-item d-flex align-items-center text-success" 
         href={`${Path_Asset}storage/${path_file}`}
         download={`${Originale_Name_File}`}
          >
             <span className="me-auto">Download</span>
             <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down-fill" viewBox="0 0 16 16">
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z"/>
                </svg>
                </div>
         </a>
     </li>:''}
     <li>
         <hr className="dropdown-divider"/>
     </li>
    
      <li>
    <form onSubmit={handleSubmitDeleted}>
         <button
         className="dropdown-item d-flex align-items-center text-danger" 
         type="submit"
         
          >
             <span className="me-auto">Delete</span>
             <div className="icon">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
             </div>
         </button>
    </form>
     </li>
 </ul>
     </div>
 </div>
                                                
    </> 
    );
}

export default DropDown_Message ;