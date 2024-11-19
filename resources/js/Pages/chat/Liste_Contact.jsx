// import Liste_Contact_Friend from "@/Components/App_Chat/Add_Contact_friend/Liste_Contact_Friends";

import Button_Add_Friends from "@/Components/App_Chat/Add_Contact_friend/Button_Add_Friends";
import Liste_Contact_Friend from "@/Components/App_Chat/Add_Contact_friend/Liste_Contact_Friends";
import Components_Searsh from "@/Components/Component_Input_Searsh";
import Title from "@/Components/Title_Component";
import { useContext } from "react";
import { useSelector } from "react-redux";

function Liste_Contact({status }) {
    // const {contact} =useContext(Context_Data_Data)
    // console.log(contact);
    // alert(status)
    
    const {contact}=useSelector((state)=>state.Listecontact)

    return (
    <>
    <aside className="sidebar brd-Right ms-2 me-5">
    <div className="tab-content h-100" role="tablist">
    <div className="tab-pane fade h-100 active show" id="tab-content-friends" role="tabpanel">
                        <div className="d-flex flex-column h-100">
                            <div className="hide-scrollbar">
                                <div className="container py-8">
                                {/* <!-- Title --> */}
                                    
                                <Title
                                title="Friend"
                                />

                                {/* <!-- Search --> */}
                                <Components_Searsh
                                
                                /> 
                                <Button_Add_Friends/>

                    <div className="card-list">
                      {contact &&  <Liste_Contact_Friend data={contact} />}
                </div>
    </div>
    </div>
    </div></div></div></aside>
    </>
    //  </Authenticated>
    );
}

export default Liste_Contact;