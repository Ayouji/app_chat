import Message_From_user from "./message/Message_From_user";
import Message_is_typing from "./message/Message_is_typing";
import Message_To_User from "./message/Message_To_User";
import Message_File_From_user from "./message/Missage_File_From_user";


function Globale_Message() {

    return ( 
    <>
    <Message_From_user/>
        <Message_File_From_user/>
        <Message_To_User/>
    <Message_is_typing/>

    </> );
}

export default Globale_Message;