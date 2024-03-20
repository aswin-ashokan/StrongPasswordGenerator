import { useState, useCallback, useEffect, useRef } from "react";

function DynamicPasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef("");

  const generatePassword = useCallback(() => {
    let pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "#&@^)%([]%!?/{}";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [charAllowed, length, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  };

  return (
    <>
      <div className="w-full bg-stone-200 grid justify-center">
        <div className="flex flex-col w-[450px] h-[450px] bg-blue-300 rounded-2xl p-10 m-10 drop-shadow-2xl">
          {/* <h1 className="text-center pb-3">Password Generator</h1> */}
          <div className="flex rounded overflow-hidden mb-4 text-black drop-shadow-xl">
            <input
              type="text"
              className="shadow-inner text-lg outline-none py-3 px-3 w-full"
              value={password}
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button
              className="bg-red-300 text-white outline-none px-4 py-0.5 shrink-0 hover:bg-red-400 text-black text-lg font-medium "
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm flex-col">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              name=""
              id=""
              className="cursor-pointer mt-6 accent-red-300"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length" className="text-lg">
              Length : {length}
            </label>

            <div className="mt-6 text-xl">
              <input
                type="checkbox"
                name="number"
                id="number"
                className="accent-red-300"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number" className="pl-1">
                Include Numerics
              </label>
            </div>
            <div className="text-xl">
              <input
                type="checkbox"
                name="char"
                id="char"
                className="mt-6 accent-red-300"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="char" className="pl-1">
                Include Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicPasswordGenerator;
