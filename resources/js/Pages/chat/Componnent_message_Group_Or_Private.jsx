import HeaderChat from "@/Components/App_Chat/Chat/HeaderChat";
import HeaderChat_Group from "@/Components/App_Chat/Chat/HeaderChat_Group";
import InputChat from "@/Components/App_Chat/Chat/InputChat";
import NoMessag from "@/Components/App_Chat/Chat/message/Nomessage";
import Dropdown from "@/Components/Dropdown";
import { router, useForm, usePage, useRemember } from "@inertiajs/react";
import Globale_Message from "@/Components/App_Chat/Chat/GlobaleMessage";
import { useContext, useEffect, useRef, useState } from "react";
import Message_From_user from "@/Components/App_Chat/Chat/message/Message_From_user";
import Message_File_From_user from "@/Components/App_Chat/Chat/message/Missage_File_From_user";
import Message_To_User from "@/Components/App_Chat/Chat/message/Message_To_User";
import Message_is_typing from "@/Components/App_Chat/Chat/message/Message_is_typing";
import { Context_Data } from "@/CreatContexts";
import "../../bootstrap"
import { v4 as uuidv4 } from "uuid";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Swal from "sweetalert2";
import InputChat2 from "@/Components/App_Chat/Chat/InputChat2";
import AddUser from "@/Components/App_Chat/Chat/Room_the_Contact/AddUser";



// ---------------------------------PRIVAT CHAT ----------------------------------------
function Chat_Room_Message() {
    
    // const d = new Date();
    // let msVal = d.valueOf();
    // ------------------------Get data rooms message Context---------------------------------
        const { AuthUserId, message_in_rooms , 
                room_User_messages , room_ID ,
                Path_Asset , updateLastMessage
                                
              }= useContext(Context_Data)
   
    // ------------------------------------------------------------------------------------------
// 
const  room =  room_User_messages;
const DataRoom =room.find(ky => ky.Channel_id==room_ID); 

    const [msg,setMsg] = useState(message_in_rooms.messages)
    
    const [activeUsers , setActiveUsers] = useState([])
        
    const [typingUser , settypingUser] = useState(null)
        
    const [RecordingUser , setRecordingUser] = useState(null)
    
    const [typingTimer , settypingTimer] = useState(null)
    
    const [ReportsOnInput , setReportsOnInput] = useState(null)
    
    const [MessageOnInput , setMessageOnInput] = useState(null)

    const [IsShowUserMsg , setIsShowUserMsg] = useState(null)

    const [ShowTimer , setShowTimer] = useState(null)

    const inputFile = useRef(null)

    const [NameFile,setNameFile] = useState(null)

    const [UrlFile,setUrlFile] = useState(null)
    
    const [isRecording, setIsRecording] = useState(false);
    
    const [audioBlob, setAudioBlob] = useState(null);
    
    const [mediaRecorder, setMediaRecorder] = useState(null);
    
    const [audioContext, setAudioContext] = useState(null);
    
    const [analyser, setAnalyser] = useState(null);
    
    const [frequencyData, setFrequencyData] = useState(new Uint8Array());
    
    const [MessageDelete, setMessageDelete] = useState({idMesg:null,replyMsg:null});
    // useRemember()
    // -------------------------------------------------------------------------------------------------------
    

    const {post,data,setData , processing , reset }=useForm({
                message	:'',   
                status_Message:'text',	
                user_id	:AuthUserId.id,
                chat_id	:message_in_rooms.id,
                reportMsg:null,  
                Id_Msg:'',  
    })
    
    // ------------
    const sCrollHeig = useRef(null);
    useEffect(()=>{
        sCrollHeig.current.scrollTop = sCrollHeig.current.scrollHeight;
        
    },[msg])
    //     
   
    useEffect(()=>{
        if(isRecording){
        window.Echo.join(`room.${room_ID}`).whisper(
            "Recording",
            AuthUserId
        );}
    },[isRecording])

    useEffect(()=>{

        setData('Id_Msg',generateUniqueId())
        

    },[MessageOnInput,audioBlob])
    useEffect(()=>{
        if(MessageDelete.idMesg){
            // -----Delete Message 
            let flt = msg.filter((Itms)=>Itms.ID_Msg !==MessageDelete.idMesg)
            setMsg(flt)
            
            updateLastMessage(message_in_rooms.id,flt[flt.length-1])
            console.log(' -----Delete Message',flt);
            setMessageDelete({idMesg:null,replyMsg:null})

        }
    },[MessageDelete.idMesg])
    // ----------
    

    const onchangeData=(e)=>{
        setData('message',e.target.value)
        setMessageOnInput(e.target.value);
   
    }

    // -----------------
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
// --------------------------------------------Upload File ---------------------------------------------------------
            //--------------------------------------------------------
            
                const getFileType = (file) => {
                    const types = {  
                    'image/jpeg': 'image',
                    'image/png': 'image',
                    'image/gif': 'image',
                    'application/pdf': 'document',
                    'text/plain': 'document',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation':'document',
                    'application/msword': 'document',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'document',
                    'video/mp4'      : 'video',
                    'video/avi'      : 'video',
                    'video/quicktime': 'video',
                    'video/x-ms-wmv' : 'video',
                    "audio/webm"     : 'audio',
                    "image/svg+xml"     : 'image',
                    "text/html"     : 'document',
                    "text/css"     : 'document',
                    "application/x-zip-compressed"     : 'document',
                    ""     : 'document',
                    "application/x-gzip"     : 'document'
                    };
                
                    return types[file.type] || 'unknown';
                }; 
                
            const generateUniqueId=()=>{
                let d = new Date();
                let msVal = d.valueOf();
                 return uuidv4()+msVal
                }
            //-------------------------------------------------------- 


            useEffect(()=>{
                setData('message',NameFile)
                console.log(NameFile);
            },[NameFile])

                const MAX_BEYTS = 2139095040;
                const test_Validation_MAX_BEYTS=(filesDt)=>{
                    let test = true
                    for (let i = 0; i < filesDt.length; i++) {
                        if(MAX_BEYTS>filesDt[i].size){
                            test = false
                            break
                        }
                        return test
                    }

                }
                const HandelAddFile=(event)=>{
                    if (test_Validation_MAX_BEYTS(Array.from(event.target.files))) {
                        Toast.fire({
                            icon: 'error',
                            title: `Cannot upload files more than 2GB`
                          })
                        ;
                        setNameFile(null);
                        setUrlFile(null)
                        reset()
                        return;
                    }else{
                        setNameFile(Array.from(event.target.files))
                        let tabl = []
                        let ID_unique = []
                        for (let i = 0; i < event.target.files.length; i++) {
                            const url = URL.createObjectURL(event.target.files[i])
                            tabl.push(url)
                            ID_unique.push(generateUniqueId())
                        }
                        setUrlFile(tabl)
                        setData('Id_Msg',ID_unique)
                        console.log('N nnnnnnnnnnnnnnnnnn' , event.target.files);
                    }
                    }
// --------------------------------------------------------------------------------------------------------------
// ------------------------------------------------Record Audio--------------------------------------------------
                            

        const cancelRecording = () => {
            setAudioBlob(null);
            setMediaRecorder(null);
            audioContext.close();
            setAudioContext(null);
            setAnalyser(null);
            isRecording && mediaRecorder.stop();
            setIsRecording(false);
            reset()
        };
        
// --------------------------------------------------------------------------------------------------------------
const Test_File=()=>{
    let test = true;
    for (let i = 0; i < NameFile.length; i++) {
        if (getFileType(NameFile[i]) === 'unknown') {
            test = false
            break;
        }
    }
        return test
}
// --------------------------------------Submit message
    const submit_Message=(e)=>{
        e.preventDefault();
    
    //  --------code_Message

    const d = new Date();
    const msVal = d.valueOf();
    const code_m = uuidv4()+msVal
        if (NameFile && UrlFile ) {
            console.log('111111111112222222222222222',NameFile);
            // status_Msg =  NameFile[i].type.split('/')[0]=="application"?'file':'image'
            if (Test_File()) {
                
            
            for (let i = 0; i < UrlFile.length; i++) {

                const code_m = uuidv4()+msVal
                var fileType = getFileType(NameFile[i]);
               
                //  ----------message File
            if (fileType != 'unknown') {
                setMsg(msg=>[...msg,
                    {
                        id : code_m ,
                        status_Message : fileType,
                        user_id: AuthUserId.id,
                        created_at: new Date().toISOString(),
                        chat_id:message_in_rooms.id,
                        message: UrlFile[i],
                        users:AuthUserId,
                        reports:data.reportMsg?{"report_messages":data.reportMsg}:null,
                        is_Locale:true,
                        Originale_Name_File : NameFile[i].name,
                        sizeFile : NameFile[i].size,
                        ID_Msg : data.Id_Msg[i]
                        
                    },
                ]
            )
            }
                
        
        }
                updateLastMessage(
                    message_in_rooms.id,
                    {
                        id : code_m ,
                        status_Message : fileType,
                        user_id: AuthUserId.id,
                        created_at: new Date().toISOString(),
                        chat_id:message_in_rooms.id,
                        message: UrlFile[UrlFile.length-1],
                        users : AuthUserId,
                        ID_Msg : data.Id_Msg[UrlFile.length-1]
                    }
                    );
        }else{
            // alert('problem!!!')
        }
            //  ----------message Text 

        }else{
            let message_context,Type_msg
            if(audioBlob){
                message_context = audioBlob;
                Type_msg = getFileType(data.message);
                cancelRecording()
            }else{
                message_context = data.message;
                Type_msg = 'text';

            }
            setMsg([...msg,
                {
                    id : code_m ,
                    status_Message : Type_msg,
                    user_id: AuthUserId.id,
                    created_at: new Date().toISOString(),
                    chat_id:message_in_rooms.id,
                    message: message_context,
                    users:AuthUserId,
                    is_Locale:true,
                    reports:data.reportMsg? {"report_messages":data.reportMsg}:null,
                    ID_Msg : data.Id_Msg

                    
                },
            ]
        )
        // -----------
        updateLastMessage(message_in_rooms.id,{ 
            id : code_m ,
            status_Message : Type_msg,
            user_id: AuthUserId.id,
            created_at: new Date().toISOString(),
            chat_id:message_in_rooms.id,
            message: message_context,
            users:AuthUserId,
            ID_Msg : data.Id_Msg
        });

        
        }
        
    
   
        /**
         * @POST_MAX_SIZE : 2040M
         * 
         * @upload_max_filesize : 2040M
         */  
            window.scrollTo(0,document.body.scrollHeight);
            e.target.reset()
            setUrlFile(null);
            setNameFile(null);
            // setData('reportMsg',null)
            // setData('message',null)
            // setData('Id_Msg',null)
            reset()
            

        /**
         * @Post_Message
         */
        
          post(route('Message.send'),{
            onSuccess: (response) => {
                // alert('success')
                if(response.props.flash.message_type_file.status===5005){
               
                  Toast.fire({
                    icon: 'error',
                    title: response.props.flash.message_type_file.message
                  })
                }
             
            }
        })
    }



    // -------------------------------------------------------Key down ---------------------------

    const handleKeyDown = (event) => {
        if (event.key !== "Enter") {
            window.Echo.join(`room.${room_ID}`).whisper(
                "typing",
                AuthUserId
            );
        }
    };

    // --------------------------------------Get Event message ---------------------------------------------

    useEffect(
            ()=>{

                window.Echo.join(`room.${room_ID}`)
            .here((users) => {
                // this.setState({ activeUsers: users });
                // console.log('I m here');
            })
            .joining((user) => {
                // this.setState({
                //     activeUsers: [...this.state.activeUsers, user],
                // });

                // console.log('I m Active',user);
                setIsShowUserMsg(user);

                if (ShowTimer || audioBlob) {
                    clearTimeout(ShowTimer);
                }

                setShowTimer( setTimeout(() => {
                    setIsShowUserMsg(null);
                    }, 5000),
                );

            })
            .leaving((user) => {
                // this.setState({
                //     activeUsers: this.state.activeUsers.filter(
                //         (u) => u.id != user.id
                //     ),
                // });

                // console.log('leaving'+ user);
            })
            .error((error) => {

                // console.log("echo:error", error);
            })

            .listen("SendMessage", (event) => {
      

                // console.log('LAste-message',event);

                setMsg(msg=>[...msg,event])
                // ****************************************
                updateLastMessage(message_in_rooms.id,event)
                

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
            }
        ,[])
        // ----------------------------Rports message ---------------------------------------------
        const handlerReports=(Codmsg)=>{

            let table = msg.find(itms=>itms.ID_Msg == Codmsg)

            setReportsOnInput(table);
            
            setData('reportMsg',table)
        }
        

        // const button=()=>{
        //     console.log(audioBlob);
        // }
        
    return ( 
    <>
     <main className="main is-visible" data-dropzone-area="">
        
{/* <button type="button" style={{color:"red"}} onClick={button}>rdddddddddded</button> */}
       
         <div className="container h-100">

<div className="d-flex flex-column h-100 position-relative">
    {/* <!-- Chat: Header --> */}
                {message_in_rooms.Status_Chat=="user"? 
                <HeaderChat typingUser={typingUser}
                             RecordingUser={RecordingUser} IsShowUserMsg={IsShowUserMsg}
                             DataRoom={DataRoom} Path_Asset={Path_Asset}/> 

                : <HeaderChat_Group  typingUser={typingUser} DataRoom={DataRoom} 

                                    RecordingUser={RecordingUser} Path_Asset={Path_Asset}
                        />}
    {/* ---------------- */}
           

    {/* <!-- Chat: Content   style={{overflow:'auto'}}scroll-region--> */}

        <div className="chat-body hide-scrollbar flex-1 h-100" ref={sCrollHeig} >
    <div className="chat-body-inner">
    <div className="py-6 py-lg-12" >
        {
        msg.length !==0 ? msg.map((msgs,i)=>{
            if (AuthUserId.id == msgs.users.id) {

            return <Message_From_user 
                        processing={processing} 
                        Path_Asset={Path_Asset}  
                        key={i} 
                        datamessage={msgs}  
                        reportsButtons={handlerReports}
                        
                        setMessageDelete={setMessageDelete}/>
            }else{
                return  <Message_To_User 
                        processing={processing} 
                        Path_Asset={Path_Asset} 
                        key={i} 
                        datamessage={msgs}  
                        reportsButtons={handlerReports}
                        setMessageDelete={setMessageDelete}/>
            }
        
    
    })
        :
                <NoMessag/>
        }
    
    </div>
    </div>
    </div><br /><br /><br/>

    {/* <!-- Chat: Footer Input with message --> */}

        <InputChat
        Submit={submit_Message}
        handleOnKeyDown={handleKeyDown}
        handleSetData={onchangeData}
        ReportsOn_Input={data.reportMsg}
        setReportsOnInput={setData}
        Data={data}
        inputFile = {inputFile}
        HandelAddFile={HandelAddFile}
        setNameFile ={setNameFile}
        
        NameFile={NameFile}
        UrlFile={UrlFile}
        setUrlFile={setUrlFile}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
        audioBlob={audioBlob}
        setAudioBlob={setAudioBlob}
        mediaRecorder={mediaRecorder}
        setMediaRecorder={setMediaRecorder}
        audioContext={audioContext}
        setAudioContext={setAudioContext}
        analyser={analyser}
        setAnalyser={setAnalyser}
        frequencyData={frequencyData}
        setFrequencyData={setFrequencyData}
        cancelRecording={cancelRecording}
        setData={setData}
        />
</div>

</div>
    </main>
    
    </>
     );
}

// ---------------------------------GROUP CHAT ----------------------------------------

 function Pick_a_person_from_left_menu() {
    const url = usePage().props.url
    return ( 
    <>
     <main className="main">
                <div className="container h-100">

                    <div className="d-flex flex-column h-100 justify-content-center text-center">
                        <div className="mb-6">
                            <span className="icon icon-xl text-muted">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </span>
                        </div>

                        <p className="text-muted">Pick a person from left menu, <br/> and start your conversation.</p>
                    </div>

                </div>
            </main>
            {/* <AddUser/> */}
    </>
     );
}



// ----------------------------EXPORTATION-------------------------------------------

export {Pick_a_person_from_left_menu} ;
export default Chat_Room_Message;