import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const CampoChave = () => {
  return (
    <div>
      <Label texto="Chave. " subtexto="chave única gerada para você"/>
      <Input placeholder="digite aqui..." type="text"/>
    </div>
  );
}

export default CampoChave;
