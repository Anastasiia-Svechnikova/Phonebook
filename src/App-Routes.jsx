import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'shared/Shared-layout';
import { ContactsPage } from './pages/ContactsPage';
import { HomePage } from 'pages/HomePage';

export const  AppRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={<SharedLayout/>}>
                    <Route index element={<HomePage />} />
                    <Route path='/contacts' element={<ContactsPage/> } />
                </Route>
            </Routes>
    )
}