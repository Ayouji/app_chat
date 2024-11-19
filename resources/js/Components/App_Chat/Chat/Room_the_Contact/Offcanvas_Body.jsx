import { Context_Data } from "@/CreatContexts";
import { useContext } from "react";

import '@/template/jquery.fancybox'
import '../../../../../css/jquery.fancybox.css'
function Offcanvas_Body({data_Group}) {
    const {Path_Asset}=useContext(Context_Data)
    
    return (    <>
                      <div className="text-center py-10">
                        <div className="row gy-6">
                            <div className="col-12">
                                <div className="avatar avatar-xl mx-auto">
                                <a href={Path_Asset+'storage/'+data_Group.image} 
                                    data-fancybox="image" 
                                    >
                                    <img src={Path_Asset+'storage/'+data_Group.image} alt="#" className="avatar-img"/>
                                    </a>
                                </div>
                            </div>

                            <div className="col-12">
                                <h4>{data_Group.titre}</h4>
                                {/* <p>Bootstrap is an open source <br/> toolkit for developing web with <br/> HTML, CSS, and JS.</p> */}
                                <p className="text-wrap ">{data_Group.Description} </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Avatar --> */}

                    {/* <!-- Tabs --> */}
                    <ul className="nav nav-pills nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-bs-toggle="pill" href="#offcanvas-group-tab-members" role="tab" aria-controls="offcanvas-group-tab-members" aria-selected="true">
                                People
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-group-tab-media" role="tab" aria-controls="offcanvas-group-tab-media" aria-selected="true">
                                Media
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-group-tab-files" role="tab" aria-controls="offcanvas-group-tab-files" aria-selected="false">
                                Files
                            </a>
                        </li>
                    </ul>
                </> );
}

export default Offcanvas_Body;