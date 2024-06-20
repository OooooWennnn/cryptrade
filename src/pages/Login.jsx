import { useState } from 'react';
import LoginForm from '../ui/LoginForm';
import RegisterForm from '../ui/RegisterForm';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleIsLogin = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <div className="flex min-h-screen justify-center items-center py-20">
      {isLogin ? (
        <LoginForm onClick={handleIsLogin} />
      ) : (
        <RegisterForm onClick={handleIsLogin} />
      )}
    </div>
  );
}

export default Login;
