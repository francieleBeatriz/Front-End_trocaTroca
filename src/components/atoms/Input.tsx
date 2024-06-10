import React from 'react';
import { StyledInput } from '../../assets/styles/StyledComponents';

interface InputProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type?: string;
}   

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className, type}) => {
    return (
        <StyledInput  
            className={className} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            type={type} 
        />
    );
}

export default Input;
