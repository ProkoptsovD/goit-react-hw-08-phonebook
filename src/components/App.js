import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { ROUTES } from 'constants';
import { PrivateRoute, PublicRoute } from 'routes';

import SharedLayout from './SharedLayout';

import 'react-toastify/dist/ReactToastify.css';
import { DrawerContextProvider, PopoverContextProvider } from 'contexts';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <DrawerContextProvider>
          <PopoverContextProvider>
            <Routes>
              <Route path={ ROUTES.HOME } element={ <PublicRoute><SharedLayout /></PublicRoute>}>
                <Route path={ ROUTES.CONTACTS } element={
                  <PrivateRoute>
                      <ContactsPage />
                  </PrivateRoute>
                } />
                <Route path={ ROUTES.REGISTER } element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                } />
                <Route path={ ROUTES.LOGIN } element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                } />
              </Route>
            </Routes>    
          </PopoverContextProvider>  
        </DrawerContextProvider>    
        <ToastContainer />
      </ThemeProvider>
    );
};
