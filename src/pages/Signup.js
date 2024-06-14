import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useForm, useFieldArray } from "react-hook-form"; // Assuming you have installed react-hook-form
import "./Signup.css";
import pet from "../pet.jpg";
import Nav from "./Nav";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalFields",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/register-owner",
        formData
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const watchPassword = watch("password", "");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col md:flex-row w-full md:max-w-3xl mt-7 bg-white text-black rounded-xl shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <img src={pet} alt="Pet" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 ">
            {" "}
            {/* Add shadow here */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
              <div className="form-group w-full">
                <div className="form-field">
                  <label className="form-label ">User Name</label>
                  <input
                    placeholder="Type here"
                    type="text"
                    className={`input max-w-full ${
                      errors.uname ? "border-red-500" : ""
                    }`}
                    {...register("uname", { required: true })}
                  />
                  {errors.uname && (
                    <div className="error-dropdown text-red-500">
                      User Name is required
                    </div>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label ">Mobile no.</label>
                  <input
                    placeholder="Type here"
                    type="text"
                    className={`input max-w-full ${
                      errors.unum ? "border-red-500" : ""
                    }`}
                    {...register("unum", {
                      required: true,
                      pattern: /^\d{10}$/,
                    })}
                  />
                  {errors.unum && (
                    <div className="error-dropdown text-red-500">
                      Mobile no. should be 10 digits
                    </div>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label ">Email address</label>
                  <input
                    placeholder="abc@gmail.com"
                    type="email"
                    className={`input max-w-full ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  {errors.email && (
                    <div className="error-dropdown text-red-500">
                      Invalid email address
                    </div>
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
                        required: true,
                        minLength: 8,
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
                    <div className="error-dropdown text-red-500">
                      Password must be at least 8 characters long
                    </div>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label">Confirm Password</label>
                  <input
                    placeholder="Re-enter your password"
                    type="password"
                    className={`input max-w-full ${
                      errors.confirmPassword ? "border-red-500" : ""
                    }`}
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === watchPassword,
                    })}
                  />
                  {errors.confirmPassword && (
                    <div className="error-dropdown text-red-500">
                      Passwords do not match
                    </div>
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
                    <option value="petSitter">Pet Sitter</option>

                    {/* Add more options if needed */}
                  </select>
                  {errors.role && (
                    <span className="text-red-500">{errors.role.message}</span>
                  )}
                </div>
                {/* <button type="button" onClick={() => append({ value: "" })}>
                  Add Additional Field
                </button> */}
                <div className="form-field pt-5">
                  <div className="form-control justify-between">
                    <button
                      type="submit"
                      className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="form-field">
                  <div className="form-control justify-center">
                    <button
                      type="button"
                      className="btn link-underline-hover bg-white text-sm text-"
                      onClick={() => navigate("/")}
                    >
                      Already have an account? Login
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

export default Signup;
