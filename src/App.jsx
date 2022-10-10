
import { BrowserRouter } from 'react-router-dom';
import {AppRoutes} from './App-Routes';

export const App = () => {
  return (
        <BrowserRouter basename="/goit-react-hw-07-phonebook/">
          <AppRoutes />
        </BrowserRouter>
  );
};