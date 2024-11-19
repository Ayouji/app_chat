import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Liste_Contact_Friend({data}) {
    
    const {Path_Asset} = usePage().props
    const[data_contac,setDataContact]=useState([...data])
    let prevLetter = null; 
    
    const url = window.location.protocol
    
    return ( <>
    
    

                                  
                                     
                                    
    {
data_contac.sort((a, b) => (a.name > b.name) ? 1 : -1)
            .map((itm,i)=>
                              { 
                                const currentLetter = itm.name[0].toUpperCase(); // get current letter
                                                    const isFirstLetter = prevLetter !== currentLetter; // check if it's the first contact with this letter
                                                    prevLetter = currentLetter; // update previous letter to current letter
                                                
                                                  return <div key={i} className="py-2">
                                               
                                                {isFirstLetter && ( // display the letter only if it's the first contact with this letter
                                            <div className="my-3" style={{ position: "sticky", top: 0 }}>
                                                <small className="text-uppercase text-muted">{currentLetter}</small>
                                            </div>
                                            )}
                                <div className="card border-0">
                                            <div className="card-body">

                                                <div className="row align-items-center gx-5">
                                                    <div className="col-auto">
                                                        <a 
															href={Path_Asset+'storage/'+itm.image}

															data-fancybox="images" className="avatar ">
                                                            
                                                            <img className="avatar-img" src={url+"/storage/"+itm.image} alt=""/>
                                                            
                                                            
                                                        </a>
                                                    </div>

                                                    <div className="col">
                                                        <h5><a 
															href={Path_Asset+'storage/'+itm.image}

															data-fancybox="images"> {itm.name}</a></h5>
                                                        <p>{itm.is_active?'online':'offline'}</p>
                                                    </div>

                                                    <div className="col-auto">
                                                        {/* <!-- Dropdown --> */}
                                                        <div className="dropdown z-3">
                                                            <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                                            </a>

                                                            <ul className="dropdown-menu">
                                                                <li><a className="dropdown-item" href="#">New message</a></li>
                                                                <li>
                                                                    <hr className="dropdown-divider"/>
                                                                </li>
                                                                <li>
                                                                <button className="dropdown-item text-danger" >Block user</button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        </div>
                                        }
)}  
    
    </> );
}

export default Liste_Contact_Friend;