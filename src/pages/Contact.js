import { FaSquareEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import Nav from "./Nav";


function Contact() {
    
  
  return (
    <div >
        <Nav/>
    

  


    <div className="min-h-screen bg-amber-50-fill flex pl-20 pt-60 justify-center  ">
    <div className="flex-col">

    
    {/* <RiContactsLine size={60}/> */}
    <h1 className="text-6xl text-black font-bold mb-4 ml-10">Contact</h1>
      <p className="text-black font-bold text-4xl">Feel free to reach out!</p>
      </div>
      <div className="flex-col ml-20 ">
      <div className="flex items-center space-x-4 mb-3 text-black">
      <FaSquareEnvelope size={20}/>
        <p className="text-lg">petlove@gmail.com</p>
      </div>
      <div className="flex items-center space-x-4 mb-3 text-black">
      <FiPhoneCall size={20}/>
        <p className="text-lg">7981502524</p>
      </div>
      <div className="flex items-center space-x-4 mb-3 text-black">
      {/* <a href="https://www.instagram.com/harshanka_tirumalsetti?igsh=MWV0Z2t0dGwwZWk1bg=="/> */}
      <FaInstagramSquare  size={20}/>
        {/* <p className="text-lg">@harshanka_tirumalsetti</p> */}
        <a href="https://www.instagram.com/petsittersinternational?igsh=MXd4eGRjb2ZmcTAwdA==" target="_blank" rel="noopener noreferrer" className="text-lg">@pet_lovers</a>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;