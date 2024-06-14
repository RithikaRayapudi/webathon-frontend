import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import './Signup.css';

function BookingForm() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    navigate("/Confirmation");
  };

  return (
    <div className="mx-auto bg-white text-black max-w-md p-4 border-4 rounded-xl mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-4">Contact and Booking</h1>
      </div>
      {/* Location */}
      <div className="form-field mb-2">
        <h2 className="text-lg ">Location</h2>
        <input
          type="text"
          className="input max-w-full"
          placeholder="Enter location"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <div className="error-dropdown text-red-500">Location is required</div>
        )}
      </div>

      {/* Contact Information */}
      <div className="form-field mb-2">
        <h2 className="text-lg ">Contact Information</h2>
        <input
          type="tel"
          className="input max-w-full"
          placeholder="Enter phone number"
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <div className="error-dropdown text-red-500">Phone number is required</div>
        )}
        {/* Add more contact fields as needed */}
      </div>

      {/* Additional Information */}
      <div className="form-field mb-2">
        <h2 className="text-lg ">Additional Information</h2>
        <textarea
          className="input max-w-full h-32"
          placeholder="Enter additional information"
          {...register("additionalInfo")}
        />
      </div>

      {/* Booking Information */}
      

      {/* Note to Pet Owners */}
      <div className="form-field mb-6">
        <h2 className="text-lg ">Note to Pet Owners</h2>
        <textarea
          className="input max-w-full h-32"
          placeholder="Enter note to pet owners"
          {...register("noteToPetOwners")}
        />
      </div>

      {/* Submit Button */}
      <div className="form-field">
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="btn w-full text-white bg-yellow-800 hover:bg-yellow-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default BookingForm;