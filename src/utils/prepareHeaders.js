import { authSelectors } from 'redux/auth/auth.selectors';

export const prepareHeaders = (headers, { getState }) => {
    const token = authSelectors.getUserToken(getState());
    
    if(token) {
        headers.set('Authorization', `Bearer ${token}`);
    }

    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');

    return headers;
}