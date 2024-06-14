import React from 'react';
import Nav from './Nav'; // Assuming Nav is your navigation component

function About() {
    return (
        <div className='flex'>
            <Nav />
            <div className="flex flex-col items-center justify-center pt-20 ml-20 mt-20">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-4">
                    We are a platform dedicated to connecting pet owners with trusted pet sitters in their local community.
                    Our goal is to provide a safe and reliable solution for pet owners who need someone to care for their furry friends while they're away,
                    as well as for individuals looking to earn extra income by pet sitting.
                </p>
                <p className="text-lg mb-4">
                    Our platform allows pet owners to create profiles for their pets, specifying their needs, preferences, and any special requirements,
                    ensuring compatibility with potential pet sitters. We also implement a vetting process for pet sitters, including background checks
                    and references, to ensure trust and transparency within the community.
                </p>
                <p className="text-lg mb-4">
                    Additionally, we provide a seamless booking and payment system, allowing for convenient transactions between pet owners and sitters.
                    Our platform also offers educational resources and tips on pet care, behavior training, and emergency protocols for pet sitters,
                    empowering them to provide the best possible care for their furry clients.
                </p>
                <p className="text-lg">
                    Join our community of pet lovers today and experience the benefits of our platform!
                </p>
            </div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYyL3zqQqCdgDJh2CJbne5aiPW53XlbfrpA&usqp=CAU' className="rounded-full shadow-md ml-20 mr-10 w-80 h-80 mt-20 object-cover transform hover:scale-105 transition duration-300"/>
        </div>
    );
}

export default About;