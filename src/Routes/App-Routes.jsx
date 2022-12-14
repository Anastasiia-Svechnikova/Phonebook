import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'shared/Shared-layout';
import { PublicRoute } from './Public-route';
import { PrivateRoute } from './Private-route';

const ContactsPage = lazy(() => import('pages/ContactsPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ContactsPage />} />
        </Route>
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
};
