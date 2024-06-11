import React, { useState } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatLista';
import BotaoLista from '../atoms/BotaoLista';
import iconeAdicionar from '../../assets/images/iconeAdicionar.svg';
import { StyledBotaoLista, StyledBotaoAdicionar, StyledContainerChat, StyledDivSepara } from '../../assets/styles/StyledComponents';
import styles from '../../assets/styles/ChatScreen.module.css';

import { ModalAdicionarContato } from '../organisms/ModalAdicionarContato';
import SearchModal from '../organisms/SearchModal';

const contacts = [
  'Alice',
  'Fran',
  'Pablio',
  'Aurora',
  'Alvaro',
  'Fabricio',
  'Grace',
  'Hank',
  'Ivy',
  'Jack',
];

export const ChatScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterOption, setFilterOption] = useState('Contatos');
  const [selectedTab, setSelectedTab] = useState('Conversas');
  const [abrirModalAdicionarContato, setAbrirModalAdicionarContato] = useState(false);
  const [abrirModalPesquisarContato, setAbrirModalPesquisarContato] = useState(false);

  const handleSearch = () => {
    setAbrirModalPesquisarContato(true);
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
      {!abrirModalPesquisarContato ? (
        <SearchBar
          placeholder="Buscar Usuário"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          filterOptions={['Contatos', 'Usuários']}
          selectedFilterOption={filterOption}
          onFilterChange={handleFilterChange}
        />
      ) : (
        <SearchModal 
          onClose={() => setAbrirModalPesquisarContato(false)} 
          contacts={contacts}
          initialSearchValue={searchValue}
        />
      )}

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
