import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import confetti from 'canvas-confetti';
import SolarContent from './SolarContent';

const sectors = [
  { color: '#FFBC03', text: '#333333', label: 'Gift Voucher 1000' },
  { color: '#FF5A10', text: '#333333', label: '10% off on Solar system' },
  { color: '#FFBC03', text: '#333333', label: 'One Plus Phone' },
  { color: '#FF5A10', text: '#333333', label: '15% off on Solar system' },
  { color: '#FFBC03', text: '#333333', label: 'LCD TV' },
  { color: '#FF5A10', text: '#333333', label: '5% off on Solar system' },
];

const SpinWheel = () => {
  const canvasRef = useRef(null);
  const [angVel, setAngVel] = useState(0);
  const [ang, setAng] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('SPIN');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const friction = 0.995;
  const PI = Math.PI;
  const TAU = 2 * PI;
  const arc = TAU / sectors.length;
  const tot = sectors.length;

  const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

  const drawSector = (ctx, sector, i) => {
    const ang = arc * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(400, 400);
    ctx.arc(400, 400, 400, ang, ang + arc);
    ctx.lineTo(400, 400);
    ctx.fill();
    ctx.translate(400, 400);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = sector.text;
    ctx.font = 'bold 20px "Lato", sans-serif';
    ctx.fillText(sector.label, 380, 10);
    ctx.restore();
  };

  const rotate = () => {
    const sector = sectors[getIndex()];
    const canvas = canvasRef.current;
    canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
    setResult(sector.label);
  };

  const frame = () => {
    if (angVel > 0.002) {
      setAngVel(angVel * friction);
      setAng((prevAng) => (prevAng + angVel) % TAU);
      rotate();
    } else if (spinning) {
      setSpinning(false);
      setAngVel(0);
      const finalSector = sectors[getIndex()];
      setResult(finalSector.label);
      setShowPopup(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      triggerContinuousConfetti();
    }
  };

  const triggerContinuousConfetti = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    sectors.forEach((sector, i) => drawSector(ctx, sector, i));
    rotate();
    const interval = setInterval(frame, 1000 / 60);
    return () => clearInterval(interval);
  }, [angVel]);

  const handleSpin = () => {
    if (!spinning) {
      // Define three fixed speed options: slow, medium, fast
      const speedOptions = [0.3, 0.4, 0.5,0.6]; // Slow: 0.1, Medium: 0.2, Fast: 0.3
      const randomSpeed = speedOptions[Math.floor(Math.random() * speedOptions.length)]; // Randomly choose one of the speeds
  
      setAngVel(randomSpeed); // Apply the chosen speed
      setSpinning(true);
      setShowPopup(false);
    }
  };
  

  const handleSpinComplete = () => {
    navigate(`/form?result=${encodeURIComponent(result)}`);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    handleSpinComplete();
  };

  return (
    <>
    <SolarContent/>
      <div className="flex items-center justify-center bg-gradient-to-b bg-cover bg-center" style={{ backgroundImage: "url('spinner.jpg')" }}>
        <div id="spin_the_wheel" className="relative">
          <canvas
            id="wheel"
            ref={canvasRef}
            width="800"
            height="800"
            className="block"
          />
          
          {/* Arrow pointer below the spin button */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[30px] border-l-transparent border-r-transparent border-t-black"></div>
          </div>

          <div
            id="spin"
            className="absolute top-1/2 left-1/2 w-24 h-24 md:h-48 md:w-48 bg-white text-black text-lg md:text-3xl font-bold flex justify-center items-center cursor-pointer rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-2xl border-4 border-black transition duration-300"
            onClick={handleSpin}
          >
            Spin
          </div>
        </div>

        {showPopup && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gradient-to-br from-white to-gray-100 p-4 sm:p-8 rounded-xl shadow-2xl transform scale-105 transition-transform duration-300 sm:w-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-4 animate-bounce text-center">🎉 Congratulations!</h2>
              <p className="text-base sm:text-lg text-gray-700 text-center">
                You won: <span className="font-bold text-green-500">{result}</span>
              </p>
              <button
                className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                onClick={handleClosePopup}
              >
                Fill up your details to grab your benefits
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          canvas {
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 50%;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default SpinWheel;
