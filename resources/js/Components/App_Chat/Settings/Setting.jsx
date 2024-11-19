import Account from "./Account";
import Devices from "./Devices";
import Notification from "./Notification";
import Profile from "./ProfileStg";
import Update_Pass from "./Security_Change_Passw";
import Storage from "./Storage";

function Setting() {
    return ( <>
        
    <aside className="sidebar brd-Right ms-2 me-5">
    <div className="tab-content h-100" role="tablist">
    <div className="tab-pane fade h-100 active show" id="tab-content-friends" role="tabpanel">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar">
                                <div className="container py-8">

                                    {/* <!-- Title --> */}
                                    <div className="mb-8">
                                        <h2 className="fw-bold m-0">Settings</h2>
                                    </div>

                                    {/* <!-- Search --> */}
                                    <div className="mb-6">
                                        <form action="#">
                                            <div className="input-group">
                                                <div className="input-group-text">
                                                    <div className="icon icon-lg">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                                    </div>
                                                </div>

                                                <input type="text" className="form-control form-control-lg ps-0" placeholder="Search messages or users" aria-label="Search for messages or users..."/>
                                            </div>
                                        </form>
                                    </div>

                                    {/* <!-- Profile --> */}
                                   
                                   {/* -------------------------------------------------------- */}
                                   <Profile/>
                                   {/* -------------------------------------------------------- */}
                                    {/* <!-- Profile --> */}

                                    {/* <!-- Account --> */}
                                   
                                   {/* -------------------------------------------------------- */}
                                   <Account/>
                                   {/* -------------------------------------------------------- */}
                                    
                                    {/* <!-- Account --> */}

                                    {/* <!-- Security --> */}
                                   
                                   
                                   {/* -------------------------------------------------------- */}
                                   <Update_Pass/>
                                   {/* -------------------------------------------------------- */}
                                    {/* <!-- Security --> */}

                                    {/* <!-- Storage --> */}
                                    {/* <Storage/> */}
                                    {/* <!-- Storage --> */}

                                    {/* <!-- Notifications --> */}
                                    {/* <Notification/> */}
                                    {/* <!-- Notifications --> */}

                                    {/* <!-- Devices --> */}
                                    {/* <Devices/> */}
                                    {/* <!-- Devices --> */}

                                </div>
                            </div>
                        </div>
                    </div></div>
                    </aside>
    </> );
}

export default Setting;