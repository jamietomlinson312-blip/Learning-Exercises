import { useCallback, useEffect, useRef, useState } from "react";

export const PasswordGenerator = () => {
  const [len, setLen] = useState(10); // state variables for password length, numbers/characters allowed and password itself
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [strengthStyle, setStrengthStyle] = useState("");

  const passwordRef = useRef(null); // setting a ref for the copy function (e.g don't need re-render when copy button is clicked)

  const passwordGenerator = useCallback(() => {
    // callback function to generate new password only when length, checkboxes or setPassword function are altered
    let pass = "";
    let strData = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) strData += "0123456789";
    if (charAllow) strData += "!£$%^&*():;";
    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * strData.length + 1);
      pass += strData.charAt(char);
    }
    setPassword(pass);
    if (
      pass.length > 15 ||
      (pass.length > 10 && (numAllow || charAllow) === true)
    ) {
      setStrength("Strong");
      setStrengthStyle("text-green-500");
    } else if (
      pass.length > 10 ||
      (pass.length > 5 && (numAllow && charAllow) === true)
    ) {
      setStrength("Medium");
      setStrengthStyle("text-orange-500");
    } else {
      setStrength("Weak");
      setStrengthStyle("text-red-500");
    }
  }, [len, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [len, numAllow, charAllow, passwordGenerator]);

  useEffect(() => {});

  const copyFunction = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  console.log("strength..", strength, "strength style...", strengthStyle);

  return (
    <div className="w-1/2 shadow-md rounded-md border justify-center flex flex-col gap-3 p-5 mx-auto mt-40">
      <h1 className="font-semibold text-xl">Generate Password:</h1>
      <div className="flex gap-4">
        <input
          type="text"
          value={pass}
          ref={passwordRef}
          placeholder={pass}
          readOnly
          className="w-8/10 border rounded-md bg-amber-100 py-1 px-3"
        />
        <button
          className="cursor-pointer px-2 py-1 rounded-md bg-sky-400 hover:bg-sky-600 focus:outline-1 focus:outline-offset-1 
          focus:outline-sky-900 transition ease-in-out text-xs text-white font-semibold border shadow-xs"
          onClick={copyFunction}
        >
          Copy
        </button>
      </div>
      <p className={strengthStyle.toString()}>Password Strength:{strength}</p>
      <div className="flex gap-4">
        <input
          type="range"
          value={len}
          onChange={(e) => {
            setLen(e.target.value);
          }}
          min={6}
          max={100}
          className="cursor-pointer"
        />
        <label className>Length:{len}</label>
        <div>
          <input
            type="checkbox"
            id="numInput"
            defaultChecked={numAllow}
            onChange={() => {
              setNumAllow((previous) => !previous);
            }}
          />
          <label htmlFor="numInput" className="ml-1">
            Numbers?
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((previous) => !previous);
            }}
          />
          <label htmlFor="charInput" className="ml-1">
            Special Characters?
          </label>
        </div>
      </div>
    </div>
  );
};
