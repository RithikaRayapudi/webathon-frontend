import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import './Signup.css';

function PetSchedule() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to backend)
    navigate("/Dashboard");
  };

  return (
    <div>
      <div><Nav/></div>
    <div className="mx-auto flex w-full bg-white text-black     max-w-md flex-col gap-6 box-border h-35 w-50 h-90 p-4 flex items-center border-4 rounded-xl mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Pet Schedule</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="form-group w-full">
          <div className="form-field">
            <label className="form-label">Feeding Schedule</label>
            <textarea
              placeholder="Enter feeding schedule"
              className="input max-w-full"
              {...register("feedingSchedule", { required: true })}
            />
            {errors.feedingSchedule && (
              <div className="error-dropdown text-red-500">Feeding schedule is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Water Schedule</label>
            <textarea
              placeholder="Enter water schedule"
              className="input max-w-full"
              {...register("waterSchedule", { required: true })}
            />
            {errors.waterSchedule && (
              <div className="error-dropdown text-red-500">Water schedule is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Playtime</label>
            <textarea
              placeholder="Enter playtime schedule"
              className="input max-w-full"
              {...register("playtime", { required: true })}
            />
            {errors.playtime && (
              <div className="error-dropdown text-red-500">Playtime schedule is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Exercise Routine</label>
            <textarea
              placeholder="Enter exercise routine"
              className="input max-w-full"
              {...register("exerciseRoutine", { required: true })}
            />
            {errors.exerciseRoutine && (
              <div className="error-dropdown text-red-500">Exercise routine is required</div>
            )}
          </div>
          <div className="form-field">
            <label className="form-label">Medication Instructions</label>
            <textarea
              placeholder="Enter medication instructions"
              className="input max-w-full"
              {...register("medicationInstructions")}
            />
          </div>
          <div className="form-field">
            <label className="form-label">Special Instructions</label>
            <textarea
              placeholder="Enter special instructions"
              className="input max-w-full"
              {...register("specialInstructions")}
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
    </div>
  );
}

export default PetSchedule;