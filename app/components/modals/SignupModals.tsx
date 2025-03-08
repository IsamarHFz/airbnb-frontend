'use client';


import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const signupModal = useSignupModal();

    const content = (
        <>
            <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please log in</h2>
            
            <form className="space-y-4">
                <input 
                    placeholder="Your e-mail address" 
                    type="email" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />
                
                <input 
                    placeholder="Your password" 
                    type="password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <input 
                    placeholder="Repeat password" 
                    type="password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <div className="p-5 bg-airbnb text-twhite rounded-xl opacity-80 text-white">
                    The error message
                </div>

                <CustomButton onClick={() => console.log('Login Submitted')}>
                    Submit
                </CustomButton>
            </form>
        </>
    );

    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    );
}

export default SignupModal;
