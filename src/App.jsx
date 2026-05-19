import "./App.css";
import favicon from "../src/assets/favicon-32x32.png";
import sun from "./assets/desktop/icon-sun.svg";
import moon from "./assets/desktop/icon-moon.svg";
import mobileBG from "./assets/mobile/bg-image-daytime.jpg";
import refresh from "./assets/desktop/icon-refresh.svg";
import down from './assets/desktop/icon-arrow-down.svg';
function App() {
  return <ClockApp />;
}

export default App;

function ClockApp() {
  return (
    <div
      className="flex flex-col justify-between max-w-[357px] max-h-[667px] py-8 px-4 mx-auto h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${mobileBG})` }}
    >
      <div className="flex gap-4">
        <div>
          <p className="text-white opacity-100">
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <p className="text-white mt-4">
            <b>Ada Lovelace</b>
          </p>
        </div>

       
          <img src={refresh} alt="spinner" className="w-[18px] h-[24px] fill-white"/>
        
      </div>
      <div className="flex flex-col gap-16 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex">
            <span>
              <img src={sun} alt="sun" />
            </span>
            <p className="mx-4 text-white text-lg">GOOD MORNING</p>
          </div>
          <div className="flex items-end">
            <span className="text-white text-7xl">
              <b>11:57</b>
            </span>
            <span className="text-white mx-4">BST</span>
          </div>
          <p className="text-white">IN LONDON, UK</p>
        </div>
        <div className="flex justify-center items-center w-[143px] h-[56px] gap-2 border border-white rounded-full bg-white">
          <p className="tracking-[0.3rem]"> <b>MORE</b></p>
          <div className="bg-black flex items-center justify-center w-[42px] h-[42px] rounded-full"><img src={down} alt="arrow-down" /></div>
        </div>
      </div>
    </div>
  );
}
