import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


import { Head, router, usePage, useRemember } from '@inertiajs/react';

import {  useEffect, useState } from 'react';
import {  Context_Data } from '@/CreatContexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Room_User_Group from './chat/Room';
import Chat_Room_Message, { Pick_a_person_from_left_menu } from './chat/Componnent_message_Group_Or_Private';
import Creat_Chate from './chat/Create_chat';
import Liste_Contact from './chat/Liste_Contact';
import Notif from './Notifications/Notf';
import { useDispatch } from 'react-redux';
import { ChargeDataContact } from '@/reducers/SliceContactUser';
import NavBare from '@/Components/App_Chat/NavBare';
import Modal_Add_Friend from './chat/Modal_Add_Friend';
import Profile from './Profile/Profile';
import AddUser from '@/Components/App_Chat/Chat/Room_the_Contact/AddUser';
import DetailsGroups from '@/Components/App_Chat/Chat/Room_the_Contact/DetailsGroups';
import Settings from './Settings/Settings';
// ---------------------
export default function Dashboard(
    {children,
    // path , 
    room_ID,
     room_User_messages,
     Invitation_data,
     message_in_rooms, 
     AuthUserId,
     Liste_data_des_Contact,
     Path_Asset,
     ...props}
     ) {
    const Id_Room= room_ID?'/'+room_ID:'';
    const [urlIdRoom,seturlIdroom]=useState('')
    const [spinner,Setspinner]=useRemember(false)

    const [ModeDark,SetModeDark]=useState(null)
    // -----------------------------------------------------------
    const dispatch = useDispatch()
    
    // const loadContact=()=> async()=>{
       
    // }
        /* --------------------DATA TO STATE------------------------- */
                        
                const [room_User_message,setDataRoom] = useState([...room_User_messages])
        /* --------------------DATA TO STATE------------------------- */

            // -------------------------updateLastMessage

                    const updateLastMessage=(roomId, newMessage)=> {
                        
                        setDataRoom((prevRoomUserMessage) => {
                            return prevRoomUserMessage.map((room) => {
                              if (room.id === roomId) {
                                return {
                                  ...room,
                                  messages: [newMessage], // Replace the last message with the new message
                                };
                              }
                              return room;
                            });
                          });
                      }

            //   ---------------------------------------
    

    useEffect(()=>{
        // loadContact();
        try {
            // ---------------------------------------------Charger Contact User ----------------------------------------------
            
                dispatch(ChargeDataContact({datacontact:Liste_data_des_Contact}))
                
            // ----------------------------------------------------------------------------------------------------------------
            
        } catch (error) {

            console.log('message Error : '+error.message);
            
        }
    },[])

    // -----------------------------Add member in Chat Group-------------------------------
    
        const [etatAddm,setEtatAddm] = useState(false) 
        const [etatDetailsG,setetatDetailsG] = useState(false) 
        const [data_Group,setdata_Chat_Group] = useState(null)
        
            const ShowMemberinroom=(data_Chat_Group , etat)=>{
                setdata_Chat_Group(data_Chat_Group)
                setEtatAddm(etat)
            }
            const DetaisGroup=(data_Chat_Group , etat)=>{
                setdata_Chat_Group(data_Chat_Group)
                setetatDetailsG(etat)
            }
    // -----------------------------------Online And Offline User------------------------------------------------
   
    // room_User_messages.map((room_message,i)=>{
         
    //     window.Echo.join(`room.${room_message.Channel_id}`) 

    //         .joining((users)=>{
    //             alert('jon'+users.name)
    //             room_message.users.map((itm=>{
    //                 if (itm.id == users.id) {
    //                     itm.is_active=1
    //                 }
    //             }))

    //         })
    // .leaving((users)=>{
    //     // alert('leaving '+users.name)
    // })
// })
//     ;
//     useEffect(()=>{
        
//         console.log(room_User_message);
//     },[])
    // -----------------------------------End Online And Offline User------------------------------------------------
    window.onload = ()=>{
        spinner&& Setspinner(false);
         }
    // ------------------------------------------------------------------------------------
    const [TimerLoding,setLodingTimer]=useState(null)
 
    const ChangeModeSpinner=(scend)=>{
            Setspinner(true);
            // if (TimerLoding) {
            //     clearTimeout(TimerLoding);
            // }
         
            // setLodingTimer( setTimeout(() => {
            //     Setspinner(false);
            //     }, 10000),
            // );
    }
    
    // ------------------------------------------------------------------------------------
    useEffect(()=>{
// alert('ee')
    //     const LTCSS = document.querySelectorAll('link[class=css-lt]');
    //     const DKCSS = document.querySelectorAll('link[class=css-dk]');
    //     const NIGHT = document.querySelectorAll('link[class=css-nh]');
    // if (localStorage.getItem('color-scheme')) {
    //     let scheme = localStorage.getItem('color-scheme');
        
    //     [...LTCSS].forEach((link) => {
    //         link.media = (scheme === 'light') ? 'all' : 'not all';
    //     });

    //     [...NIGHT].forEach((link) => {
    //         link.media = (scheme === 'night') ? 'all' : 'not all';
    //     });
    //     [...DKCSS].forEach((link) => {
    //         link.media = (scheme === 'dark') ? 'all' : 'not all';
    //     });
    //     console.log(scheme , ModeDark)
    // }
    // else{
    //     [...LTCSS].forEach((link) => {
    //         link.media =  'all' ;
    //     });
    // }

    },)

    // ------------------------------------------------------------------------------------


    return (
        <Context_Data.Provider value={{Invitation_data,  
                                        room_User_message ,  
                                        message_in_rooms  , 
                                        AuthUserId , 
                                        room_ID ,
                                        Path_Asset,
                                        Liste_data_des_Contact,
                                        room_User_messages,
                                        // Function 
                                        updateLastMessage,
                                        ShowMemberinroom,
                                        DetaisGroup,
                                        ChangeModeSpinner,
                                        ModeDark,
                                        SetModeDark,
                                        spinner
                                        }}>

        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            // RenderActiveComponent={RenderActiveComponent()}
        >
            <Head >

            <title>Message </title>        
            <meta name="color-scheme" content="light dark"/>
            {/* <link rel="stylesheet" class="css-dk" href={Path_Asset+'css/assets/css/template.bundle.dark.css'} 
        media="(prefers-color-scheme: dark)"
        />

        <link rel="stylesheet" class="css-lt" href={Path_Asset+'css/assets/css/template.bundle.css'}
        media="(prefers-color-scheme: light)"/> */}
            
            </Head>
            <BrowserRouter>

{/* -------------spinner------------- ${!spinner && 'visually-hidden'}*/}

<>
{/* -------------End spinner-------------  visually-hidden
// */}


    <div className="layout overflow-hidden bg-dots-lighter " >
        
                {/* ----------------------------------NavBare------------------------------ */}

                            <NavBare url={window.location.protocol} urlIdRoom={Id_Room} 
    ModeDark={ModeDark} SetModeDark={SetModeDark}/>

        <Routes>
                {/* -----------------------------------Chat--------------------------------- */}
                            <Route path={`/Chats/rooms`} >
                                <Route index element={<><Room_User_Group/><Pick_a_person_from_left_menu/></>}/>
                                <Route path={`:id`} element={<><Room_User_Group/><Chat_Room_Message/></>}/>
                            </Route>
                            
                {/* ------------------------------New Chat---------------------------------- */}

                            <Route path={`/Chats/New_Chat`} >
                                            <Route index element={<><Creat_Chate/><Pick_a_person_from_left_menu/></>}/>
                                        <Route path={`:id`} element={<><Creat_Chate/><Chat_Room_Message/></>}/>
                            </Route>
                            
                {/* ---------------------------Liste contact || freinds--------------------- */}

                            <Route path={`/Chats/Friends`} >
                                            <Route index element={<><Liste_Contact/><Pick_a_person_from_left_menu/></>}/>
                                        <Route path={`:id`} element={<><Liste_Contact/><Chat_Room_Message/></>}/>
                            </Route>

                {/* ------------------------------Notification------------------------------ */}
                            <Route path={`/Chats/Notification`} >
                                            <Route index element={<><Notif/><Pick_a_person_from_left_menu/></>}/>
                                        <Route path={`:id`} element={<><Notif/><Chat_Room_Message/></>}/>
                            </Route>

                            <Route path={`/Chats/Settings`} >
                                            <Route index element={<><Settings/><Pick_a_person_from_left_menu/></>}/>
                                        <Route path={`:id`} element={<><Settings/><Chat_Room_Message/></>}/>
                            </Route>
        </Routes>
        {/* ------------------Add Friend in group----------------------- */}
            {/* {room_ID&&<AddUser/>  }   */}
            {etatAddm && (data_Group && (room_User_message.find(key=>key.Channel_id==data_Group.Channel_id&&
            (key.Status_Chat=="group"&&data_Group.Status_Chat=="group"))
            &&<AddUser data_Group={data_Group} setEtatAddm={setEtatAddm} etatAddm={etatAddm} members={Liste_data_des_Contact} /> ))}


            {etatDetailsG && (data_Group && (room_User_message.find(key=>key.Channel_id==data_Group.Channel_id&&
            (key.Status_Chat=="group"&&data_Group.Status_Chat=="group"))
            &&<DetailsGroups data_Group={data_Group} messageAll={message_in_rooms} 
                setetatDetailsG={setetatDetailsG} etatDetailsG={etatDetailsG} /> ))}
    </div>
                           
            
                {/* ------------------------------ Modal: Invite ---------------------------*/}

                            <Modal_Add_Friend 
                            
                            />
                        
                {/* -------------------------- Modal: Profile Me --------------------------- */}

                            <Profile/>
                        
                </>
    
                                  
    
     </BrowserRouter>
        
            
        </AuthenticatedLayout>

     </Context_Data.Provider>
    );
}
