import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const CampoChave = ({ onChange }: { onChange: (text: string) => void }) => {
  return (
    <div>
      <Label texto="Chave. " subtexto="chave única gerada para você"/>
      <Input placeholder="digite aqui..." type="text" onChange={(event) => onChange(event.target.value)}/>
    </div>
  );
}

export default CampoChave;
