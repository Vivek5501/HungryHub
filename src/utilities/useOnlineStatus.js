import { useEffect,useState } from "react";

const useOnlineStatus=()=>{
    const [onlineUsers, setOnlineUsers] = useState([true]);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineUsers(false)
        });
        window.addEventListener("online",()=>{
            setOnlineUsers(true);
        });
    },[]);

    return onlineUsers;
}

export default useOnlineStatus;