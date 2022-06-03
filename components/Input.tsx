import Image from "next/image";
import { useState } from "react";

function Input(){

    const [input,setInput] = useState("");

    return (
        <div
            className={`border-b border-gray-200 p-3 flex space-x-3 overflow-hidden`}
        >
            <img src={'https://yt3.ggpht.com/yti/APfAmoFEvwA525FagnnvCJ7dcCmwp2P1AOLWo9yBCzgVzO8=s88-c-k-c0x00ffffff-no-rj-mo'} 
                className="h-11 w-11 rounded-full cursor-pointer"
            />

            <div className="w-full divide-y divide-gray-200">
                <div className={``}>
                    <textarea className="bg-transparent outline-none text-gray-700 text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                        placeholder="What's happening?"
                        onChange={(e) => setInput(e.target.value)}
                    name="" id="" rows={2}value={input}></textarea>
                </div>

                <div className="relative">
                    {/* <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">

                    </div> */}

                </div>
            </div>

        </div>
    )
}

export default Input;