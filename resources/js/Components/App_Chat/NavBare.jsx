import { useContext, useEffect, useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import {  usePage , Link, router} from '@inertiajs/react';
import {  NavLink } from 'react-router-dom';
import ApplicationLogo from '../ApplicationLogo';
import { Context_Data } from '@/CreatContexts';

function NavBare({urlIdRoom }) {
    const {Path_Asset,ChangeModeSpinner ,SetModeDark , ModeDark , spinner}= useContext(Context_Data)
    const {user} = usePage().props.auth

    const [urlIdRooms,setRoomInurl]=useState(urlIdRoom)
    const HandlChangerMode=()=>{
        ChangeModeSpinner(1000)
        SetModeDark((ModeDark==='light')?'dark':(ModeDark==='dark')?'night':'light')
        let scheme = localStorage.getItem('color-scheme');
        ( scheme === 'light' )?localStorage.setItem("color-scheme", 'dark'):( scheme === 'dark' )?localStorage.setItem("color-scheme", 'night'):localStorage.setItem("color-scheme", 'light')

        window.location.reload()
        // window.location.reload()
    }
//    alert(ModeDark)
useEffect(()=>{
    SetModeDark((localStorage.getItem('color-scheme')==='light')?'light':(localStorage.getItem('color-scheme')==='dark')?'dark':'night')
    
},[])
   
    return (
         <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar br-rd" >
    {/* <!-- Brand --> */}
    <Link 
            href={`/Chats/rooms`}
             title="Messenger" className="d-none d-xl-block  mb-2">
      
                <svg data-v-70b83f88="" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 340.000000 250.000000" preserveAspectRatio="xMidYMid meet" color-interpolation-filters="sRGB" style={{margin: "auto;"}}> 
                   
                    <g data-v-70b83f88="" fill="#95aac9" class="bordersvg b-d1" transform="translate(69.66999816894531,80.19000244140625)"><polyline stroke="#95aac9" strokeWidth="3" fillOpacity="0" fill="#77216f" points="100.33000183105469,20 100.33000183105469,10 0,0 0,89.61999893188477 100.33000183105469,79.61999893188477 100.33000183105469,69.61999893188477"></polyline> <g transform="translate(0,20)"><g><rect data-gra="graph-name-bg" strokeWidth="2" class="i-icon-bg" x="0" y="0" width="200.66000366210938" height="49.619998931884766" fillOpacity="0"></rect> </g> <g transform="translate(10,3)"><g data-gra="path-name" fillRule="" class="tp-name"><g transform="scale(1)"><g><path d="M2.34-39.9L2.34-34.8 5.76-34.62 5.76-6.72C5.76-5.52 5.04-5.16 4.02-5.04L2.04-4.86 2.04 0 18.9 0C28.86 0 34.26-4.14 34.26-11.94 34.26-17.22 31.2-20.34 26.7-21.48 29.94-23.16 32.22-25.92 32.22-29.88 32.22-37.86 26.04-39.9 19.26-39.9ZM13.08-18.18L19.02-18.18C23.76-18.18 26.52-16.02 26.52-12 26.52-8.34 24.6-5.64 18.72-5.64L13.08-5.64ZM13.08-34.38L17.94-34.38C21.84-34.38 24.78-33.42 24.78-29.1 24.78-25.92 22.68-23.52 17.52-23.52L13.08-23.52ZM37.92-14.52L53.64-14.52 53.64-20.04 37.92-20.04ZM80.58-34.2C81.66-33.84 81.84-33.36 81.84-32.22L81.84-27.54 87.96-27.96 87.96-38.16C84.36-39.84 80.22-40.62 76.68-40.62 67.44-40.62 57.84-35.4 57.84-19.74 57.84-6.06 64.5 0.78 76.68 0.78 80.52 0.78 85.26 0.06 88.56-1.68L88.56-12.06 82.44-12.48 82.44-7.68C82.44-6.54 82.26-6.06 81.18-5.7 80.04-5.34 78.48-5.16 76.8-5.16 68.46-4.98 65.34-10.8 65.34-20.22 65.34-29.28 69.12-34.68 76.68-34.68 77.88-34.68 79.44-34.56 80.58-34.2ZM97.2-6.72C97.2-5.22 96.6-4.86 95.46-4.74L93.48-4.56 93.48 0 107.76 0 107.76-4.8 104.34-4.98 104.34-19.5C104.34-22.62 106.56-25.56 110.76-25.56 114.6-25.56 115.44-22.74 115.44-19.08L115.44-6.72C115.44-5.22 114.84-4.86 113.7-4.74L111.72-4.56 111.72 0 126 0 126-4.8 122.58-4.98 122.58-20.64C122.58-27.72 119.04-31.08 113.04-31.08 109.08-31.08 106.08-29.22 104.28-26.64L104.28-42.78 93.6-42.78 93.6-37.8 95.7-37.68C96.84-37.62 97.2-37.26 97.2-35.94ZM156.48-28.98C152.16-30.6 147.78-31.08 145.8-31.08 135-31.08 129.96-24.36 129.96-13.8 129.96-5.22 133.5 0.78 141.96 0.78 145.26 0.78 148.32-0.84 150.18-3.54L150.36-3.48 150.36 0 159.9 0 159.9-4.8 157.98-4.92C156.84-4.98 156.48-5.34 156.48-6.66ZM149.52-9.54C149.52-6.96 147.24-4.32 143.52-4.32 138.48-4.32 137.28-9.06 137.28-14.04 137.28-20.52 139.2-25.86 144.9-25.86 146.76-25.86 148.62-25.5 149.52-25.08ZM169.02-36.54C167.76-33.12 166.32-29.88 162.12-29.52L161.52-25.14 165.78-25.14 165.78-9.12C165.78-4.92 165.72 0.84 175.08 0.84 177.9 0.84 180.9 0 182.7-1.26L180.9-5.88C179.94-5.28 178.44-4.62 176.82-4.62 174.36-4.62 172.92-5.7 172.92-9.36L172.92-25.14 180.3-25.14 180.9-30.18 172.92-30.18 172.92-36.54Z" transform="translate(-2.0399999618530273, 42.779998779296875)"></path></g> </g></g> </g></g></g><defs v-gra="od"></defs></svg>

    </Link>

    {/* <!-- Nav items --> */}
    <ul className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3" role="tablist">
      
        {/* <!------------------- New chat ---------------------> */}
        <li className="nav-item my-2">
            <NavLink 
            // to={route('AddGroup.index')} 
            to={`/Chats/New_Chat${urlIdRooms}`}
            className={`nav-link py-0 py-lg-8`}  
            id="tab-create-chat" 
            title="Create chat" 
              role="tab">

                <div className="icon icon-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z">
                    </path></svg>
                </div>
            </NavLink>
        </li>

        {/* <!-- Friends --> */}
        <li className="nav-item my-2">
            <NavLink
            to={`/Chats/Friends${urlIdRooms}`}
            className={`nav-link py-0 py-lg-8`}
             id="tab-friends" 
              title="Friends"  
            >
                <div className="icon icon-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
            </NavLink>
        </li>

        {/* <!----------------------------------- Chats ------------------------------------> */}
        <li className="nav-item my-2">
            <NavLink
            end 
            to={`/Chats/rooms${urlIdRooms}`}

            className={`nav-link py-0 py-lg-8`}  
            id="tab-chats" 
            title="Chats"
            role="tab" 
            >

                <div className="icon icon-xl icon-badged">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <div className="badge badge-circle bg-primary">
                        <span>4</span>
                    </div>
                </div>
            </NavLink>
        </li>

        {/* <!------------------------------------- Notification -------------------------------------> */}
        <li className="nav-item my-2 ">
            <NavLink
            to={`/Chats/Notification${urlIdRooms}`} 
            className={`nav-link py-0 py-lg-8`}  
            id="tab-notifications"
             title="Notifications"
              role="tab">
                <div className="icon icon-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
            </NavLink>
        </li>
        {/* <!-- Switcher --> */}
        <li className="nav-item  d-xl-block">
            
           {
           spinner?
                    
           <div class="text-center">
           <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
           </div>
         </div>
           
           :
           <a className="switcher-btn nav-link py-0 py-lg-8 active " href="#"  onClick={HandlChangerMode} title="Themes">
                
                <div className="switcher-icon switcher-icon-dark icon icon-xl " data-theme-mode={ModeDark}>
                    {
                    
                    
                    ModeDark ==='dark' ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    
                    :ModeDark ==='light'?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    :
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg> 
                }
                </div>
               
            </a>}
        </li>
<li className="nav-item my-9 d-none d-xl-block"></li>
        {/* <!------------------------------------- Settings -------------------------------------> */}
        <li className="nav-item my-2">
            <NavLink
             to={`/Chats/Settings${urlIdRooms}`}
            className={`nav-link py-0 py-lg-8`}  
             id="tab-settings" 
            title="Settings" 
             role="tab"
             >
                <div className="icon icon-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
            </NavLink>
        </li>

        {/* <!------------------------------------- Profile -------------------------------------> */}
        <li className="nav-item ">
            <a href="#" className="nav-link p-0 mt-lg-2" data-bs-toggle="modal" data-bs-target="#modal-profile" >
                <div className="avatar avatar-online mx-auto">
                    <img className="avatar-img" src={`${Path_Asset}storage/${user.image}`} alt=""/>
                </div>
            </a>
        </li>
    </ul>
</nav> 
);
}

export default NavBare;