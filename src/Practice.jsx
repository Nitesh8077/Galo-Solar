import React from 'react';

const Practice = () => {
    return (
        <div className="bg-black text-yellow-500 p-8 flex flex-wrap justify-around">
            <div className="m-2">
                <h3 className="mb-2 font-bold text-2xl">HELP AND SUPPORT</h3>
                <a href="#" className="block mb-1">SOLAR CALCULATOR</a>
                <a href="#" className="block mb-1">REQUEST A SITE VISIT</a>
                <a href="#" className="block mb-1">ABOUT US</a>
                <a href="#" className="block mb-1">FAQ</a>
                <a href="#" className="block mb-1">PRIVACY AND T & C</a>
                <a href="#" className="block mb-1">SHIPPING & RETURNS</a>
                <a href="#" className="block mb-1">SUBSIDY</a>
                <a href="#" className="block mb-1">CONTACT US</a>
                <a href="#" className="block mb-1">TRACK YOUR ORDER</a>
                <a href="#" className="block mb-1">RAISE A COMPLAINT</a>
            </div>
            <div className="m-2">
                <h3 className="mb-2 font-bold text-2xl">CATEGORIES</h3>
                <a href="#" className="block mb-1">SOLAR PANELS</a>
                <a href="#" className="block mb-1">SOLAR PLANTS</a>
                <a href="#" className="block mb-1">SOLAR INVERTERS</a>
                <a href="#" className="block mb-1">SOLAR STRUCTURES</a>
            </div>
            <div className="m-2">
                <h3 className="mb-2 font-bold text-2xl">CONNECT WITH US</h3>
                <div className="flex mb-2">
                    <a href="facebook.com/galoenergyofficial" className="mr-2 h-10 w-10"><img src="./images/fb.svg" alt="Facebook" /></a>
                    <a href="instagram.com/galo_energy" className="mr-2 h-12 w-12 -mt-1"><img src="./images/insta.svg" alt="Instagram" /></a>
                    <a href="https://www.youtube.com/channel/UCpWsgqcMjnOUXKyv19uXP2w" className="mr-2 h-12 w-12 -mt-1"><img src="./images/yt.svg" alt="YouTube" /></a>
                    <a href="#" className="mr-2 h-10 w-10"><img src="./images/twitter.svg" alt="twitter" /></a>
                </div>
                <div className="flex items-center mb-1">
                    <img src="./images/phone.svg" alt="Phone" className="h-6 w-6 mr-2" />
                    <span>91 93117 97244</span>
                </div>
                <div className="flex items-center">
                    <img src="./images/mail.svg" alt="Email" className="h-6 w-6 mr-2" />
                    <span>info@galo.co.in</span>
                </div>
            </div>
            <div className="m-2">
                <h3 className="mb-2 font-bold text-2xl">ADDRESS</h3>
                <p>Corp Office:<br />
                    D-120/121,<br />
                    Okhla Phase 1,<br />
                    New Delhi-110020</p>
            </div>
        </div>
    );
}

export default Practice;
