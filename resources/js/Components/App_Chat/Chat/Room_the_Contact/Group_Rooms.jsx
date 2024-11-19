
import { Link as NavLink, usePage } from "@inertiajs/react";
import { useParams } from "react-router-dom";
import formatDate from "../../FormatData";
import { useContext, useEffect, useState } from "react";
import { Context_Data } from "@/CreatContexts";
import Image, { Audio, File, Video } from "../../SVG/Svg_Type";

function Group_Rooms({dataChats}) {
    
    const {Path_Asset}=useContext(Context_Data)
    const  {id} = useParams()
    let Count = null;
    const [dataChat,setdataChat]=useState({...dataChats})
    
    useEffect(()=>{setdataChat({...dataChats})},[dataChats])
    const [typingTimer , settypingTimer] = useState(null)
    
    const [typingUser , settypingUser] = useState(null)

    // --------------------------------------
    // window.Echo.join(`room.${dataChat.Channel_id}`) 
    // .joining((user) => {
    //             // dataChat.users[0].is_active = 1
    //             setdataChat({...dataChat,users:[{...dataChat.users[0],'is_active':1}]})
                
            
    //     }).leaving((users)=>{
            
    //             setdataChat({...dataChat,users:[{...dataChat.users[0],'is_active':0}]})

    //         })
    //     .listenForWhisper("typing", (user) => {
    //         settypingUser(user);

    //         if (typingTimer) {
    //             clearTimeout(typingTimer);
    //         }

    //         settypingTimer( setTimeout(() => {
    //             settypingUser(null);
    //             }, 5000),
    //         );
    //     });
    // ---------------------------------------
    return ( 
    <>
    <div className={`card border-1 text-reset hov ${dataChat.Channel_id==id?'card-active':''}`} >
        <NavLink 
        href={`/Chats/rooms/${dataChat.Channel_id}`}
        className=''
        >
            <div className="card-body">
                <div className="row gx-5">
                    <div className="col-auto">
                        <div className="avatar avatar-online">
                            <img 
                            src={Path_Asset+`storage/${
                            dataChat.messages.length!==0 && dataChat.messages[0]!==undefined? 
                            dataChat.messages[0].users.image :dataChat.image}`} alt="#" className="avatar-img"/>
                        </div>
                    </div>

                    <div className="col">
                        <div className="d-flex align-items-center mb-3">
                            <h5 className="me-auto mb-0">
                                {dataChat.messages.length!==0 && dataChat.messages[0]!==undefined ? dataChat.messages[0].users?dataChat.messages[0].users.name:'' :dataChat.name}
                            </h5>
                            
                        {/* -------------  Date -------------- */}
                    <span className="text-muted extra-small ms-2">
                            { dataChat.messages.length !==0 && dataChat.messages[0]!==undefined?
                        formatDate(dataChat.messages[0].created_at)
                        :""}
                    </span>

                        </div>

                        <div className="d-flex align-items-center">
                            

{
                    typingUser?(
                    <p className="text-truncate ">{typingUser.name.split(' ')[0]+' '} 
                    is typing<span className='typing-dots'>
                    <span>.</span><span>.</span><span>.</span></span></p>
                    ):
                    dataChat.messages.length!==0 && dataChat.messages[0]!==undefined ?
                    ( <div className="line-clamp me-auto" 
                    style={{ width: '190px',color:'#20c997' }}
                >
                            
                            {(dataChat.messages[0].status_Message==="image")
                            ?<div className="text-nowrap"><Image /> {' Image'}</div>:
                            (dataChat.messages[0].status_Message==="video")
                            ? (<div className="text-nowrap"><Video /> {' Video'}</div>) :
                            (dataChat.messages[0].status_Message==="document")
                            ?(<div className="text-nowrap"><File /> {' '+dataChat.messages[0].Originale_Name_File}</div>):
                            (dataChat.messages[0].status_Message==="audio")
                            ? <div className="text-nowrap">< Audio /> {' Audio'}</div>:
                            dataChat.messages[0].message}
                    
                    </div>)

                    :
                    (
                    <div className="line-clamp me-auto" 
                    style={{ width: '180px',color:`${dataChat.users[0].is_active ?'#20c997':'#c0c0c0'}` }}
                >{dataChat.users[0].is_active ?'online':'offline'}</div>
                )
                }

                            {dataChat.user_auth.length!==0 ? 
                        dataChat.user_auth[0].pivot.unread_messages_count===0 ? ''
                        : <div className="badge badge-circle bg-primary ms-5">
                        <span>{dataChat.user_auth[0].pivot.unread_messages_count}</span>
                        </div>
                         :''}
                        </div>
                    </div>
                </div>
            </div>     
            
            {/*<!-- .card-body --> */}

             <div className="card-footer">
                <div className="row align-items-center gx-4">
                    <div className="col-auto">
                        <div className="avatar avatar-xs">
                            <img className="avatar-img" src={`${Path_Asset}storage/${dataChat.image}`} alt="Bootstrap Community"/>
                        </div>
                    </div>

                    <div className="col">
                        <h6 className="mb-0">{dataChat.titre} 
                        {/* Bootstrap Community */}
                        </h6>
                    </div>

                    <div className="col-auto">
                        <div className="avatar-group">
                        {dataChat.users.length!==0 ? 
                        dataChat.users.map((itm ,ind)=>{
                            
                            
                            let NBuser = ind >3?Count+=1:0; // get current letter
                            
                            if (ind<=2) {
                                
                            return   <div className="avatar avatar-xs">
                                     <img src={`${Path_Asset}storage/${itm.image}`} alt="#" className="avatar-img"/>
                                    </div>
                            }
                            else
                             if (ind === 3) {
                                return (
                                    <div className="avatar avatar-xs">
                                        <span className="avatar-text">+{dataChat.users.length - 3}</span>
                                    </div>
                                );
                            }
                        })
                         :''}
                          
                        </div>
                    </div>
                 </div>
                 
           </div>
                                        
        </NavLink>
    </div>
    </> 
    );
}

export default Group_Rooms;