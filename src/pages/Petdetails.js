import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import './Signup.css';

function Petdetails() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate("/Dashboard");
  };

  return (
    <div>
      <div>
        <Nav/>
      </div>
    <div className="mx-auto flex w-full bg-white text-black max-w-md flex-col gap-6 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Pet Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="form-group w-full">
          <div className="form-field">
            <label className="form-label">Pet's Name</label>
            <input
              placeholder="Enter pet's name"
              type="text"
              className="input max-w-full"
              {...register("petName", { required: "Pet's name is required" })}
            />
            {errors.petName && (
              <div className="error-dropdown text-red-500">{errors.petName.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Breed</label>
            <input
              placeholder="Enter breed"
              type="text"
              className="input max-w-full"
              {...register("breed", { required: "Breed is required" })}
            />
            {errors.breed && (
              <div className="error-dropdown text-red-500">{errors.breed.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Age</label>
            <input
              placeholder="Enter age"
              type="number"
              className="input max-w-full"
              {...register("age", { required: "Age is required" })}
            />
            {errors.age && (
              <div className="error-dropdown text-red-500">{errors.age.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Gender</label>
            <input
              placeholder="Enter gender"
              type="text"
              className="input max-w-full"
              {...register("gender", { required: "Gender is required" })}
            />
            {errors.gender && (
              <div className="error-dropdown text-red-500">{errors.gender.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Vet Information</label>
            <input
              placeholder="Enter vet information"
              type="text"
              className="input max-w-full"
              {...register("vetInfo", { required: "Vet information is required" })}
            />
            {errors.vetInfo && (
              <div className="error-dropdown text-red-500">{errors.vetInfo.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Level of Care Required</label>
            <select
              className="input max-w-full"
              {...register("levelOfCareRequired", { required: "Level of care is required" })}
            >
              <option value="">Select Level of Care</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
            </select>
            {errors.levelOfCareRequired && (
              <div className="error-dropdown text-red-500">{errors.levelOfCareRequired.message}</div>
            )}
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button
                type="submit"
                className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
              >
                Submit Details
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Petdetails;