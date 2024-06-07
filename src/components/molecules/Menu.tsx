import React, { useContext } from 'react';
import { ContentContext } from '../organisms/FormularioCadastro';

import TituloPagina from '../atoms/TituloPagina';
import IconePagina from '../atoms/IconePagina';

import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg';

import IconeAvatar from '../../assets/images/iconeAvatar.svg'

export function Menu()
{
  const { setContent } = useContext(ContentContext);

  return (
      <div id="menuNav">
          <div id="navCadastrar" onClick={() => setContent("cadastrar")}>
              <IconePagina iconePagina={IconeInformacoes}/>
              <TituloPagina textoTitulo="CADASTRAR"/>
          </div>
          <div id="navAvatar" onClick={() => setContent("avatar")}>
              <IconePagina iconePagina={IconeAvatar}/>
              <TituloPagina textoTitulo="AVATAR"/>
          </div>
      </div>
  );
}