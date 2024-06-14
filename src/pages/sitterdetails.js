import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function PetSitterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/save-sitter",
        data
      );
      console.log(response.data);
      // Redirect to profile page or any other appropriate page after successful submission
      navigate("/Profileowner");
    } catch (error) {
      console.error("Error saving pet sitter:", error.response.data);
      // Handle error response from the backend
      // You can display an error message to the user or handle it in any other way
    }
  };

  return (
    <div className="mx-auto flex w-full bg-white text-black max-w-md flex-col gap-6 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-2 ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Pet Sitter Details</h1>
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
              <div className="error-dropdown text-red-500">
                Name is required
              </div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Mobile no.</label>
            <input
              placeholder="Type here"
              type="tel"
              className="input max-w-full"
              {...register("mobileNo", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.mobileNo && (
              <div className="error-dropdown text-red-500">
                Mobile no. is required and must be 10 digits
              </div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Experience</label>
            <input
              placeholder="Enter your experience"
              type="text"
              className="input max-w-full"
              {...register("experience", { required: true })}
            />
            {errors.experience && (
              <div className="error-dropdown text-red-500">
                Experience is required
              </div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Emergency Contact</label>
            <input
              placeholder="Enter emergency contact"
              type="tel"
              className="input max-w-full"
              {...register("emergencyContact", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
            />
            {errors.emergencyContact && (
              <div className="error-dropdown text-red-500">
                Emergency contact is required and must be 10 digits
              </div>
            )}
          </div>
          <label className="form-label">Address</label>
          <input
            placeholder="Enter your address"
            type="text"
            className="input max-w-full"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <div className="error-dropdown text-red-500">
              Address is required
            </div>
          )}
          <div className="form-field">
            <label className="form-label">Availability</label>
            <div className="flex items-center">
              <label className="text-sm">
                <input
                  type="radio"
                  {...register("availability", { required: true })}
                  value="Yes"
                />
                Yes
              </label>
              <label className="ml-4 text-sm">
                <input
                  type="radio"
                  {...register("availability", { required: true })}
                  value="No"
                />
                No
              </label>
            </div>
            {errors.availability && (
              <div className="error-dropdown text-red-500">
                Availability is required
              </div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Overnight Availability</label>
            <div className="flex items-center">
              <label className="text-sm">
                <input
                  type="radio"
                  {...register("overnightAvailability", { required: true })}
                  value="Yes"
                />
                Yes
              </label>
              <label className="ml-4 text-sm">
                <input
                  type="radio"
                  {...register("overnightAvailability", { required: true })}
                  value="No"
                />
                No
              </label>
            </div>
            {errors.overnightAvailability && (
              <div className="error-dropdown text-red-500">
                Overnight Availability is required
              </div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Services Offered</label>
            <div className="flex flex-col">
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("services", { required: true })}
                  value="Feeding"
                />
                Feeding
              </label>
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("services", { required: true })}
                  value="Walking"
                />
                Walking
              </label>
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("services", { required: true })}
                  value="Grooming"
                />
                Grooming
              </label>
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("services", { required: true })}
                  value="Administering Medication"
                />
                Administering Medication
              </label>
              <label className="text-sm">
                <input
                  type="checkbox"
                  {...register("services", { required: true })}
                  value="Overnight Care"
                />
                Overnight Care
              </label>
              <div>
                <label className="text-sm">
                  <input
                    type="checkbox"
                    {...register("services")}
                    value="Other"
                  />
                  Other
                </label>
                <input type="text" {...register("otherService")} />
              </div>
            </div>
            {errors.services && (
              <div className="error-dropdown text-red-500">
                Please select at least one service
              </div>
            )}
          </div>
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
      </form>
    </div>
  );
}

export default PetSitterForm;
