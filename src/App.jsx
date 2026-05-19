import "./App.css";
import favicon from "../src/assets/favicon-32x32.png";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import refresh from "./assets/desktop/icon-refresh.svg";
import down from "./assets/desktop/icon-arrow-down.svg";
import up from "./assets/desktop/icon-arrow-up.svg";
import { useState } from "react";
function App() {
  return <ClockApp />;
}

export default App;

function ClockApp() {
  const [more, setMore] = useState(false);
  return (
    <div
      className="flex flex-col justify-between w-full max-w-[357px] 
    bg-[url('./bg-image-mobile-nighttime.jpg')] md:max-w-[768px] lg:max-w-[1440px]  
    md:bg-[url('./bg-image-tablet-nighttime.jpg')] 
    lg:bg-[url('./bg-image-nighttime.jpg')] py-8 px-4 md:p-16 lg:px-40 lg:py-16 
    mx-auto h-screen bg-center bg-cover"
    >
      {!more && (
        <div className="flex gap-4">
          <div className="md:w-[574px] h-[120px]">
            <p className="text-white opacity-100 text-[1.2rem]">
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <p className="text-white mt-4 font-bold">
              <b>Ada Lovelace</b>
            </p>
          </div>

          <img src={refresh} alt="spinner" className="w-[18px] h-[24px]" />
        </div>
      )}
      <div className="flex flex-col lg:flex-row lg:items-end gap-16 md:gap-20 lg:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <span>
              <img src={sun} alt="sun" />
            </span>
            <p className="mx-4 text-white text-lg md:hidden">GOOD MORNING</p>
            <p className="mx-4 text-white hidden md:block tracking-widest text-2xl">
              GOOD MORNING, IT'S CURRENTLY
            </p>
          </div>
          <div className="flex items-baseline">
            <span className="text-white text-7xl md:text-[12rem]">
              <b>11:57</b>
            </span>
            <span className="text-white mx-4 text-2xl">BST</span>
          </div>
          <p className="text-white md:tracking-widest md:text-2xl">
            IN LONDON, UK
          </p>
        </div>

        <div
          onClick={() => setMore(!more)}
          className="flex justify-center items-center w-[143px] h-[56px] gap-2 border border-white rounded-full bg-white"
        >
          <p className="tracking-[0.3rem] font-bold">
            {more ? "LESS" : "MORE"}
          </p>
          <div className="bg-black flex items-center justify-center w-[42px] h-[42px] rounded-full">
            <img src={more ? up : down} alt="arrow" />
          </div>
        </div>
      </div>
      {more && (
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 py-12 md:py-28 
        lg:py-20 px-4 md:px-16 lg:px-40 -my-8 -mx-4 md:-m-16 lg:-mx-40 lg:-my-16
         bg-gray-200"
        >
          <div className="md:hidden">
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">CURRENT TIME ZONE</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                EUROPE/LONDON
              </p>
            </span>
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">DAY OF THE YEAR</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                295
              </p>
            </span>
          
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">DAY OF THE WEEK</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                5
              </p>
            </span>

            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">WEEK NUMBER</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                42
              </p>
            </span>
            </div>
          
          <div className="md:flex flex-col hidden gap-10">
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">CURRENT TIME ZONE</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                EUROPE/LONDON
              </p>
            </span>
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">DAY OF THE YEAR</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                295
              </p>
            </span>
          </div>
          <span className="hidden lg:block w-px bg-gray-400 mx-6 row-span-2"></span>
          <div className="md:flex flex-col hidden gap-10">
            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">DAY OF THE WEEK</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                5
              </p>
            </span>

            <span className="flex justify-between items-baseline md:flex-col">
              <p className="text-xs">WEEK NUMBER</p>
              <p className="font-bold text-lg bg-gr md:text-3xl lg:text-5xl">
                42
              </p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
