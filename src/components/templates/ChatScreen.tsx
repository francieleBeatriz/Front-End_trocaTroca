import React, { useState, useEffect } from 'react';
import { SearchBar } from '../molecules/SearchBar';
import { ChatList } from '../organisms/ChatLista';
import BotaoLista from '../atoms/BotaoLista';
import iconeAdicionar from '../../assets/images/iconeAdicionar.svg';

import { 
  StyledBotaoLista, 
  StyledBotaoAdicionar, 
  StyledContainerChat 
} from '../../assets/styles/StyledComponents';

import { ModalAdicionarContato } from '../organisms/ModalAdicionarContato';
import { UsuarioController } from '../../controllers/UsuarioController';

export const ChatScreen = () => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ filterOption, setFilterOption ] = useState('Existing');
  const [ selectedTab, setSelectedTab ] = useState('Conversas');
  const [ abrirModalAdicionarContato, setAbrirModalAdicionarContato ] = useState(false);
  const [ contato, setContato ] = useState("");

  const [chats, setChats] = useState<any[]>([]);

  useEffect(() => {
    const USUARIO = localStorage.getItem("usuario") ?? "";
    const CAMINHO = 'chats';

    const adicionarContatoALista = (chaves: any, participantes?: any) => {
      if (!chaves || !participantes) {
        
        return;
      }
      console.log(chaves);
      const ARRAY_USUARIOS:any = {};

      for( let i = 0; i < chaves.length; i++)
      {
        ARRAY_USUARIOS["id"] = chaves[i];
        ARRAY_USUARIOS["nome"] = Object.values(participantes[i])[0];
      }

      console.log(ARRAY_USUARIOS);
      //setChats(usuariosArray);
    }

    UsuarioController.iniciarMonitoramento(USUARIO, CAMINHO, adicionarContatoALista);
  }, []); // Array de dependências vazio para garantir que seja executado apenas uma vez

  const handleSearch = () => {
    // Lógica para pesquisa
  };

  const handleFilterChange = (option: string) => {
    setFilterOption(option);
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const salvarContato = () => {
    UsuarioController.adicionarContato(contato);
  }

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

      <BotaoLista textoBotao="Conversas" cor={selectedTab === 'Conversas' ? 'white' : '#6a2025'} />
      <BotaoLista textoBotao="Grupos" cor={selectedTab === 'Grupos' ? 'white' : '#6a2025'} />

      <ChatList chats={chats.map((chat, index) => ({ id: index, nome: chat.id }))} />
      
      <BotaoLista
        cor="white"
        textoBotao="Adicionar Contato"
        imgBotao={iconeAdicionar}
        onClick={ () => setAbrirModalAdicionarContato(true) }
        reverse={true}
      />
      
      { abrirModalAdicionarContato && <ModalAdicionarContato onChange={setContato} onClick={salvarContato}></ModalAdicionarContato> }
    </StyledContainerChat>
  );
}