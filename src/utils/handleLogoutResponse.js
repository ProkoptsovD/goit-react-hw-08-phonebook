import { toast } from "react-toastify";
import { authActions } from "redux/auth/auth.slice"

export const handleLogoutResponse = async ({ dispatch, queryFulfilled }) => {
    try {
        const response = await queryFulfilled;
        console.log(response);
        

        dispatch(authActions.killCredentials());
    } catch (err) {
        toast.error(err.message);
    }
}