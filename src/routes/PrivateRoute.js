import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { ROUTES } from "constants";
import { useAuth } from 'hooks';

const defaultNavigate = `/${ROUTES.LOGIN}`

export const PrivateRoute = ({ children, navigateTo = defaultNavigate }) => {
    const { token } = useAuth();
    console.log(token);

    return (
        token ? children : <Navigate to={ navigateTo } replace={ true } />
    )
}

PrivateRoute.propTypes = {
    children: PropTypes.any,
    navigateTo: PropTypes.string
}