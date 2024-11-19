import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import SVG_FIle from "../SVG/SVG_FIle";
// import Dropzone from 'react-dropzone'

function InputChat2({handleSetData     ,Submit           , handleOnKeyDown  , 
                    setReportsOnInput , inputFile       , setNameFile      ,    
                    NameFile          , HandelAddFile   , UrlFile          , 
                    Data              , isRecording     , setIsRecording   ,
                    setAudioBlob      , mediaRecorder   , setMediaRecorder , 
                    audioContext      , setAudioContext , analyser         ,
                    setAnalyser       , frequencyData   , setFrequencyData , 
                    setUrlFile        , audioBlob       , ReportsOn_Input  ,
                    cancelRecording   , setData}) {
//  -----------------Recorde Audio -------------------------



const startRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    const context = new AudioContext();
    setAudioContext(context);
    const source = context.createMediaStreamSource(stream);
    const analyser = context.createAnalyser();
    analyser.fftSize = 2048;
    setAnalyser(analyser);
    source.connect(analyser);
    recorder.start();
  });
};

useEffect(() => {
  if (audioContext && analyser) {
    const updateFrequencyData = () => {
      
    const newFrequencyData = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(newFrequencyData);
    setFrequencyData([...newFrequencyData]);

    };
    const interval = setInterval(updateFrequencyData, 50);
    return () => clearInterval(interval);
  }
  console.log('ddddd');
}, [audioContext, analyser,frequencyData]);


const stopRecording = () => {
  setIsRecording(false);
  if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        mediaRecorder.ondataavailable = (e) => {
        const audioBlob = new Blob([e.data], { type: "audio/webm" });
        setAudioBlob(URL.createObjectURL(audioBlob));
        setData('message',audioBlob)
             
    };
  }
};


const getFrequencyHeight = (frequency) => {
  return Math.min(Math.max((frequency / 190) *150, 2), 100);

};

{[].forEach.call(document.querySelectorAll("[data-horizontal-scroll]"),(function(e)
{function o(o)
    {o=window.event||o;const i=Math.max(-1,Math.min(1,o.wheelDelta||-o.detail));e.scrollLeft-=28*i,o.preventDefault()}e.addEventListener?(e.addEventListener("mousewheel",o,!1),e.addEventListener("DOMMouseScroll",o,!1)):e.attachEvent("onmousewheel",o)}))}
// ---------------------------------------------------------

    return (
         <>
<div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0 ">    
<form 
            className="chat-form rounded-pill bg-dark" 
            onSubmit={Submit}
            enctype="multipart/form-data"
>


            <div className="row align-items-center gx-0">
                {/* <!-- Chat: File --> */}   
                
                {ReportsOn_Input && 
                    <blockquote 
                        className="blockquote overflow-hidden  py-4 px-4" 
                        style={{opacity:1,borderLeft:"outset #05203c  ",position:"relative",left:5}}
                    >
                        <h6 
                            className="text-reset text-truncate">
                            {ReportsOn_Input.users.name}
                        </h6>
                        <p 
                            className="small text-truncate">
                            {ReportsOn_Input.message}
                        </p>

                        <div 
                        className="position-absolute top-0 end-0 py-2" 
                        style={{paddingRight:10}} >
                            <button 
                            type="button"
                            className="btn-close opacity-100"  
                            aria-label="Close"
                            onClick={()=>{setReportsOnInput('reportMsg',null)}}>
                            </button>
                        </div>

                    </blockquote> 
                    }
                <div className="col-auto">
                      {/* Message riporst */}
                    <input
                        type="file"
                        name="file"
                        onChange={HandelAddFile}
                        ref={inputFile} 
                        style={{display:"none"}}
                        multiple
                    />
                    {isRecording || audioBlob ? (
                    <>
                    {/* -----------------Delete or cancel recording----------------------- */}
                    <button onClick={cancelRecording} 
                    type="button"
                        className="btn btn-icon btn-link text-body rounded-circle ">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="currentColor" 
                            className="bi bi-trash-fill w-50 h-50 " viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>
                    </>
                    ):(
                        <>
                    <button 
                        type="button"                     
                        onClick={() => inputFile.current.click()}
                        className="btn btn-icon btn-link text-body rounded-circle"
                        id="dz-btn" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-paperclip">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 
                                    4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                    </path>
                            </svg>
                    </button>
                </>)}

                    {/* ----------Button Start Recorde------------ */}
                                  

                </div>

                <div className="col-10-5">
                  
                                {/* ------------------- */}
                
                    <div className="input-group">
                    {isRecording ? (
                        <>

                        
        
                        <div className="recording-frequency bak">
                            {frequencyData.slice(0, 300).map((frequency, index) => (
                            <div
                                key={index}
                                className="recording-frequency-bar"
                                style={{ height:`${getFrequencyHeight(frequency)}%` }}
                            />
                            ))}
                        </div>
                        </>
                    ):
                    <>  
                    {audioBlob?
                        <audio src={audioBlob} controls className="recording-frequency" />                    
                      :<>  
                     {
                     !UrlFile ?   
                        <input 
                            type={'text'}
                            className="form-control px-0" 
                            placeholder="Type your message..." 
                            onKeyDown={handleOnKeyDown}
                            onChange={(e)=>handleSetData(e)}
                            name='text'
                            id='text'
                            required
                            //  rows="1" 
                            //  data-emoji-input="" 
                            //  data-autosize="true"
                         />
                          :
                          <>
                          
<div  className=" bg-dark dz-preview px-2 " id="dz-preview-row" data-horizontal-scroll  >
{                                  UrlFile &&  UrlFile.map((itm,i)=>
                                    { 
                                        console.log("N......",NameFile[i].type.split('/')[0]);
                                        if (NameFile[i].type.split('/')[0]=="image") {
                                            
                                            return  <div key={i} class=" theme-file-preview position-relative mx-2 dz-processing dz-image-preview dz-error dz-complete">    <div class="avatar avatar-lg dropzone-file-preview">        <span class="avatar-text rounded bg-secondary text-body file-title" title="Capture d’écran 2023-04-06 094419.png">            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>        </span>    </div>    <div class="avatar avatar-lg dropzone-image-preview">      
          <img src={itm} class="avatar-img rounded file-title" data-dz-thumbnail="" alt="Capture d’écran 2023-04-06 094419.png" title="Capture d’écran 2023-04-06 094419.png0"/>    
          
          </div>   
           <a class="badge badge-circle bg-body text-danger position-absolute top-0 end-0 m-2" href="#" data-dz-remove="">       <button 
                            type="button"
                            className="btn-close opacity-100"  
                            aria-label="Close"
                            onClick={()=>{setReportsOnInput('reportMsg',null)}}>
                            </button>    </a></div>
          
                                        }
                                        else
                                        {
                                            return  <div  key={i} class=" theme-file-preview position-relative mx-2 dz-processing dz-image-preview dz-error dz-complete">    <div class="avatar avatar-lg dropzone-file-preview">        <span class="avatar-text rounded bg-secondary text-body file-title" title="Capture d’écran 2023-04-06 094419.png">            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>        </span>    </div>    <div class="avatar avatar-lg dropzone-image-preview">      <SVG_FIle   class="d-block w-75 mx-auto rounded"    
                                            style={{maxHeight:"15em"}} />   
                                              
                                              </div>    <a class="badge badge-circle bg-body text-white position-absolute top-0 end-0 m-2" href="#" data-dz-remove="">        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a></div>
                                               
                                        
                                        }
                           
                         
                                    }
                                   
                                    )}
                                   </div>

                        {/* <span 
                            className="border border-light bg-light  rounded mx-auto w-100"
                         >    */}
                         {/* <div className=" opacity-100 btn position-absolute top-0 start-0 " 
                            >PDF : 0</div>  */}

                            {/* <button 
                                type="button"
                                className="btn-close opacity-100 btn btn-outline-danger 
                                position-absolute top-0 end-0 py-4"  
                                aria-label="Close"
                                onClick={()=>{setUrlFile(null);setNameFile(null)}}> 
                            </button> */}
                            {/* <div class="row gx-3"> */}
                            {/* <div  
                                id="carouselExampleFade" 
                                class="carousel slide carousel-fade" >

                                <div class="carousel-inner"> */}
    
                                           
                                    {/* {
                                    UrlFile.map((itm,i)=>
                                    { 
                                        console.log("N......",NameFile[i].type.split('/')[0]);
                                        if (NameFile[i].type.split('/')[0]=="image") {
                                            
                                            return <div key={i} 
                                                        className={`carousel-item ${i===0?'active':''}` }>
                                                        <img src={itm} 
                                                            className="d-block  mx-auto rounded" 
                                                            alt="..." style={{maxHeight:"19.5em"}} 
                                                        />
                                                    </div>
                                        }
                                        else
                                        {
                                            return <div key={i} 
                                                        className={`carousel-item ${i===0?'active':''}` }>
                                        
                                                        <div class="card" >
                                                            <SVG_FIle   class="d-block w-75 mx-auto rounded"    
                                                                        style={{maxHeight:"15em"}} />
                                                            <div class="card-body mx-auto ">
                                                                {NameFile[i].name}
                                                            </div>
                                                        </div>
                                            
                                                    </div>
                                        }
                           
                         
                                    }
                            
                                    )}   */}
                                {/* </div> 
                                <button class="carousel-control-prev" 
                                        type="button" 
                                        data-bs-target="#carouselExampleFade" 
                                        data-bs-slide="prev">
                                    <span 
                                            class="carousel-control-prev-icon" 
                                            aria-hidden="true">
                                    </span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" 
                                        type="button" 
                                        data-bs-target="#carouselExampleFade" 
                                        data-bs-slide="next">
                                    <span class="carousel-control-next-icon" 
                                        aria-hidden="true">

                                    </span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            
                        
                            </div>
                        </span> */}
                     </>}
                </>
                             } 

</>    
//  }</>) 
  }


                    {/* value={data.text} */}
                        {/* </textarea> */}
                {/* <!-- Chat:  😂 😂 😂 😂 😂 😂 --> */}
                        {/* <a href="#" className="input-group-text text-body pe-0" data-emoji-btn="">
                            <span className="icon icon-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                            </span>
                        </a> */}
                    </div>
                </div>



                        {/* <!-- Chat: Button  --> */}

                <div className="col-auto position-absolute end-0 px-3">
              {audioBlob||Data.message ? (
                    <>
                    
                     {/* -------button Sende message------------ */}
                                <button className="btn btn-icon btn-primary rounded-circle ms-5" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                </button>
                            </>
                            ) : (
                                
                                isRecording ? (
                                    // button Stop Record------------
                                <>
                                    
                                    <button onClick={stopRecording} 
                                            type="button"
                                            className="btn btn-icon btn-link text-body rounded-circle  btn-info">
                                          
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-100 h-100 text-danger" fill="currentColor" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                                                    </svg> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                    fill="currentColor" className="bi bi-pause-circle-fill  w-75 h-75"
                                                    style={{color:"#fff"
                                                       }} 
                                                       viewBox="0 0 16 16">
                                                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                                                    </svg>
                                        </button>
                                </>) :
                           ( 
                           // button record------------
                           <button onClick={startRecording} 
                                    type="button"
                                    className="btn btn-icon btn-primary rounded-circle"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="64"
                                 style={{color:"#fff"
                                    }} height="64" 
                                    fill="currentColor"
                                    class="bi bi-mic-fill" 
                                    viewBox="0 0 16 16" >
                                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                                
                            </button>)
                        )}
                </div>
            </div>
        </form>
    </div>
    
    </>
     );
}

export default InputChat2;