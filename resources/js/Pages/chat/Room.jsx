import { Context_Data } from "@/CreatContexts";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import Charge_Attede from "../../Components/App_Chat/Chat/Room_the_Contact/Charger_Attende";
import Group_Rooms from "../../Components/App_Chat/Chat/Room_the_Contact/Group_Rooms";
import Search_Contact from "../../Components/App_Chat/Chat/Room_the_Contact/Search_Contact";
import User_Rooms from "../../Components/App_Chat/Chat/Room_the_Contact/User_Rooms";
// import'@/../css/style01.css';
import Dashboard from "../Dashboard";
import Group_Rooms_Method_2 from "@/Components/App_Chat/Chat/Room_the_Contact/Group_Rooms_Method_2";
function Room_User_Group() {
    const url = usePage().props.url
    const {room_User_message , updateLastMessage,Path_Asset} = useContext(Context_Data);

    // const [DataRoom,setDataRoom] = useState([...room_User_message])
    
    return ( 
    <>
     {/* <!-- Sidebar --> */}
                   
 
<aside className="sidebar brd-Right ms-2 me-5">
    <div className="tab-content h-100" role="tablist">
                    {/* <!-- Chats --> */}
                    <div className="tab-pane fade h-100 show active" id="tab-content-chats" role="tabpanel">
                        <div className="d-flex flex-column h-100 position-relative">
                            <div className="hide-scrollbar">

                                <div className="container py-8">
                                    {/* <!-- Title --> */}
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Chats</h2>
                                    </div>

    {/* <!--------------------- Search -----------------> */}
    
                                    <Search_Contact />

                                <div className="card-list">
{/* <!--------------------------- Card ----------------------------------> */}
                                        
                                    

                                {
                                   room_User_message &&  room_User_message.sort(function(x,y){
                                  
                                    let xCreatedAt = x.messages && x.messages[0] ? x.messages[0].created_at : x.created_at;
                                    let yCreatedAt = y.messages && y.messages[0] ? y.messages[0].created_at : y.created_at;
                                  
                                     if (xCreatedAt==null) {
                                        return 1
                                        
                                     }else if(yCreatedAt==null){
                                        return -1
                                     }else{
                                        return  xCreatedAt > yCreatedAt ? 
                                        -1 : 
                                        xCreatedAt == yCreatedAt ?
                                        0 : 
                                        1 
                                     }
                                  
                                })
                                   .map((room_message,i)=>{
                                        
                                        window.Echo.join(`room.${room_message.Channel_id}`) 
                                        .listen("SendMessage", (event) => {
      

                                        // ****************************************
                                        updateLastMessage(room_message.id,event)
                                        
                        
                                    })
                                        if (room_message.Status_Chat==="user") {
                                            return <User_Rooms key={i} dataChats={room_message}/>
                                        }else{
                                            return room_message.messages.length!==0 
                                            ?
                                            <Group_Rooms key={i} dataChats={room_message}/>
                                            :
                                            <Group_Rooms_Method_2 key={i} dataChat={room_message}/>
                                        }

                                    })
                                }
                                    
                                       


 {/* <!---------------- Card Attende chargement ------------------------> */}

                                    {/* <Charge_Attede/> */}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div></aside>

{/* </Authenticated> */}
{/* </Dashboard> */}
    </> 
    );
}

export default Room_User_Group;