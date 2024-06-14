import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useForm } from "react-hook-form"; // Assuming you have installed react-hook-form
import "./Login.css"; // Import your CSS file here
import pet2 from "../pet2.jpg"; // Import your image here
import Nav2 from "./Nav2";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/login",
        data
      );

      const { success, message, token, role } = response.data;
      if (success) {
        // Login successful
        // Store token in localStorage or session storage for authentication
        localStorage.setItem("token", token);

        // Redirect user based on role
        if (role === "petOwner") {
          navigate("/");
        } else {
          navigate("/error");
        }
      } else {
        // Login failed
        alert(message); // You can display an alert or any other UI feedback
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error, such as displaying error message to the user
      alert("An error occurred. Please try again."); // You can display an alert or any other UI feedback
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <Nav2 />
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col md:flex-row w-full md:max-w-3xl bg-white text-black rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <img src={pet2} alt="Pet" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <h1 className="text-3xl font-semibold mb-8">Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
              <div className="form-group w-full">
                <div className="form-field">
                  <label className="form-label">Email address</label>
                  <input
                    placeholder="Type here"
                    type="email"
                    className={`input max-w-full ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label">Password</label>
                  <div className="password-input">
                    <input
                      placeholder="Type here"
                      type={showPassword ? "text" : "password"}
                      className={`input max-w-full ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <button
                      className="eye-icon"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label">Role</label>
                  <select
                    className={`input max-w-full ${
                      errors.role ? "border-red-500" : ""
                    }`}
                    {...register("role", { required: "Role is required" })}
                  >
                    <option value="">Select role</option>
                    <option value="petOwner">Pet Owner</option>
                    {/* Add more options if needed */}
                  </select>
                  {errors.role && (
                    <span className="text-red-500">{errors.role.message}</span>
                  )}
                </div>
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
                      onClick={() => navigate("/Profileowner")}
                    >
                      Log in
                    </button>
                  </div>
                </div>
                <div className="form-field">
                  <div className="form-control justify-center">
                    <button
                      type="button"
                      className="btn link-underline-hover bg-white text-sm "
                      onClick={() => navigate("/Signup")}
                    >
                      Don't have an account yet? Signup.
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
