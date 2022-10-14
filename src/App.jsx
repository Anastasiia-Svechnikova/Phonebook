
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { refreshUserThunk } from 'store/auth/thunk.auth';
import { selectToken, selectUser } from 'store/selectors';
import {AppRoutes} from './App-Routes';

export const App = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken)

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && token){  
      dispatch(refreshUserThunk())
  }

  }, [dispatch, user, token])
  
  return (
        <BrowserRouter basename="/goit-react-hw-07-phonebook/">
          <AppRoutes />
        </BrowserRouter>
  );
};