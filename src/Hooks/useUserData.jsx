import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

// import axios from "axios";

const useUserData = () => {
    const {user , loading} =UseAuth()
    const [userData , setUserData] = useState({})
    
    useEffect(()=>{
        
        fetch(`http://localhost:3000/user/${user?.email}`)
        .then(res => res.json())
        .then(data => setUserData(data))
     
},[]);
    return userData;
}
export default useUserData;