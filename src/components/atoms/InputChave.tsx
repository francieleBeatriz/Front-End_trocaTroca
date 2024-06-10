import React, { useState } from 'react';
import { StyledInputChave } from '../../assets/styles/StyledComponents';

interface InputChaveProps {
  type?: string;
  value?: string;
  onChange?: any
}

const InputChave: React.FC<InputChaveProps> = ({ type = "password" , value = "daslfjadslkjf", onChange}) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
  };

  return (
    <StyledInputChave
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputChave;
