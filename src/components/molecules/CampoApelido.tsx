import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const CampoApelido = () => {
  return (
    <div>
      <Label texto="Apelido. " subtexto="apelidos são únicos"/>
      <Input placeholder="digite aqui..."/>
    </div>
  );
}

export default CampoApelido;
