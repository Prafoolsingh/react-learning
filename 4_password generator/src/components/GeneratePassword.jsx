import { useState, useCallback, useEffect, useRef } from "react";

export default function GeneratePassword() {

    // State variables to manage password generation parameters and result

    const [length, setLength] = useState(8);

    const [numberAllowed, setNumberAllowed] = useState(false);

    const [charAllowed, setCharAllowed] = useState(false);

    const [password, setPassword] = useState("");

    const passwordRef=useRef(null)

    // Function to generate a password based on the current parameters
    const passwordGenerator = useCallback(() => {

        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        // Add numbers to the character set if numberAllowed is true
        if (numberAllowed) {
            str += "0123456789";
        }

        // Add special characters to the character set if charAllowed is true
        if (charAllowed) {
            str += "!@#$%^&*()-_=+[{]}\\|;:,<.>/?";
        }

        // Generate the password by randomly selecting characters from the character set
        for (let i = 0; i < length; i++) {
            let charIndex = Math.floor(Math.random() * str.length);
            pass += str.charAt(charIndex);
        }

        // Update the password state with the generated password
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    const copyToClipboard=useCallback(()=>{
      
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
        alert("Password copied successfully")
    },
    [password])

    // Call the passwordGenerator function whenever the parameters change
    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);



    return (
        <div>
            <h1 className="text-3xl mt-8 text-center">Password Generator</h1>

            {/* Display the generated password and provide a button to copy it */}
            <div className="mx-auto shadow-lg rounded-lg px-2 my-10 text-black flex">
                <input
                    type="text"
                    placeholder="Generated password"
                    name="password"
                    className="outline-none w-full py-1 px-3"
                    value={password}
                    readOnly
                    ref={passwordRef}
                />
                <button className="bg-blue-600 outline-none p-1 text-white px-4" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>

            {/* Controls to adjust password length and toggle inclusion of numbers and special characters */}
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        className="cursor-pointer"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        checked={numberAllowed}
                        className="cursor-pointer"
                        id="numberInput"
                        onChange={() => setNumberAllowed((prev) => !prev)}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        checked={charAllowed}
                        className="cursor-pointer"
                        onChange={() => setCharAllowed((prev) => !prev)}
                    />
                    <label>Special Characters</label>
                </div>
            </div>
        </div>
    );
}
