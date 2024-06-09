import React, { Component } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatLista';
import Botao from '../atoms/Botao';
import iconeAdicionar from '../../assets/images/iconeAdicionar.svg'
import { StyledBotaoLista } from '../../assets/styles/StyledComponents';

import styles from '../../assets/styles/ChatScreen.module.css';

interface ChatScreenState {
  searchValue: string;
  filterOption: string;
}

export class ChatScreen extends Component<{}, ChatScreenState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchValue: '',
      filterOption: 'Existing',
    };
  }

  handleSearch = () => {
    // Lógica para pesquisa
  };

  handleFilterChange = (option: string) => {
    this.setState({ filterOption: option });
  };

  render() {
    const { searchValue, filterOption } = this.state;
    const chats = ['Nome do usuário', 'Nome do usuário', 'Nome do usuário'];

    return (
      <div className={styles.chatScreenContainer}>
        <SearchBar
          placeholder="Search"
          value={searchValue}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          onSearch={this.handleSearch}
          filterOptions={['Contatos', 'Usuários']}
          selectedFilterOption={filterOption}
          onFilterChange={this.handleFilterChange}
        />
        <StyledBotaoLista>
          <Botao textoBotao="Conversas"/>
          <Botao textoBotao="Grupos"/>
        </StyledBotaoLista>
          <ChatList chats={chats} />
          <Botao textoBotao="Adicionar Contato" imgBotao={iconeAdicionar} reverse="true"/>
      </div>
    );
  }
}

