
import { Link as NavLink, usePage } from "@inertiajs/react";
import { useParams } from "react-router-dom";
import formatDate from "../../FormatData";
import { useContext } from "react";
import { Context_Data } from "@/CreatContexts";

function Group_Rooms_Method_2({dataChat}) {
    const {Path_Asset}=useContext(Context_Data)
    const  {id} = useParams()
    let Count = null;
    return ( 
    <>

    <div className={`card border-1 text-reset hov ${dataChat.Channel_id==id?'card-active':''}`} 
     >
    <NavLink 
    href={`/Chats/rooms/${dataChat.Channel_id}`}
     class="card border-0 text-reset">
                                            <div class="card-body">
                                                <div class="row gx-5">
                                                    
                    <div class="col-auto">
                        <div class="avatar-group-trigon avatar-group-trigon-sm">
                            

                        {dataChat.users.length!==0 ? 
                        dataChat.users.map((itm ,ind)=>{
                            
                            
                            let NBuser = ind >3?Count+=1:0; // get current letter
                            if (ind===1) {
                                
                            return   <div className="avatar avatar-sm">
                            <img src={`${Path_Asset}storage/${dataChat.image}`} alt="#" className="avatar-img"/>
                           </div>
                            }else
                            if (ind<=3) {
                                
                            return   <div className="avatar avatar-sm">
                                     <img src={`${Path_Asset}storage/${itm.image}`} alt="#" className="avatar-img"/>
                                    </div>
                            }
                            else
                             if (ind === 4) {
                                return (
                                    <div class="avatar avatar-sm">
                                             <img class="avatar-img" src="assets/images.png" alt="#"/>
                                    </div>
                                );
                            }
                        })
                         :''}

                            {/* <div class="avatar avatar-sm">
                                <span class="avatar-text bg-primary">D</span>
                            </div> */}
                        </div>
                    </div>

                    <div class="col">
                        <div class="d-flex align-items-center mb-3">
                            <h5 class="me-auto mb-0">{dataChat.titre}</h5>
                        </div>

                       
                    </div>
                </div>
                                            </div>
    </NavLink>
</div>
    </> 
    );
}

export default Group_Rooms_Method_2;