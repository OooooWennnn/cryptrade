import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from './Button';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

const inputStyle =
  'border-b border-gray-300 px-2 focus:outline-none focus:border-b-indigo-600';

function LoginForm({ onClick }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Login failed!');
    }

    const user = await response.json();
    login(user);
    console.log(user);
    alert('Login successful');
  };

  // console.log(watch('password'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-center gap-8 border border-gray-100 shadow-md py-20 px-20"
    >
      <div className="mb-8">
        <span className="text-gray-800 text-3xl font-semibold">Welcome</span>
        <Logo theme="dark" />
      </div>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        className={inputStyle}
        autoComplete="off"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 5,
            message: 'Username must be at least 5 characters',
          },
        })}
      />
      {errors.username && alert(errors.username.message)}
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className={inputStyle}
        {...register('password', { required: true })}
      />
      <Button>Login</Button>
      <div className="text-sm">
        Not a member?{' '}
        <NavLink
          onClick={onClick}
          className="text-sm text-gray-700 border-b border-transparent hover:border-b-gray-700"
        >
          Register
        </NavLink>
      </div>
    </form>
  );
}

export default LoginForm;
