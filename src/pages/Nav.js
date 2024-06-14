import React, { useState } from 'react';
// import Home from './Home';
// import { IoMdContact } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Nav(){
	const navigate = useNavigate();
	const isnavigate = () => {
		navigate('/Reference');
	  };
	const isnavigate1 = () =>{
		navigate('/Help');
	};
	const isnavigate2 = () =>{
		navigate('/Contact');
	};
	const isnavigate3 = () =>{
		navigate('/About');
	};
	const isnavigate4=()=>{
		navigate('/Profile');
	}
	const isnavigate5=()=>{
		navigate('/Community');
	}
	const isnavigate6=()=>{
        navigate('/');
    }
  

    return(
        <div>
          <div class="navbar bg-gray-400 py-2 fixed w-full top-0 z-10">
		  <div>
		  <a class="navbar-item text-xl text-white"><button onClick={isnavigate6}>Furry Fam</button></a>
		  </div>
		{/* <div class="navbar-center"> */}
			
			  
		
			
	   {/* </div> */}
		<div class="navbar-end">
			
		<a class="navbar-item text-xl text-white"><button onClick={isnavigate}>Reference</button></a>
		{/* <a class="navbar-item "><button onClick={isnavigate2}><I </button></a> */}
		<a class="navbar-item text-xl text-white"><button onClick={isnavigate3}>About</button></a>
		<a class="navbar-item text-xl text-white "><button onClick={isnavigate5}>Community</button></a>
		<a class="navbar-item text-xl text-white"><button onClick={isnavigate1}>Help</button></a>
		<a class="navbar-item text-xl text-white "><button onClick={isnavigate2}>Contact us</button></a>

		</div>
		</div>
	   </div>
        
		
		
	

        
    );
	}
export default Nav;