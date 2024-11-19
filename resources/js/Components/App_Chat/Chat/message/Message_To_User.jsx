import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import formatDate from "../../FormatData";
import DropDown_Message from "./DropDown_Message";
import SVG_IMAGE from "../../SVG/SVG_IMAGE";
import MsgImage, { MsgAudio, MsgDocument, MsgVideo } from "./msg";

function Message_To_User({datamessage,reportsButtons , Path_Asset , setMessageDelete}) {
    
    // console.log('To' , datamessage.message , datamessage.reports      );
    
    const [report,setRpt] = useState(datamessage.reports && datamessage.reports.report_messages)
    
    const [etatFlMsg,setetatMsg]=useState('text')


    const [ETATEIMG,setETATEIMG]=useState(false)
    const img = new Image();
    img.onload = function() {
    //   console.log('Image successfully loaded.');
      setETATEIMG(true)
    };
    img.onerror = function() {
    //   console.log('Error loading image.');
    };


    const Message=()=>{
        if (datamessage.status_Message=='text') {
            
            etatFlMsg!='text'&& setetatMsg('text')

            return <p className="text-dark">{datamessage.message}</p>

        }else if(datamessage.status_Message=='image'){

                etatFlMsg!='gallery' && setetatMsg('gallery')

            if (datamessage.is_Locale) {
              
            return <MsgImage src={`${datamessage.message}`}   srcOrgFil={`${datamessage.Originale_Name_File}`}/>
            }
            else{
                    img.src = `${Path_Asset}storage/${datamessage.message}`;

                        {return ETATEIMG?<MsgImage src={`${Path_Asset}storage/${datamessage.message}`} 
                        srcOrgFil={`${datamessage.Originale_Name_File}`}/>
                    :
                    <div className="_Spinners">
                        <div class="loader"></div>
                    </div>
                    
                        }
        }
    }else if(datamessage.status_Message=='document'){

        (etatFlMsg!='text') && setetatMsg('text')

        if (datamessage.is_Locale) {
              
            return <MsgDocument srcDoc={`${datamessage.message}`} 
              srcOrgFil={`${datamessage.Originale_Name_File}`}
              srcSizeFil={`${datamessage.sizeFile}`} etat='local'/>
            }
            else{
            return <MsgDocument srcDoc={`${Path_Asset}storage/${datamessage.message}`}
                    srcSizeFil={`${datamessage.sizeFile}`}  srcOrgFil={`${datamessage.Originale_Name_File}`} etat='serv'/>}


    }else if (datamessage.status_Message=='video') {

        etatFlMsg!='gallery' && setetatMsg('gallery')
        if (datamessage.is_Locale) {
              
            return <MsgVideo srcVideo={`${datamessage.message}`}  Path_Asset={Path_Asset}/>
            }
            else{
            return <MsgVideo srcVideo={`${Path_Asset}storage/${datamessage.message}`} Path_Asset={Path_Asset}/>
        }
}else if (datamessage.status_Message=='audio') {

    etatFlMsg!='gallery' && setetatMsg('gallery')
    if (datamessage.is_Locale) {
          
        return <MsgAudio srcAudio={`${datamessage.message}`}  />
        }
        else{
        return <MsgAudio srcAudio={`${Path_Asset}storage/${datamessage.message}`}/>
    }
}

    }
    return ( 
    <>
                         {/* <!-- Message --> */}
                         <div className="message">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
        <img className="avatar-img" src={`${Path_Asset}storage/${datamessage.users.image}`} alt=""/>
    </a>

    <div className="message-inner">
        <div className="message-body">
            <div className="message-content">
                <div className={`message-${etatFlMsg}`}>
                    
                        <h6 className="text-reset text-truncate">{datamessage.users.name}</h6>

                    {report && <blockquote className="blockquote overflow-hidden">
                            
                            <h6 className="text-reset text-truncate">{report.users?report.users.name:'Vous'}</h6>
                            <p className="small text-truncate">{report.message}</p>
                            
                        </blockquote>
                        }

                        
                        {Message()} 
                
                
                </div>

                {/* <!-- Dropdown --> */}
                        <DropDown_Message

                         reportsButton={()=>reportsButtons(datamessage.ID_Msg)}
                         status_Message={datamessage.status_Message}
                         path_file = {`${datamessage.message}`}
                         Originale_Name_File = {`${datamessage.Originale_Name_File}`}
                         Path_Asset={Path_Asset}
                         Id_msage={datamessage.ID_Msg}
                         Id_Reply={report ? report:null}
                         setMessageDelete={setMessageDelete}
                        
                        />
            </div>
        </div>

        <div className="message-footer">
            <span className="extra-small text-muted">{formatDate(datamessage.created_at)}</span>
        </div>
    </div>
</div>

        
    </>
     );
}

export default Message_To_User;