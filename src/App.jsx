
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { refreshUserThunk } from 'store/auth/thunk.auth';
// import { selectUser } from 'store/selectors';
import {AppRoutes} from './App-Routes';

export const App = () => {

  
  return (
        <BrowserRouter basename="/goit-react-hw-07-phonebook/">
          <AppRoutes />
        </BrowserRouter>
  );
};