import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function CampoApelido({ onChange }: { onChange: (text: string) => void }) {
  return (
    <div>
      <Label texto="Apelido. " subtexto="apelidos são únicos"/>
      <Input placeholder="digite aqui..." onChange={(event) => onChange(event.target.value)} type="text"/>
    </div>
  );
}

export default CampoApelido;