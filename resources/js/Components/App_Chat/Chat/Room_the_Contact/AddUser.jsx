
import { Link as NavLink, useForm, usePage } from "@inertiajs/react";
import {  useParams } from "react-router-dom";
import formatDate from "../../FormatData";
import { useContext, useEffect, useState } from "react";
import { Context_Data } from "@/CreatContexts";
import Swal from "sweetalert2";

function AddUser({etatAddm,setEtatAddm,data_Group,members}) {
    const {Path_Asset}=useContext(Context_Data)
    const [etatSearch,setEtatSearch] = useState(false)
    const [Member,setMember]=useState([...members])
    const [Search,setSearch] = useState(null)

// -----------------
const {post,data,setData , processing}=useForm({
    Group_contacts : [],
    Chat_id : null,
})
console.log(Member);
// -----------------
    let prevLetter = null; 
    useEffect(()=>{
        // setData('Chat_id',data_Group.id)
        let mb = Member.filter(row1 => {
            // Check if any row in Table 2 matches the current row in Table 1
            var hasMatch = data_Group.users.some(row2 => {
              return row1.id === row2.id && row1.name === row2.name;
            });
        
            // Return true if no match is found
            return !hasMatch;
          });
          setMember(mb)
    },[])

    
    const changeStatus=()=>{
        setEtatAddm(false)
        // console.log(Member);
    }
   const ShowSearch=()=>{
    
    etatSearch ? setEtatSearch(false):setEtatSearch(true)
   }
//    ------------------------------------------------
                    

   const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    // console.log(e.target,data.Group_contacts);

    // Case 1 : The contact checks the box
    if (checked && !data.Group_contacts.find(id => id == parseInt(value))) {
        
      setData({'Group_contacts':[...data.Group_contacts, parseInt(value)],'Chat_id':data_Group.id})
    }
  
    // Case 2 : The contact unchecks the box
    else {
      setData('Group_contacts',data.Group_contacts.filter((id) => id !== parseInt(value)))
    }
  
  };
//   ---------------------------Add Member--------------------
const handleSubmitMember=(e)=>{
    e.preventDefault();

    post(route('chat.contact.AddMember'),{
        onSuccess: (response) => {
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
         if (response.props.flash.Add_Member.status ===509) {
                    Toast.fire({
                        icon: 'error',
                        title: response.props.flash.Add_Member.message
                    })
                    }

        if (response.props.flash.Add_Member.status === 209) {
            setMember(Member.filter(row1=>{
                // Check if any row in Table 2 matches the current row in Table 1
            var hasMatch = response.props.flash.Add_Member.data.some(row2 => {
                return row1.id === row2;
              });
          
              // Return true if no match is found
              return !hasMatch;
            }))


            Toast.fire({
                icon: 'success',
                title: response.props.flash.Add_Member.message
            })
            
        }

                }
    })
  }
// ---------------------------------------------------------
    return ( 
    <>
    
    {/* <!-- Chat: Add member --> */}
            <div class={`offcanvas offcanvas-end offcanvas-aside position-absolute ${etatAddm&&'show'}`}
            style={{visibility:`${etatAddm?'visible':'hidden'} `}} >
                {/* <!-- Offcanvas Header border-bottom--> */}
                <div class="offcanvas-header py-4 py-lg-7 bg-persence border-bottom-v2" >
                    <button type="button" class="btn btn-icon icon icon-lg text-muted" onClick={changeStatus}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div class="visibility-xl-invisible overflow-hidden text-center">
                        <h5 class="text-truncate">Members</h5>
                        <p class="text-truncate">Add new members</p>
                    </div>

                    <button type="button" class="btn btn-icon icon icon-lg text-muted" onClick={ShowSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                    </button>
                </div>
                {/* <!-- Offcanvas Header --> */}

                {/* <!-- Offcanvas Body --> */}
                <div class="offcanvas-body hide-scrollbar py-0 bg-persence" >

                    {/* <!-- Search --> */}
                            <div class={`collapse ${etatSearch&&'show'}`} id="search-members" 
                            style={{visibility:`${etatSearch?'visible':'hidden'}` }}>
                                <div class=" py-6" style={{}}>

                                        <div class="input-group">
                                            <div class="input-group-text" id="search-user">
                                                <div class="icon icon-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                </div>
                                            </div>

                                            <input type="text" class="form-control form-control-lg ps-0" placeholder="User name " aria-label="User name or phone" aria-describedby="search-user"
                                            onChange={(e)=>setSearch(e.target.value)}/>
                                        </div>

                                </div>
                            </div>
                    {/* <!-- Search --> */}

        {/* <!-- Members --> */}
                    <ul class="list-group list-group-flush">
                    
            
        {Member.filter(itms=>
        {
            return Search?itms.name.toLowerCase().includes(Search): itms
        })
        .sort((a, b) => (a.name > b.name) ? 1 : -1)
            .map((itm,i)=>{
                    const currentLetter = itm.name[0].toUpperCase(); // get current letter
                    const isFirstLetter = prevLetter !== currentLetter; // check if it's the first contact with this letter
                    prevLetter = currentLetter; // update previous letter to current letter
                                                
                        return <div key={i}>
                                               
                        {isFirstLetter && ( // display the letter only if it's the first contact with this letter
                                <li class="list-group-item dg-c0c0" >
                                    <small class="text-uppercase text-muted">{currentLetter}</small>
                                </li>
                                     )}
               
                       

                        <li class="list-group-item dg-c0c0">
                            <div class="row align-items-center gx-5">
                                <div class="col-auto">
                                    <div class={`avatar avatar-${itm.is_active ?'online':'offline'}`}>
                                        
                                            <img class="avatar-img" src={Path_Asset+'storage/'+itm.image} alt=""/>
                                        {/* letter.toLowerCase() === Search */}
                                        
                                    </div>
                                </div>
                                <div class="col">
                                    <h5 > 
                                        {itm.name.split('').map((letter, j) => {
                                                let tablt=[]
                                                if (Search && Search.toLowerCase().includes(letter.toLowerCase())) {
                                                    return <span key={j} style={{  border:'solid 1px yellow'}}>{letter}</span>;
                                                } else {
                                                    return letter;
                                                }
                                            })}

                                    </h5>
                                    <p>{`${itm.is_active ?'online':'offline'}`}</p>
                                    
                                    {/* <p>last seen recently</p>
                                    <p>last seen within a month</p>
                                    <p>last seen a long time ago</p> */}
                                </div>
                                <div class="col-auto">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" 
                                                                    value={`${itm.id}`} 
                                                                    name={`${itm.id}`} 
                                                                    // checked={contact.find( id => id === itm.id )}
                                                                    onChange={handleChange} 
                                                                    
                                                                    id="id-add-user-user-4"/>
                                        <label class="form-check-label" for="id-add-user-user-4"></label>
                                    </div>
                                </div>
                            </div>
                        </li>

       </div> })}
               
                       

                        {/* 
                                    <div class="avatar avatar-online">
                                        
                                        
                                            <span class="avatar-text">M</span>
                                        
                                    </div>
                             */}

                        


                    </ul>
                    {/* <!-- Members --> */}
                </div>
                <form class="offcanvas-footer border-top py-4 py-lg-7 bg-persence border-bottom-v2" 
                onSubmit={handleSubmitMember}>
                    <button type="submit" class={`btn btn-lg ${Member.length==0?'btn-secondary':'btn-primary'} w-100 d-flex align-items-center`} disabled={Member.length==0?true:false} >
                        Add members

                        <span class="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </span>
                    </button>
                </form>
                {/* <!-- Offcanvas Footer --> */}
            </div>

    </> 
    );
}

export default AddUser;