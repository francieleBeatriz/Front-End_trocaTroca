import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { StyledMainMenu, StyledNavItem } from '../../assets/styles/StyledComponents';

import TituloPagina from '../atoms/TituloPagina';
import IconePagina from '../atoms/IconePagina';

import IconeInformacoes from '../../assets/images/pessoaInformacoes.svg';
import IconeAvatar from '../../assets/images/iconeAvatar.svg';
import IconeCadeado from '../../assets/images/iconeCadeado.svg';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: any) => location.pathname === path;

  const navItems = {
    '/login': [
      { title: 'ENTRAR', icon: IconeInformacoes, path: '/login' },
      { title: 'ESQUECEU A SENHA?', icon: IconeCadeado, path: '/esqueceusenha' }
    ],
    '/esqueceusenha': [
      { title: 'ENTRAR', icon: IconeInformacoes, path: '/login' },
      { title: 'ESQUECEU A SENHA?', icon: IconeCadeado, path: '/esqueceusenha' }
    ],
    '/avatar': [
      { title: 'CADASTRAR', icon: IconeInformacoes, path: '/cadastrar' },
      { title: 'AVATAR', icon: IconeAvatar, path: '/avatar' }
    ],
    'default': [
      { title: 'CADASTRAR', icon: IconeInformacoes, path: '/cadastrar' },
      { title: 'AVATAR', icon: IconeAvatar, path: '/avatar' }
    ]
  };

  const items = navItems[location.pathname] || navItems['default'];

  return (
    <StyledMainMenu>
      {items.map(item => (
        <StyledNavItem key={item.path} onClick={() => navigate(item.path)}>
          <IconePagina 
          iconePagina={item.icon}
           filter={isActive(item.path) ? "brightness(0) invert(1)" : "brightness(0) saturate(100%) invert(18%) sepia(11%) saturate(6887%) hue-rotate(322deg) brightness(92%) contrast(97%)"}
           />

          <TituloPagina 
          textoTitulo={item.title} 
          cor={isActive(item.path) ? "white" : "#6a2025"} 
          underline={isActive(item.path)}
          />
        </StyledNavItem>
      ))}
    </StyledMainMenu>
  );
};

export default Menu;
