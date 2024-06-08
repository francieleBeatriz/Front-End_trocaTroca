import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import TituloPagina from '../atoms/TituloPagina';
import IconePagina from '../atoms/IconePagina';

import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg';
import IconeAvatar from '../../assets/images/iconeAvatar.svg';
import IconeCadeado from '../../assets/images/iconeCadeado.svg';

import { StyledMainMenu, StyledNavItem } from '../../assets/styles/StyledComponents';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getTitlesAndIcons = (path: any) => {
    switch (path) {
      case '/login':
        return { first: { title: 'ENTRAR', icon: IconeInformacoes, path: '/login' }, second: { title: 'ESQUECEU A SENDA?', icon: IconeCadeado, path: '/esqueceusenha' } };
      case '/esqueceusenha':
        return { first: { title: 'ENTRAR', icon: IconeInformacoes, path: '/login' }, second: { title: 'ESQUECEU A SENHA?', icon: IconeCadeado, path: '/esqueceusenha' } };
      case '/avatar':
        return { first: { title: 'CADASTRAR', icon: IconeInformacoes, path: '/cadastrar' }, second: { title: 'AVATAR', icon: IconeAvatar, path: '/avatar' } };
      default:
        return { first: { title: 'CADASTRAR', icon: IconeInformacoes, path: '/cadastrar' }, second: { title: 'AVATAR', icon: IconeAvatar, path: '/avatar' } };
    }
  };

  const { first, second } = getTitlesAndIcons(location.pathname);

  return (
    <StyledMainMenu>
      <StyledNavItem onClick={() => navigate(first.path)}>
        <IconePagina iconePagina={first.icon} />
        <TituloPagina textoTitulo={first.title} />
      </StyledNavItem>
      
      <StyledNavItem onClick={() => navigate(second.path)}>
        <IconePagina iconePagina={second.icon} />
        <TituloPagina textoTitulo={second.title} />
      </StyledNavItem>
    </StyledMainMenu>
  );
};

export default Menu;

