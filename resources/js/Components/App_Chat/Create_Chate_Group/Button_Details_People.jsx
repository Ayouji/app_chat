function Button_DP() {
    return ( 
    <>
     <ul className="nav nav-pills nav-justified" role="tablist">
 <li className="nav-item">
     <a className="nav-link active" data-bs-toggle="pill"
      href="#create-chat-info" role="tab" aria-controls="create-chat-info"
       aria-selected="true">
         Details
     </a>
 </li>

<li className="nav-item">
     <a className="nav-link" data-bs-toggle="pill"
      href="#create-chat-members" role="tab"
       aria-controls="create-chat-members" 
       aria-selected="true">
         People
     </a>
 </li>
 </ul>
    </> 
    );
}

export default Button_DP;