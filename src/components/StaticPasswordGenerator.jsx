import { useState } from "react";

function StaticPasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumerics, setIncludeNumerics] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [Password, setPassword] = useState("");

  const generatePassword = () => {
    let charSet = "";
    if (includeUppercase) charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumerics) charSet += "1234567890";
    if (includeSymbols) charSet += "!@#$%^&*?/";

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const passTokenIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[passTokenIndex];
    }
    setPassword(generatedPassword);
  };
  const toCopy = (Password) => {
    navigator.clipboard.writeText(Password)
    alert("Password Copied : " + Password)
  };
  return (
    <>
      <div className="bg-stone-200 flex justify-center items-center m-3">
        <div className="min-w-max m-10 flex flex-col items-center justify-start bg-red-200 drop-shadow-2xl gap-5 rounded-2xl">
          <div className="m-8">
            <label htmlFor="passlen" className="block text-sm">
              Password Length
            </label>
            <input
              type="number"
              id="passlen"
              value={length}
              className="w-96 p-2 rounded-xl mt-2"
              onChange={(e) => parseInt(setLength(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2 text-xl accent-blue-500">
            <div>
              <input
                type="checkbox"
                name=""
                id="uppercase"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              <label htmlFor="uppercase" className="cursor-pointer">
                Include Uppercase
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id="lowercase"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              <label htmlFor="lowercase" className="cursor-pointer">
                Include Lowercase
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id="numeric"
                checked={includeNumerics}
                onChange={() => setIncludeNumerics(!includeNumerics)}
              />
              <label htmlFor="numeric" className="cursor-pointer">
                Include Numerics
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name=""
                id="symbol"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              <label htmlFor="symbol" className="cursor-pointer">
                Include symbols
              </label>
            </div>
          </div>
          <div>
            <button
              className="bg-blue-300 hover:bg-blue-400 p-2 rounded-lg text-lg font-medium  mt-5"
              onClick={generatePassword}
            >
              Generate Password
            </button>
          </div>
          <div className="flex w-full m-2 p-3">
            <input
              type="text"
              className="flex-1 rounded-l-lg outline-none drop-shadow-lg px-3 text-lg"
              readOnly
              value={Password}
            />
            <button className="bg-blue-300 hover:bg-blue-400 text-lg font-medium p-2 rounded-r-lg" onClick={()=>toCopy(Password)}>
              copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaticPasswordGenerator;
