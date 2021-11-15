import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export const useSetStateByInputEvent = <T>(defaultValues: T) => {
    const [values, setValues] = useState<T>({ ...defaultValues });

    const handleInputChange = (prop: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleCheckboxChange = (prop: keyof T) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.checked });
    };

    const handleSelectChange = (prop: keyof T) => (event: SelectChangeEvent) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const clearValues = () => setValues({ ...defaultValues });

    return { values, handleInputChange, handleCheckboxChange, handleSelectChange, clearValues };
};
