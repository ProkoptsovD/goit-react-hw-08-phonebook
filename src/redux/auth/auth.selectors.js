const getUserToken = (state) => state.user.token;
const getUserName = (state) => state.user.name;

export const authSelectors = {
    getUserToken,
    getUserName,
}