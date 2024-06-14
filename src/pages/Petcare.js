// import React from 'react';
// import Nav from "./Nav";
// function Petcare(){
//     return(
//         <div>
//             <Nav/>
//             <div className="card mt-20 ml-80 pb-80">
// 	    <div className="card-body">Hello World</div>
//         </div>
//         </div>
//     )
// }
// export default Petcare;
import React, { useState } from 'react';
import Nav from "./Nav";

function Petcare(){
    const [formData, setFormData] = useState({
        exercise: false,
        mentalSimulation: false,
        nutrition: false,
        dentalCare: false,
        comfortAndShelter: false,
        grooming: false
    });

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log(formData);
    };

    return(
        <div>
            <Nav/>
            <div className="card mt-20 mx-auto w-96 h-96 flex justify-center items-center">
                <div className="card-body text-center">
                    <h1 className='text-2xl rounded-full '>Petcare</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="exercise"
                                checked={formData.exercise}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Exercise</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="mentalSimulation"
                                checked={formData.mentalSimulation}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Mental Simulation</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="nutrition"
                                checked={formData.nutrition}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Nutrition</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="dentalCare"
                                checked={formData.dentalCare}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Dental Care</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="comfortAndShelter"
                                checked={formData.comfortAndShelter}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Comfort and Shelter</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="grooming"
                                checked={formData.grooming}
                                onChange={handleChange}
                            />
                            <span className="ml-2">Grooming</span>
                        </label>
                        <button type="submit" className="btn text-white bg-yellow-800 hover:bg-yellow-700">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Petcare;