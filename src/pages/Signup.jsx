import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Signup = () => {
    const location = useLocation();
  const navigate = useNavigate()
  const { createUser, handleGoogleRegister,user, setUser,setLoading } = use(AuthContext);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.imageurl.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must contain a lowercase, a uppercase and at least 6 chacater"
      );
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        toast.success('Create User Successful')
        e.target.reset();
        navigate(location.state || '/')

        const profile = {
          displayName: name,
          photoURL: photo,
        };
      updateProfile(result.user, profile)

      setUser({
        ...result.user,
        displayName: name,
        photoURL: photo,
      })
      })
      .catch((error) => {
        setError(error.code);
        toast.error(error.code)
        setLoading(false)
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    handleGoogleRegister()
      .then(() => {
        navigate(location.state || "/")
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleShowPassword=(e)=>{
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  return (
    <div className="card animate__animated animate__zoomInDown bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
      <title>Pet Care - Register</title>
      <h1 className="text-5xl text-center font-bold">Signup now!</h1>
      <div className="card-body">
        <form onSubmit={handleEmailRegister}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Enter Your Name..."
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              name="imageurl"
              placeholder="Provide Your Photo URl..."
            />
            <label className="label">Email</label>
            <input
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
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accect all{" "}
              <span className="text-blue-600">Terms and Conditions</span>
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          {error && <h3 className="text-red-500 mt-3">{error}</h3>}
          {user && <h3>{user.email}</h3>}
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
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Signup;