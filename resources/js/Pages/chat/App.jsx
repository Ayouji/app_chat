import Authenticated from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
// import { Channel } from 'pusher-js';
import React, { useState, useEffect, useRef } from 'react';
// import { WebSocket } from 'vite';
// import { InertiaLink } from '@inertiajs/inertia-react';
import '../../bootstrap';
// auth()->user()->id
function App(props) {
    const user = usePage().props.auth.user;
    const [message, setMessage] = useState([]);
    // console.log(user.id);
    // console.log('user',user.id);
    const msg = useRef()

    const sendMSG = (e) => {
        e.preventDefault();
        // axios.post('/send-Message',{message:msg.current.value})
    }
    // const updatePost=()=>{
    //     const socketUp = new WebSocket(`ws://${window.location.hostname}:6001/socket/update-is-active?my_key=${import.meta.env.VITE_PUSHER_APP_KEY}`);
    //     // console.log(window.location.hostname);
    //     // alert('ccccccccc')
    //     socketUp.onopen = function (event){
    //         console.log('on open!!');

    //         socketUp.send(JSON.stringify({
    //             id: user.id,
    //         }))
    //         GetUserOnline()
    //     }

    //     // socket.onmessage = function (event) {
    //     //     console.log(event);

    //     // }
    // }
    // const GetUserOnline=()=>{
    //     const socket = new WebSocket(`ws://${window.location.hostname}:6001/socket/User-online-is-active?my_key=${import.meta.env.VITE_PUSHER_APP_KEY}`);
    //     // console.log(window.location.hostname);
    //     // alert('ccccccccc')
    //     socket.onopen = function (event){
    //         console.log('on open!!');

    //         socket.send(JSON.stringify({
    //             id: 1,
    //         }))

    //     }

    //     socket.onmessage = function (event) {
    //         console.log(event.data);
    //         // alert('hhhh')
    //     }
    // }
    useEffect(() => {
        // --------------public channel
        // const channel= Echo.channel("public")
        // channel.subscribed(()=>{
        //     console.log('subscribed!!');
        // }).listen('SendMessage',(event)=>{
        //     console.log(event.heya);
        //     // setMessage(event.heya);
        // })
        // ---------------- private channel 
        // const channel= Echo.private('private.2')
        // channel.subscribed(()=>{
        //         console.log('subscribed!!');
        //     }).listen('SendMessage', (event) =>{
        //         // setMessage(event.message)

        //         console.log(event)
        //     }
        //   )
        // ---------------- presence channel 
        //   const channel= Echo.join('presence.1')
        //             channel.here((user)=>{
        //                 console.log({user});
        //                     console.log('subscribed!!');
        //                 })
        //                 .joining((user)=>{
        //                     console.log({user}+ "joining");
        //                 })
        //                 .leaving((user)=>{
        //                     console.log({user}+ "leaving");
        //                 })
        //                 .listen('SendMessage', (event) =>{
        //                     // setMessage(event.message)
        //                     console.log(event)
        //                 }
        //   );
    }, []);
    const [audioBlob, setAudioBlob] = useState(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);

        const chunks = [];

        mediaRecorder.addEventListener('dataavailable', event => {
            chunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
            const audioBlob = new Blob(chunks, { type: 'audio/webm' });
            setAudioBlob(audioBlob);
        });

        mediaRecorder.start();

        setTimeout(() => {
            mediaRecorder.stop();
        }, 5000);
        console.log(audioBlob);
    };


    // updatePost()
    // GetUserOnline()
    return (
        // <Authenticated>

        <aside className="sidebar bg-light">
            {/* <div className="tab-content h-100" role="tablist">
        <div style={{textAlign:"justify",width:500,height:100,background:"green"}}>
            {message.map(itm=><p className='text-primary'>{itm.email}</p>)}
            <form id='form' onSubmit={sendMSG}>
                <div>
                    <label htmlFor="email">Message</label>
                    <input type="text" name="msg" id="msg" defaultValue={' '} ref={msg}/>
                    <button style={{background:"#c0c0c0"}}>SendMesage</button>
                </div>

            </form>

        </div>
        </div> */}

            <div>
                <button onClick={startRecording}>Start Recording</button>
                {/* <button onClick={sendAudio} disabled={!audioBlob}>Send Audio</button> */}
                <div><audio src={audioBlob}></audio></div>
            </div>

        </aside>


        // </Authenticated>
    );
}

export default App;





// const channel= Echo.join('notification.13')
// channel.here((e)=>{
//     console.log({e});
//         console.log('subscribed!!');
//     })
//     .joining((e)=>{
//         console.log({e}+ "joining");
//     })
//     .leaving((e)=>{
//         console.log({e}+"leaving");
//     })
//     .error((error) => {
//         console.log("echo:error", error);
//     })
//     .listen('.App\\Events\\SendNotification', (event) =>{
//         // setMessage(event.message)
//         console.log('event')
//     }
// );