import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'store/selectors';

export const PrivateRoute = () => {
  const token = useSelector(selectToken);

  return token? (
    <Suspense fallback="Wait a moment....">
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};
