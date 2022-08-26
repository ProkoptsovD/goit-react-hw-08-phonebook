import { toast } from "react-toastify";
import { authActions } from "redux/auth/auth.slice"

export const handleAuthResponse = async ({ dispatch, queryFulfilled }) => {
  try {
    const { data } = await queryFulfilled;

    dispatch(authActions.setCredentials(data));
  } catch (err) {
    toast.error(err.message);
  }
}