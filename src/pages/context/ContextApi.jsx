import { useContext ,useState} from "react";
import { UserContext } from "../../context/context"; 

const ContextApi = () =>{
    const {username, setUsername} = useContext(UserContext);
    return (
        <div>
            <p>This is a simple example :{username}</p>
            <button onClick={()=> setUsername("khushi")}>name change</button>
        </div>
    )
}
export default ContextApi;