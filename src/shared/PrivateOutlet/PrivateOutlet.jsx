import { LoadingOverlay } from '@mantine/core';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const PrivateOutlet = ({type}) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <LoadingOverlay visible={isLoading} overlayBlur={2} />
    }
    return user.email? <Outlet/> : <Navigate to={type==='admin'?'/admin-login':'/login'} />
    
}

export default PrivateOutlet;