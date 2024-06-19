"useclient";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center" style={{ backgroundColor: color }}>
        <h1 className="text-[10vw] leading-none tracking-tighter">Background<br/>Changer!</h1>
      </div>
      <div className="fixed bottom-10 left-4 w-[98vw] h-[10vh]">
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-3 bg-gray-100 rounded-2xl text-gray-300">
          <button
            className="flex justify-center items-center w-[8vw] h-[65%] text-[1.5vw] rounded-full Class
            Properties"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setColor("Red");
            }}
          >
            Red
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "olive" }}
            onClick={() => {
              setColor("olive");
            }}
          >
            Olive
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "gray" }}
            onClick={() => {
              setColor("gray");
            }}
          >
            Gray
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%]  text-[1.5vw] rounded-full"
            style={{ backgroundColor: "yellow", color: "Black" }}
            onClick={() => {
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "pink", color: "Black" }}
            onClick={() => {
              setColor("pink");
            }}
          >
            Pink
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => {
              setColor("Purple");
            }}
          >
            Purple
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "Lavender", color: "Black" }}
            onClick={() => {
              setColor("Lavender");
            }}
          >
            Lavender
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full"
            style={{ backgroundColor: "white", color: "Black" }}
            onClick={() => {
              setColor("white");
            }}
          >
            White
          </button>
          <button
            className="flex justify-center items-center w-[8vw] h-[70%] text-[1.5vw] rounded-full border border-white"
            style={{ backgroundColor: "Black" }}
            onClick={() => {
              setColor("Black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
