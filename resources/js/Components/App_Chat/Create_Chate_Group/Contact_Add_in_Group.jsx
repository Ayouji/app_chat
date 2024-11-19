import { useState } from "react";

function Contact_Add_in_Group({data_contact , handleChange }) {
    // console.log(data_contact);
    const[data_contac,setDataContact]=useState([...data_contact])
    let prevLetter = null; 
    return (
        
    <>
    <div className="tab-pane fade" id="create-chat-members" role="tabpanel">
                                            <nav>
                                            {
data_contac.sort((a, b) => (a.name > b.name) ? 1 : -1)
            .map((itm,i)=>
                                                  { 
                                                    const currentLetter = itm.name[0].toUpperCase(); // get current letter
                                                    const isFirstLetter = prevLetter !== currentLetter; // check if it's the first contact with this letter
                                                    prevLetter = currentLetter; // update previous letter to current letter
                                                
                                                  return <div key={i} >
                                               
                                                {isFirstLetter && ( // display the letter only if it's the first contact with this letter
                                            <div className="my-4" style={{ position: "sticky", top: 0 }}>
                                                <small className="text-uppercase text-muted">{currentLetter}</small>
                                            </div>
                                            )}

                                              {/*<!-- Card --> */} 
                                                <div className="card border-0 mt-3" >
                                                    <div className="card-body">

                                                        <div className="row align-items-center gx-5">
                                                            <div className="col-auto">
                                                                <div className={`avatar avatar-${itm.is_active ?'online':'offline'}`}>
                                                                    
                                                                    
                                                                        <span className="avatar-text">{itm.name[0]}</span>

                                                                        {/* <img className="avatar-img" src="assets/img/avatars/6.jpg" alt=""/> */}
                                                                    
                                                                    
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="col">
                                                                <h5>{itm.name}</h5>
                                                                <p>{itm.is_active ?'online':'offline'}</p>
                                                                
                                                                {/* <p>last seen 3 days ago</p> */}
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="form-check">
                                                                    <input 
                                                                    className="form-check-input" 
                                                                    type="checkbox" 
                                                                    value={`${itm.id}`} 
                                                                    name={`${itm.id}`} 
                                                                    id="id-member-3" 
                                                                    // checked={contact.find( id => id === itm.id )}
                                                                    onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Card --> */}
                                                </div>})}
                                                </nav>
                                </div>
    </> );
}

export default Contact_Add_in_Group;