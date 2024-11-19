
import { Link as NavLink, router, useForm, usePage } from "@inertiajs/react";
import { useContext, useEffect, useState } from "react";
import formatDate from "../../FormatData";
import { useParams } from "react-router-dom";
import Image, { Audio, File, Video } from "../../SVG/Svg_Type";
import { Context_Data } from "@/CreatContexts";
// import { NavLink } from "react-router-dom";
// Link

function User_Rooms({dataChats}) {
    const {Path_Asset}=useContext(Context_Data)
    const url = usePage().props.url
    const  {id} = useParams()
    const [dataChat,setdataChat]=useState({...dataChats})
    useEffect(()=>{setdataChat({...dataChats})},[dataChats])
    const [typingTimer , settypingTimer] = useState(null)
    
    console.log(dataChat);
    const [typingUser , settypingUser] = useState(null)

    const [RecordingUser , setRecordingUser] = useState(null)
    
        const Change_unread_messages_count=()=>{
            if (dataChat.messages.length!==0 && dataChat.messages[0]!==undefined) {
                
            router.post(route('destroy.unread_messages_count'),{'chat_id':dataChat.Channel_id})
            }
        }
    // ----------------------
    window.Echo.join(`room.${dataChat.Channel_id}`) 
    .joining((user) => {
                // dataChat.users[0].is_active = 1
                setdataChat({...dataChat,users:[{...dataChat.users[0],'is_active':1}]})
                
            
        }).leaving((users)=>{
            
                setdataChat({...dataChat,users:[{...dataChat.users[0],'is_active':0}]})

            })
        .listenForWhisper("typing", (user) => {
            settypingUser(user);

            if (typingTimer) {
                clearTimeout(typingTimer);
            }

            settypingTimer( setTimeout(() => {
                settypingUser(null);
                }, 5000),
            );
        })

        .listenForWhisper("Recording", (user) => {
            setRecordingUser(user);

            if (typingTimer  ) {
                clearTimeout(typingTimer);
            }

            settypingTimer( setTimeout(() => {
                setRecordingUser(null);
                }, 5000),
            );
        });
    // ----------------------

    return ( 
    <>
    <div className={`card border-1 text-reset hov ${dataChat.Channel_id==id?'card-active':''}`}>
    <NavLink  
             href={`/Chats/rooms/${dataChat.Channel_id}`}  onClick={Change_unread_messages_count}>

    <div className="card-body">
        <div className="row gx-5">
            <div className="col-auto">
                <div className={`avatar avatar-${dataChat.users[0].is_active ?'online':'offline'}`}>
                    <img src={`${Path_Asset}storage/${dataChat.users[0].image}`} alt="#" className="avatar-img"/>
                </div>
            </div>


            <div className="col">
                <div className="d-flex align-items-center mb-3">

                    {/* -------------Titel-------------- style={{color:'green'}}*/}

                    <h4 className="me-auto mb-0 " style={{ width: '150px'}}>
                    {dataChat.users.length!==0 || dataChat.users[0]!==undefined? dataChat.users[0].name :' User 0'}
                        </h4>

                    {/* -------------  Date -------------- */}
                    <span className="text-muted extra-small ms-2">{ dataChat.messages.length !==0 && dataChat.messages[0]!==undefined?
                    formatDate(dataChat.messages[0].created_at)
                    :""}</span>

                </div>
            {/* ----------------------Message--------------------- */}

                <div className="d-flex align-items-center">
                   
                    {
                    RecordingUser ?  (<p className="text-truncate ">{RecordingUser.name+' '}
                        is Recording <Audio/> <span className='typing-dots'>
                        <span>.</span><span>.</span><span>.</span></span></p>):
                    typingUser?(
                    <p className="text-truncate line-clamp me-auto" 
                    style={{ width: '180px',color:`${dataChat.users[0].is_active ?'#20c997':'#c0c0c0'}` }}>
                        {typingUser.name.split(' ')[0]+' '} 
                    is typing<span className='typing-dots'>
                    <span>.</span><span>.</span><span>.</span></span></p>
                    ):
                    dataChat.messages.length!==0 && dataChat.messages[0]!==undefined ?
                    ( <div className="line-clamp me-auto" 
                    style={{ width: '180px',color:'#20c997' }}
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
                    style={{ width: '180px' }}
                >{dataChat.users[0].is_active ?'online':'offline'}</div>
                )
                }
                    
                        {dataChat.users.length!==0 ? 
                        dataChat.users[0].pivot.unread_messages_count===0 ? ''
                        : <div className="badge badge-circle bg-primary ms-5 ">
                        <span>{dataChat.users[0].pivot.unread_messages_count}</span>
                        </div>
                         :''}

            
                </div>
            </div>
        </div>
   </div> {/* <!-- .card-body --> */}
</NavLink>
                        </div>
    </> );
}

export default User_Rooms;