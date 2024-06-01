import React from 'react';

import Menu from '../molecules/Menu'

import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';
import CampoConfirmaSenha from '../molecules/CampoConfirmaSenha';

import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import BotaoAvatar from '../atoms/BotaoAvatar';

export default class App extends React.Component 
{
  render() 
  {
    return (
      
      <div id="form-cadastro">
        <Menu/>
        <CampoApelido/> 
        <CampoSenha/>
        <CampoConfirmaSenha/>
        <LinkRedirecionamento/>
        <BotaoAvatar/>
      </div>
    );
  }
}