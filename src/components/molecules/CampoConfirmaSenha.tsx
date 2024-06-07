import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const CampoConfirmaSenha = () => {
  return (
    <div>
      <Label texto="Confirmar Senha. " subtexto="repita a senha"/>
      <Input placeholder="digite aqui..."/>
    </div>
  );
}

export default CampoConfirmaSenha;
