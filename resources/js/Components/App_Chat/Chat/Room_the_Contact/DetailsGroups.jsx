
import { Link as NavLink, usePage } from "@inertiajs/react";
import { useParams } from "react-router-dom";
import formatDate from "../../FormatData";
import { useContext, useState } from "react";
import { Context_Data } from "@/CreatContexts";
import People from "./People";
import Offcanvas_Header from "./Offcanvas_Header";
import Offcanvas_Body from "./Offcanvas_Body";
import Media from "./Media";
import Files from "./Files";

function DetailsGroups({etatDetailsG,setetatDetailsG,data_Group,messageAll}) {
    const {Path_Asset}=useContext(Context_Data)
    const [etatSearch,setEtatSearch] = useState(false)
    const changeStatu=()=>{
        setetatDetailsG(false)
    }
//    const ShowSearch=()=>{
    
//     etatSearch ? setEtatSearch(false):setEtatSearch(true)
//    }
console.log(messageAll);
    return ( 
    <>
    
                  {/* <!-- Chat --> */}
            <div class={`offcanvas offcanvas-end offcanvas-aside position-absolute ${etatDetailsG&&'show'}`}
            style={{visibility:`${etatDetailsG?'visible':'hidden'} `}} >
                


                    <Offcanvas_Header changeStatu={changeStatu} data_Group={data_Group}/>
                    


                <div class="offcanvas-body hide-scrollbar">
                    
                        <Offcanvas_Body data_Group={data_Group}/>


                    <div class="tab-content py-2" role="tablist">
                        {/* <!-- Members --> */}

                        <People  user_auth={data_Group.user_auth[0]} contact={data_Group.users}/>



                        <Media messageAll={messageAll.messages}/>


                        <Files messageAll={messageAll.messages}/>

                    </div>
                </div>
            </div>
    </> 
    );
}

export default DetailsGroups;