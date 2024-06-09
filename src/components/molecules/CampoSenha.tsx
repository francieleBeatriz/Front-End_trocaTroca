import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function CampoSenha({ onChange }: { onChange: (text: string) => void }) {
  return (
    <div>
      <Label texto="Senha. " subtexto="use algo imprevisível" />
      <Input placeholder="digite aqui..." onChange={(event) => onChange(event.target.value)}/>
    </div>
  );
};

export default CampoSenha;
