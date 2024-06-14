import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './Signup.css';

function Owndet() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate("/Dashboard");
  };

  return (
    <div className="mx-auto flex w-full bg-white text-black max-w-md flex-col gap-6 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Owner Details</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="form-group w-full">
          <div className="form-field">
            <label className="form-label">Name</label>
            <input
              placeholder="Type here"
              type="text"
              className="input max-w-full"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div className="error-dropdown text-red-500">Name is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Mobile no.</label>
            <input
              placeholder="Type here"
              type="num"
              className="input max-w-full"
              {...register("unum", { required: true })}
            />
            {errors.unum && (
              <div className="error-dropdown text-red-500">Mobile no. is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Address</label>
            <input
              placeholder="Enter your address"
              type="text"
              className="input max-w-full"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <div className="error-dropdown text-red-500">{errors.address.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Emergency Contact</label>
            <input
              placeholder="Enter emergency contact"
              type="text"
              className="input max-w-full"
              {...register("emergencyContact", { required: "Emergency contact is required" })}
            />
            {errors.emergencyContact && (
              <div className="error-dropdown text-red-500">{errors.emergencyContact.message}</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Additional Notes</label>
            <textarea
              placeholder="Enter additional notes"
              className="input max-w-full"
              {...register("additionalNotes")}
            />
          </div>
          <div className="form-field pt-5">
            <div className="form-control justify-between">
              <button
                type="submit"
                className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Owndet;