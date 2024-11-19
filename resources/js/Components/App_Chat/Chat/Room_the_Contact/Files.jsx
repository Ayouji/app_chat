import { Context_Data } from "@/CreatContexts";
import formatFileSize from "../../formatFileSize";
import { useContext } from "react";

function Files({messageAll}) {
    const {Path_Asset}=useContext(Context_Data)
    
    return (    <>
                    <div class="tab-pane fade" id="offcanvas-group-tab-files" role="tabpanel">
                            <ul class="list-group list-group-flush">

                                {/* <!-- Item --> */}
                                {
                                messageAll.map((itms,i)=>{
                                    let srcFile = null
                                    if (itms.is_Locale) {
              
                                        srcFile = `${itms.message}`
                                        }
                                        else{
                                         srcFile =`${Path_Asset}storage/${itms.message}`
                                    }

                            if (itms.status_Message!=="text" || itms.status_Message!=="audio")
                            {                                 
                                return <li class="list-group-item" key={i}>
                                    <div class="row align-items-center gx-5">
                                        {/* <!-- Icons --> */}
                                        <div class="col-auto">
                                            <div class="avatar-group">
                                                <a href="#" class="avatar avatar-sm">
                                                    <img src="assets/img/avatars/6.jpg" class="avatar-img" alt="#"/>
                                                </a>

                                                <a href="#" class="avatar avatar-sm">
                                                    {
                                                    itms.status_Message==="document"?
                                                    
                                                    <span class="avatar-text bg-primary">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                                  
                                                  </span>
                                                         :
                                                   itms.status_Message==="video"?
                                                   <span class="avatar-text bg-warning">
                                                   
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                                                   
                                                   </span>
                                                   :
                                                <span class="avatar-text bg-success">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                                   
                                                   </span>
                                                   }
                                                </a>
                                            </div>
                                        </div>
                                        {/* <!-- Icons --> */}

                                        {/* <!-- Text --> */}
                                        <div class="col overflow-hidden">
                                            <h5 class="text-truncate">
                                                <a href="#">{itms.Originale_Name_File}</a>
                                            </h5>
                                            <ul class="list-inline m-0">
                                                <li class="list-inline-item">
                                                    <small class="text-uppercase text-muted">{formatFileSize(itms.sizeFile)}</small>
                                                </li>

                                                <li class="list-inline-item">
                                                    <small class="text-uppercase text-muted">{itms.Originale_Name_File.split('.')[1].toUpperCase()}</small>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Text --> */}

                                        {/* <!-- Dropdown --> */}
                                        <div class="col-auto">
                                            <div class="dropdown">
                                                <a class="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                </a>

                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center" href={srcFile} download={itms.Originale_Name_File}>
                                                            Download
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    {/* <li>
                                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                                            Share
                                                            <div class="icon ms-auto">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                            </div>
                                                        </a>
                                                    </li> */}
                                                    {/* <li><hr class="dropdown-divider"/></li>
                                                    <li>
                                                        <a class="dropdown-item d-flex align-items-center text-danger" href="#">
                                                            <span class="me-auto">Delete</span>
                                                            <div class="icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                            </div>
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Dropdown --> */}
                                    </div>
                                </li>}
                            })}



                            </ul>
                        </div>
                </> );
}

export default Files;