import { Link, Head, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import '../../css/main.css'
export default function Welcome(props) {
    // ************************************************

    // ************************************************
    const ref = usePage().props.ziggy.url
    console.log(ref);

    return (

        <>

            <Head title="B-chat" />
            <header class="header navbar-area">
  <nav class="navbar navbar-expand-md navbar-light py-3" aria-label="Main">
    <div class="container">
        {/* <img src={`${ref}/storage/images/avatar-1.png`} alt="Boost Theme" width={'10%'} height={'10%'}/> */}
        <svg data-v-70b83f88="" version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="140px" height="90px" viewBox="0 0 340.000000 250.000000" preserveAspectRatio="xMidYMid meet" color-interpolation-filters="sRGB" style={{margin: "auto;"}}> 
                   
                   <g data-v-70b83f88="" fill="#28282d" class="bordersvg b-d1" transform="translate(69.66999816894531,80.19000244140625)"><polyline stroke="#28282d" strokeWidth="3" fillOpacity="0" fill="#28282d" points="100.33000183105469,20 100.33000183105469,10 0,0 0,89.61999893188477 100.33000183105469,79.61999893188477 100.33000183105469,69.61999893188477"></polyline> <g transform="translate(0,20)"><g><rect data-gra="graph-name-bg" strokeWidth="2" class="i-icon-bg" x="0" y="0" width="200.66000366210938" height="49.619998931884766" fillOpacity="0"></rect> </g> <g transform="translate(10,3)"><g data-gra="path-name" fillRule="" class="tp-name"><g transform="scale(1)">
                    <g><path d="M2.34-39.9L2.34-34.8 5.76-34.62 5.76-6.72C5.76-5.52 5.04-5.16 4.02-5.04L2.04-4.86 2.04 0 18.9 0C28.86 0 34.26-4.14 34.26-11.94 34.26-17.22 31.2-20.34 26.7-21.48 29.94-23.16 32.22-25.92 32.22-29.88 32.22-37.86 26.04-39.9 19.26-39.9ZM13.08-18.18L19.02-18.18C23.76-18.18 26.52-16.02 26.52-12 26.52-8.34 24.6-5.64 18.72-5.64L13.08-5.64ZM13.08-34.38L17.94-34.38C21.84-34.38 24.78-33.42 24.78-29.1 24.78-25.92 22.68-23.52 17.52-23.52L13.08-23.52ZM37.92-14.52L53.64-14.52 53.64-20.04 37.92-20.04ZM80.58-34.2C81.66-33.84 81.84-33.36 81.84-32.22L81.84-27.54 87.96-27.96 87.96-38.16C84.36-39.84 80.22-40.62 76.68-40.62 67.44-40.62 57.84-35.4 57.84-19.74 57.84-6.06 64.5 0.78 76.68 0.78 80.52 0.78 85.26 0.06 88.56-1.68L88.56-12.06 82.44-12.48 82.44-7.68C82.44-6.54 82.26-6.06 81.18-5.7 80.04-5.34 78.48-5.16 76.8-5.16 68.46-4.98 65.34-10.8 65.34-20.22 65.34-29.28 69.12-34.68 76.68-34.68 77.88-34.68 79.44-34.56 80.58-34.2ZM97.2-6.72C97.2-5.22 96.6-4.86 95.46-4.74L93.48-4.56 93.48 0 107.76 0 107.76-4.8 104.34-4.98 104.34-19.5C104.34-22.62 106.56-25.56 110.76-25.56 114.6-25.56 115.44-22.74 115.44-19.08L115.44-6.72C115.44-5.22 114.84-4.86 113.7-4.74L111.72-4.56 111.72 0 126 0 126-4.8 122.58-4.98 122.58-20.64C122.58-27.72 119.04-31.08 113.04-31.08 109.08-31.08 106.08-29.22 104.28-26.64L104.28-42.78 93.6-42.78 93.6-37.8 95.7-37.68C96.84-37.62 97.2-37.26 97.2-35.94ZM156.48-28.98C152.16-30.6 147.78-31.08 145.8-31.08 135-31.08 129.96-24.36 129.96-13.8 129.96-5.22 133.5 0.78 141.96 0.78 145.26 0.78 148.32-0.84 150.18-3.54L150.36-3.48 150.36 0 159.9 0 159.9-4.8 157.98-4.92C156.84-4.98 156.48-5.34 156.48-6.66ZM149.52-9.54C149.52-6.96 147.24-4.32 143.52-4.32 138.48-4.32 137.28-9.06 137.28-14.04 137.28-20.52 139.2-25.86 144.9-25.86 146.76-25.86 148.62-25.5 149.52-25.08ZM169.02-36.54C167.76-33.12 166.32-29.88 162.12-29.52L161.52-25.14 165.78-25.14 165.78-9.12C165.78-4.92 165.72 0.84 175.08 0.84 177.9 0.84 180.9 0 182.7-1.26L180.9-5.88C179.94-5.28 178.44-4.62 176.82-4.62 174.36-4.62 172.92-5.7 172.92-9.36L172.92-25.14 180.3-25.14 180.9-30.18 172.92-30.18 172.92-36.54Z" transform="translate(-2.0399999618530273, 42.779998779296875)"></path></g> </g></g> </g></g></g><defs v-gra="od"></defs></svg>
      

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                                            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        
                                        <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav mt-3 mt-md-0 ms-auto">
        {props.auth.user ? (
          <Link href={route('Chat.index')} class="nav-link px-md-3 fs-15 " >Home</Link>
          ) : (
          <Link href={route('register')} class="nav-link px-md-3 fs-15" >Register</Link>
)}
        </div>
        {!props.auth.user && <Link href={route('login')} class="buttonss py-2"> Login
        </Link>}




      </div>
    </div>



  </nav>
</header>
            <section id="home" class="hero-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-12 col-12">
                            <div class="hero-content">
                                <h1 class="wow fadeInLeft" data-wow-delay=".4s">Connect with the world, </h1>
                                <p class="wow fadeInLeft" data-wow-delay=".6s">one conversation at a time - with B-Chat.
                                    Experience seamless communication and stay connected with friends, family,
                                    and colleagues, anytime and anywhere. Register in B-chat now and start chatting!</p>
                                <div class="button wow fadeInLeft" data-wow-delay=".8s">
                                    <a href={route('Chat.index')} class="btn">
                                        Get Started</a>
                                        

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 col-12">
                            <div class="hero-image wow fadeInRight" data-wow-delay=".4s">
                                <img src={`${ref}/storage/SVG/svgChat.svg`} alt="#" />
                            </div>
                            
                            {/* <img src= alt="#" /> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
