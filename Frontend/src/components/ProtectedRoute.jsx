import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Checkout from '../pages/Checkout';

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Checkout /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
