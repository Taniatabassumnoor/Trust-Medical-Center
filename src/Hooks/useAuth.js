
import { useContext } from "react";
import { AuthContext } from "../Pages/Contexts/AuthProvider";



const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;