'use client';
import { FaPaperPlane } from "react-icons/fa6";
import CustomButton from "../forms/CustomButton";

const ConversationDetail = () => {
    return(
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">John Doe</p>
                    <p>Hola django</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-airbnb">
                    <p className="font-bold text-white">Code With Stein</p>
                    <p className="text-white">Hola airbnb </p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton 
                    onClick={() => console.log('clicked')}
                    className="w-[40px] h-[40px] flex justify-center items-center p-2"
                >
                    <FaPaperPlane className="text-white text-lg" />
                </CustomButton>
            </div>
        </>
    )
}

export default ConversationDetail;
