import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Popup({ isOpen, onClose, content }) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-gradient-to-b from-[#0B0205] via-[#0B0205] to-[#2C1B47] text-gray-300 px-4 pt-10 pb-4 rounded-md w-[600px] h-[450px] relative">
                <button
                    className="absolute top-2 right-2 text-black font-bold"
                    onClick={onClose}
                >
                    <div className="flex flex-row items-center">
                        <div>
                            <AiOutlineCloseCircle size={30} className="text-[#69369E]" />
                        </div>
                    </div>
                </button>
                {content}
            </div>
        </div>
    );
}

export default Popup;