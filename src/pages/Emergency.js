import React from 'react';
import Nav from "./Nav";

function Emergency(){
    return(
        <div>
            <Nav/>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl mb-6 text-center mt-10">Emergency</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="veterinarian" className="block text-sm font-medium text-gray-700">Veterinarian:</label>
                            <input type="text" id="veterinarian" name="veterinarian" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="vetPhone" className="block text-sm font-medium text-gray-700">Phone:</label>
                            <input type="tel" id="vetPhone" name="vetPhone" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="vetAddress" className="block text-sm font-medium text-gray-700">Address:</label>
                            <input type="text" id="vetAddress" name="vetAddress" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="emergencyClinic" className="block text-sm font-medium text-gray-700">Pet Emergency Clinic:</label>
                            <input type="text" id="emergencyClinic" name="emergencyClinic" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="clinicPhone" className="block text-sm font-medium text-gray-700">Phone:</label>
                            <input type="tel" id="clinicPhone" name="clinicPhone" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="clinicAddress" className="block text-sm font-medium text-gray-700">Address:</label>
                            <input type="text" id="clinicAddress" name="clinicAddress" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="inline-block bg-yellow-800 text-white rounded-lg px-4 py-2 mt-4 hover:bg-yellow-700">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Emergency;