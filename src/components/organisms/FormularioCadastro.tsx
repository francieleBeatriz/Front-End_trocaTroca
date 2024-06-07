import React, { useState, createContext, useContext } from 'react';

export const ContentContext = createContext({ content: 'Home', setContent: (newContent: string): void => {} });

import {Menu} from '../molecules/Menu'

import CampoApelido from '../molecules/CampoApelido';
import CampoSenha from '../molecules/CampoSenha';
import CampoConfirmaSenha from '../molecules/CampoConfirmaSenha';

import LinkRedirecionamento from '../atoms/LinkRedirecionamenrto';
import BotaoAvatar from '../atoms/BotaoAvatar';

export function FormularioCadastro()
{
  const [content, setContent] = useState('cadastrar');

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      <div id="form-cadastro">
        <Menu/>
        {content == "cadastrar" && (
          <>
            <CampoApelido />
            <CampoSenha />
            <CampoConfirmaSenha />
            <LinkRedirecionamento />
            <BotaoAvatar />
          </>
        )}
        {content == "avatar" && (
          <h1>Hello Worldd!</h1>
        )}
      </div>
    </ContentContext.Provider>
  );
}