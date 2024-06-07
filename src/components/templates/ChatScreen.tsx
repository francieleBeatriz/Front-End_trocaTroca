import React, { Component } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatList';

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
    const chats = ['Chat 1', 'Chat 2', 'Chat 3']; // Amostra de dados de chats

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
        <ChatList chats={chats} />
      </div>
    );
  }
}

