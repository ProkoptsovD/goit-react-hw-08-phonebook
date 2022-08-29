import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { ROUTES } from "constants";
import { useAuth } from 'hooks';

const defaultNavigate = ROUTES.HOME;

export const PublicRoute = ({ children, restricted = false, navigateTo = defaultNavigate }) => {
    const { token } = useAuth();
    const shouldRedirect = token && restricted;

    return (
        shouldRedirect ? <Navigate to={ navigateTo } replace={ true } /> : children
    )
}

PublicRoute.propTypes = {
    children: PropTypes.any,
    navigateTo: PropTypes.string,
    restricted: PropTypes.bool
}