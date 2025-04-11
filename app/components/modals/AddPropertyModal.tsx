'use client';
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import Modal from "./Modal";
import Image from 'next/image';
import { ChangeEvent, useState } from "react";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
import SelectCountry, {SelectCountryValue} from "../forms/SelectCountry";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
import { strict } from "assert";
import { error } from "console";

const AddPropertyModal = () => {
    // STATES
    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);
    //
    const addPropertyModal = useAddPropertyModal();
    const router = useRouter()
    //
    // SET DATAS
    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage)
        }
    }
    // SUBMIT
    const submitForm  = async () => {
        console.log('submitForm'); 

        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataCountry &&
            dataImage 
        ) {
            const formData = new FormData();
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('bedrooms', dataBedrooms);
            formData.append('bathrooms', dataBathrooms);
            formData.append('guests', dataGuests);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);

            const response = await apiService.post('/api/properties/create/', formData);
            
            if (response.success) {
                console.log('SUCCES :)');

                router.push('/');

                addPropertyModal.close();
            } else {
                console.log('Error');

                const tmpErrors: string[] = Object.values(response).map((error: any) => {
                    return error;
                })

                setErrors(tmpErrors)
            }
        }
    }
    //

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Choose category</h2>  
                    
                    <Categories 
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />

                    <CustomButton onClick={() => setCurrentStep(2)}>
                        Next
                    </CustomButton>
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Describe your place</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Title</label> 
                            <input
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="pt-3 pb-6 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label>Description</label> 
                                <textarea
                                    value={dataDescription}
                                    onChange={(e) => setDataDescription(e.target.value)}
                                    className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                    <CustomButton
                        className="mb-2 bg-black hover:bg-gray-700"
                        onClick={() => setCurrentStep(1)}>
                            Previous
                    </CustomButton>

                    <CustomButton onClick={() => setCurrentStep(3)}>
                        Next
                    </CustomButton>
                </>
            ): currentStep == 3 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Details</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Price per night</label> 
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice((e.target.value))}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    
                        <div className="flex flex-col space-y-2">
                            <label>Bedrooms</label> 
                            <input
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms((e.target.value))}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Bathrooms</label> 
                            <input
                                type="number"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms((e.target.value))}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    
                        <div className="flex flex-col space-y-2">
                            <label>Maximum number of guests</label> 
                            <input
                                type="number"
                                value={dataGuests}
                                onChange={(e) => setDataGuests((e.target.value))}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    
                        <div className="flex flex-col space-y-2">
                            <label>Title</label> 
                            <input 
                                type="number"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>

                    <CustomButton
                        className="mb-2 bg-black hover:bg-gray-700"
                        onClick={() => setCurrentStep(2)}>
                            Previous
                    </CustomButton>

                    <CustomButton 
                        onClick={() => setCurrentStep(4)}>
                        Next
                    </CustomButton>
                </>
            ) : currentStep == 4 ? ( 
                <>
                    <div className="pt-3 pb-6 space-y-4">
                        <SelectCountry 
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>

                    <h2 className='mb-6 text-2xl'>Location</h2>  
                    
                    <CustomButton
                        className="mb-2 bg-black hover:bg-gray-700"
                        onClick={() => setCurrentStep(3)}>
                            Previous
                    </CustomButton>

                    <CustomButton 
                        onClick={() => setCurrentStep(5)}>
                        Next
                    </CustomButton>
                </>
            ): (
                <>
                    <h2 className='mb-6 text-2xl'>Image</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={setImage}
                            />
                        </div>
                        {dataImage && (
                            <div className="w-[200px] h-[150px] relative">
                                <Image 
                                    fill
                                    alt="Uploaded image"
                                    src={URL.createObjectURL(dataImage)}
                                    className='w-full h-full object-cover rounded-xl'
                                />
                            </div>
                        )}
                    </div>

                    {errors.map((error, index) => {
                        return (
                            <div 
                                key={index}
                                className="p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80"
                            >
                                {error}
                            </div>
                        )
                    })}

                    <CustomButton
                        className="mb-2 bg-black hover:bg-gray-700"
                        onClick={() => setCurrentStep(4)}>
                            Previous
                    </CustomButton>

                    <CustomButton 
                        onClick={submitForm}>
                        Submit
                    </CustomButton>
                </>
            )}
        </>
    )
    

    return (
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add property"
                content={content}
            />
        </>
    )
}

export default AddPropertyModal; 