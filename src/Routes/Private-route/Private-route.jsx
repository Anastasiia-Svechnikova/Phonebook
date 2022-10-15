
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectToken } from 'store/selectors';

export const PrivateRoute = () => {
    const token = useSelector(selectToken);
    return  token?  <Outlet/> : <Navigate to='/login'/>
    
}