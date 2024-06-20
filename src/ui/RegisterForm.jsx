import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Logo from "./Logo";
import config from "../config";

const inputStyle =
  "border-b w-full border-gray-300 px-2 focus:outline-none focus:border-b-indigo-600";

function RegisterForm({ onClick }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(`${config.BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Server response: ", result);
      alert("Register successful!");
      navigate("/");
    } catch (error) {
      console.log("Submit error: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-center items-center gap-8 border border-gray-100 shadow-md py-20 px-20"
    >
      <div className="mb-8">
        <span className="text-gray-800 text-3xl font-semibold">Welcome</span>
        <Logo theme="dark" />
      </div>
      <div className="flex gap-3">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          className={inputStyle}
          autoComplete="off"
          {...register("firstName", {
            required: "First Name is required",
            minLength: {
              value: 2,
              message: "First Name must be at least 2 characters",
            },
          })}
        />
        {errors.firstName && (
          <span className="text-red-600">{errors.firstName.message}</span>
        )}
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          className={inputStyle}
          autoComplete="off"
          {...register("lastName", {
            required: "Last Name is required",
            minLength: {
              value: 3,
              message: "Last Name must be at least 3 characters",
            },
          })}
        />
        {errors.lastName && (
          <span className="text-red-600">{errors.lastName.message}</span>
        )}
      </div>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Username"
        className={inputStyle}
        autoComplete="off"
        {...register("username", {
          required: "Username is required",
          minLength: {
            value: 5,
            message: "Username must be at least 5 characters",
          },
        })}
      />
      {errors.username && (
        <span className="text-red-600">{errors.username.message}</span>
      )}
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        className={inputStyle}
        autoComplete="off"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
      />
      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        className={inputStyle}
        autoComplete="off"
        {...register("email", {
          required: "Email is required",
          minLength: {
            value: 8,
            message: "Email must be at least 8 characters",
          },
        })}
      />
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}
      <Button>Register</Button>
      <div className="text-sm">
        Already a member?{" "}
        <NavLink
          onClick={onClick}
          className="text-sm text-gray-700 border-b border-transparent hover:border-b-gray-700"
        >
          Login
        </NavLink>
      </div>
    </form>
  );
}

export default RegisterForm;
