import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'shared/Shared-layout';
import { ContactsPage } from './pages/ContactsPage';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export const  AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage/> } />
                </Route>
            <Route path='/register' element={<RegisterPage />} />
             <Route path='/login' element={ <LoginPage/>} />
            
            </Routes>
    )
}