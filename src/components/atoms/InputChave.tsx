import React, { useState } from 'react';
import { StyledInputChave } from '../../assets/styles/StyledComponents';

interface InputChaveProps {
  type?: string;
}

const InputChave: React.FC<InputChaveProps> = ({ type }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
  };

  return (
    <StyledInputChave
      value={type === 'password' ? text.replace(/./g, '*') : text}
      onChange={handleChange}
    />
  );
};

export default InputChave;
