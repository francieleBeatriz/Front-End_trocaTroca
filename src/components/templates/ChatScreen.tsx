import React, { Component } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatLista';
import BotaoLista from '../atoms/BotaoLista';
import iconeAdicionar from '../../assets/images/iconeAdicionar.svg';
import { StyledBotaoLista, StyledBotaoAdicionar, StyledContainerChat } from '../../assets/styles/StyledComponents';
import styles from '../../assets/styles/ChatScreen.module.css';

interface ChatScreenState {
  searchValue: string;
  filterOption: string;
  selectedTab: string;
}

export class ChatScreen extends Component<{}, ChatScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchValue: '',
      filterOption: 'Existing',
      selectedTab: 'Conversas',
    };
  }

  handleSearch = () => {
    // Lógica para pesquisa
  };

  handleFilterChange = (option: string) => {
    this.setState({ filterOption: option });
  };

  handleTabChange = (tab: string) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { searchValue, filterOption, selectedTab } = this.state;
    const chats = ['Nome do usuário', 'Nome do usuário'];

    return (
      <StyledContainerChat>
        <SearchBar
          placeholder="Buscar Usuário"
          value={searchValue}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          onSearch={this.handleSearch}
          filterOptions={['Contatos', 'Usuários']}
          selectedFilterOption={filterOption}
          onFilterChange={this.handleFilterChange}
        />
        <StyledBotaoLista onClick={() => this.handleTabChange('Conversas')}>
          <BotaoLista textoBotao="Conversas" cor={selectedTab === 'Conversas' ? 'white' : '#6a2025'} />
        </StyledBotaoLista>
        <StyledBotaoLista onClick={() => this.handleTabChange('Grupos')}>
          <BotaoLista textoBotao="Grupos" cor={selectedTab === 'Grupos' ? 'white' : '#6a2025'} />
        </StyledBotaoLista>
          
        <ChatList chats={chats} />

          <StyledBotaoAdicionar>
            <BotaoLista cor="white" textoBotao="Adicionar Contato" imgBotao={iconeAdicionar} reverse={true} />
          </StyledBotaoAdicionar>
      </StyledContainerChat>
    );
  }
}

export default ChatScreen;
