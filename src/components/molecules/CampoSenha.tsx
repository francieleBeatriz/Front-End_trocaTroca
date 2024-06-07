import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const CampoSenha = () => {
  return (
    <div>
      <Label texto="Senha. " subtexto="use algo imprevisível" />
      <Input placeholder="digite aqui..." />
    </div>
  );
};

export default CampoSenha;
