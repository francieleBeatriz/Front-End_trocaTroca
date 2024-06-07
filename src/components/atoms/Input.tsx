import React from 'react';
import { StyledInput } from '../../assets/styles/StyledComponents'

interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeBridge<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className }) => {
    return (
        <StyledInput 
            type="text" 
            className={className} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
        />
    );
}

export default Input;
