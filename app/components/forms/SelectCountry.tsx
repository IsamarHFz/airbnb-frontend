'use client'; 

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';


export type SelectCountryValue = {
    label: string;
    value: string;
}

interface selectCountryProps {
    value?: SelectCountryValue; 
    onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<selectCountryProps> = ({
    value, 
    onChange,
}) => {
    const {getAll} = useCountries();
    return (
        <>
            <Select 
                isClearable
                placeholder="Anywhere"
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as SelectCountryValue)}
            />
        </>
    )
}

export default SelectCountry;