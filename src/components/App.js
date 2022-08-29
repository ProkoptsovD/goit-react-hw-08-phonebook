import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { ROUTES } from 'constants';
import { PrivateRoute, PublicRoute } from 'routes';

import SharedLayout from './SharedLayout';

import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks';
import { DrawerContextProvider, PopoverContextProvider } from 'contexts';

const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
    const { isLoggedIn } = useAuth();

    return (
      <ThemeProvider theme={theme}>
        <DrawerContextProvider>
          <PopoverContextProvider>
            <Routes>
              <Route path={ ROUTES.HOME } element={
                  <PrivateRoute>
                    <SharedLayout />
                  </PrivateRoute>
                }>
                <Route index element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                } />
              </Route>
              <Route path={ ROUTES.REGISTER } element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              } />
              <Route path={ ROUTES.LOGIN } element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              } />
            </Routes>    
          </PopoverContextProvider>  
        </DrawerContextProvider>    
        <ToastContainer />
      </ThemeProvider>
    );
};
