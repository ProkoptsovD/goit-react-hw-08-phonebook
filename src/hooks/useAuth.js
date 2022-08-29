import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth/auth.selectors";

export const useAuth = () => {
    const token = useSelector(authSelectors.getUserToken);
    const name = useSelector(authSelectors.getUserName);
    const isLoggedIn = !!token;

    return { token, isLoggedIn, name };
}