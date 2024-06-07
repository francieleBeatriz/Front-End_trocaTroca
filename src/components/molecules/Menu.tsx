import React from 'react';

import TituloPagina from '../atoms/TituloPagina';
import IconePagina from '../atoms/IconePagina';

import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg';
import IconeAvatar from '../../assets/images/iconeAvatar.svg';

import { StyledMainMenu, StyledNavItem } from '../../assets/styles/StyledComponents';

const Menu = () => {
  return (
    <StyledMainMenu>
      <StyledNavItem>
        <IconePagina iconePagina={IconeInformacoes} />
        <TituloPagina textoTitulo="CADASTRAR" />
      </StyledNavItem>
      
      <StyledNavItem>
        <IconePagina iconePagina={IconeAvatar} />
        <TituloPagina textoTitulo="AVATAR" />
      </StyledNavItem>
    </StyledMainMenu>
  );
};

export default Menu;
