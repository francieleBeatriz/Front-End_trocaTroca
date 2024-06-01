import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

export default class App extends React.Component 
{
  render() 
  {
    return (
      <div>
        <Label texto="Apelido" subtexto="apelidos são únicos"/>
        <Input placeholder="digite aqui..."/>
      </div>
    );
  }
}