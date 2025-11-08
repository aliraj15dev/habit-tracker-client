import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { use, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const [error, setError] = useState('')

  const { handleGoogleRegister,setLoading, signInUser } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError('')

    signInUser(email, password)
      .then(() => {
        toast.success('Login Successful')
        navigate(location.state || "/");
      })
      .catch((error) => {
        setLoading(false)
        setError(error.code || "Login failed");
        toast.error("Invalid email or password")
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    handleGoogleRegister()
      .then(() => {
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="card animate__animated animate__zoomInDown bg-base-100 max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <title>Pet Care - Login</title>
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleEmailLogin}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="input"
              placeholder="Email..."
            />
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password..."
              />
              <button
                onClick={handleShowPassword}
                className="absolute top-2 right-8 z-11 text-2xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="link link-hover"
                onClick={() => {
                  const email = emailRef.current?.value || "";
                  navigate("/resetPassword", { state: { email } })
                }}
              >
                Forgot password?
              </button>
            </div>
            <p className="text-red-500">{error && error}</p>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <div className="mt-5 space-y-3">
            <div className="flex justify-center items-center gap-4">
              <hr className="w-full" />
              <span className="animate__animated animate__infinite animate__flip">or</span>
              <hr className="w-full" />
            </div>
            <button
              onClick={handleGoogleLogin}
              className="btn bg-transparent w-full text-xl"
            >
              <FcGoogle /> Continue with Google
            </button>
          </div>
          <p className="mt-5 text-lg">
            New to the website? Please{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
