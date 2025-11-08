import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)

    const location = useLocation()

    if(loading){
        return <span className="loading flex justify-center items-center loading-bars loading-xl"></span>
    }

    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/login'/>
};

export default PrivateRoute;