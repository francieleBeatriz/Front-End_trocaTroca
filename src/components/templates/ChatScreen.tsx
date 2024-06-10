import React, { useState } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatLista';
import BotaoLista from '../atoms/BotaoLista';
import iconeAdicionar from '../../assets/images/iconeAdicionar.svg';
import { StyledBotaoLista, StyledBotaoAdicionar, StyledContainerChat, StyledDivSepara } from '../../assets/styles/StyledComponents';
import styles from '../../assets/styles/ChatScreen.module.css';

import { ModalAdicionarContato } from '../organisms/ModalAdicionarContato';

export const ChatScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterOption, setFilterOption] = useState('Existing');
  const [selectedTab, setSelectedTab] = useState('Conversas');
  const [abrirModalAdicionarContato, setAbrirModalAdicionarContato] = useState(false);

  const handleSearch = () => {
    // Lógica para pesquisa
  };

  const handleFilterChange = (option: string) => {
    setFilterOption(option);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const chats = ['Nome do usuário', 'Nome do usuário'];

  return (
      <StyledContainerChat>
        <SearchBar
          placeholder="Buscar Usuário"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          filterOptions={['Contatos', 'Usuários']}
          selectedFilterOption={filterOption}
          onFilterChange={handleFilterChange}
        />

      <StyledDivSepara>
        <StyledBotaoLista active={selectedTab === 'Conversas'} onClick={() => handleTabChange('Conversas')}>
            Conversas
        </StyledBotaoLista>
        
        <StyledBotaoLista active={selectedTab === 'Grupos'} onClick={() => handleTabChange('Grupos')}>
            Grupos
        </StyledBotaoLista>
      </StyledDivSepara>

        <ChatList chats={chats.map((chat, index) => ({ id: index, name: chat }))} />
        
        <StyledBotaoAdicionar>
          <BotaoLista
            cor="white"
            textoBotao="Adicionar Contato"
            imgBotao={iconeAdicionar}
            onClick={() => setAbrirModalAdicionarContato(true)}
            reverse={true}
          />
        </StyledBotaoAdicionar>
        
        {abrirModalAdicionarContato && <ModalAdicionarContato onClose={() => setAbrirModalAdicionarContato(false)} />}
      </StyledContainerChat>
  );
};

export default ChatScreen;
