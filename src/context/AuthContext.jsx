import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const isAuthenticated = !!authToken;

  const navigate = useNavigate();

  const login = (user) => {
    localStorage.setItem('token', user.accessToken);
    localStorage.setItem('userInfo', JSON.stringify(user));
    setAuthToken(user.accessToken);
    navigate('dashboard');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setAuthToken(null);
    navigate('dashboard');
  };

  useEffect(function () {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
