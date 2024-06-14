import React, { useState } from 'react';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Nav from './Nav';
import { useNavigate } from "react-router-dom";

function Pet() {
  const [showCheckboxes, setShowCheckboxes] = useState([false, false, false]);

  const handleArrowClick = (index) => {
    const updatedCheckboxes = [...showCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setShowCheckboxes(updatedCheckboxes);
  };
  const navigate = useNavigate();
	const isnavigate = () => {
		navigate('/Petcare');
	  };
    const isnavigate1 = () => {
      navigate('/Emergency');
      };
      const isnavigate2 = () => {
        navigate('/Behaviour');
        };
  
  return (
    <div>
      <Nav/>
      <div className='flex justify-center pt-40 bg-amber-50-full'>
        <div className="card card-image-cover relative flex flex-col justify-center items-center transform-gpu transition-transform duration-500 hover:-translate-y-5 mr-20 bg-amber-700">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCHwRmurZ77H_SfogyG_bu6FxZsJ8_qhY0A&usqp=CAU" alt="" className="rounded-full w-100 h-100 object-cover" />
          <div className="card-body text-center">
            <h2 className="card-header text-white">Tips on pet care</h2>
            <button className="btn bg-gray-700 text-white hover:bg-gray-800" onClick={isnavigate}>Learn More</button>
            <p className="text-content2"></p>
            <div className="card-footer">
              {showCheckboxes[0] && (
                <div className="mt-2">
                  <input type="checkbox" id="checkbox1" name="checkbox1" />
                  <label htmlFor="checkbox1">Checkbox 1</label>
                  <br />
                  <input type="checkbox" id="checkbox2" name="checkbox2" />
                  <label htmlFor="checkbox2">Checkbox 2</label>
                  <br/>
                  <label htmlFor="placeholder">Any additional tips</label><br/>
                  <input type="placeholder" id="add" name="checkbox2" />
                </div>
              )}
              
            </div>
          </div>
        </div>
        <div className="card card-image-cover relative flex flex-col justify-center items-center transform-gpu transition-transform duration-500 hover:translate-y-2  translate-y-20 mr-20 bg-amber-700">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCd1AX6B3GQXkOsQqi9MqkI-ywTl44ldd4Mw&usqp=CAU" alt="" className="rounded-full w-100 h-100 object-cover" />
          <div className="card-body text-center">
            <h2 className="card-header text-white">Emergency Protocols</h2>
            <button className="btn bg-gray-700 text-white hover:bg-gray-800" onClick={isnavigate1}>Learn More</button>
            <p className="text-content2"></p>
            <div className="card-footer">
              {showCheckboxes[1] && (
                <div className="mt-2">
                  <input type="checkbox" id="checkbox3" name="checkbox3" />
                  <label htmlFor="checkbox3">Checkbox 3</label>
                  <br />
                  <input type="checkbox" id="checkbox4" name="checkbox4" />
                  <label htmlFor="checkbox4">Checkbox 4</label>
                </div>
              )}
              
            </div>
          </div>
        </div>
        <div className="card card-image-cover relative flex flex-col justify-center items-center transform-gpu transition-transform duration-500 hover:-translate-y-5 bg-amber-700 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iEBX3_qpDFH0jK3gtMnyC2XRPupmnm-rhg&usqp=CAU" alt="Behavioural Training" className="rounded-full w-100 h-100 object-cover" />
          <div className="card-body text-center">
            <h2 className="card-header text-white">Behavioural Training</h2>
            <button className="btn bg-gray-700 text-white hover:bg-gray-800" onClick={isnavigate2}>Learn More</button>
            <p className="text-content2"></p>
            <div className="card-footer">
              {showCheckboxes[2] && (
                <div className="mt-2">
                  <input type="checkbox" id="checkbox5" name="checkbox5" />
                  <label htmlFor="checkbox5">Checkbox 5</label>
                  <br />
                  <input type="checkbox" id="checkbox6" name="checkbox6" />
                  <label htmlFor="checkbox6">Checkbox 6</label>
                </div>
              )}
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Pet;