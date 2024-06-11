import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChatItem } from '../molecules/ChatItem';

interface SearchModalProps {
  onClose: () => void;
  contacts: string[];
  initialSearchValue: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose, contacts, initialSearchValue }) => {
  const [searchValue, setSearchValue] = useState(initialSearchValue);
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    handleSearch(initialSearchValue);
  }, [initialSearchValue]);

  const handleSearch = (value: string) => {
    if (value.trim() === '') {
      setSearchResults([]);
    } else {
      const results = contacts.filter(contact => contact.toLowerCase().includes(value.toLowerCase()));
      setSearchResults(results);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <StyledSearchModal
            type="text"
            placeholder="Pesquisar Contato..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <ChatItem key={index} chat={result} />
            ))
          ) : (
            <NoResultsText>Nenhum resultado encontrado</NoResultsText>
          )}
        </ModalBody>
      </ModalContent>
      <Backdrop onClick={onClose} />
    </ModalContainer>
  );
};

export default SearchModal;

const StyledSearchModal = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #0d0c0c;
  outline: none;
  font-size: 20px;
  color: #F03A47;

  &::placeholder {
    font-size: 15px;
    color: #962930b8;
    font-family: "Roboto Slab", serif;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 600px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(16, 15, 15, 0.95);
  border-radius: 5px;
  border: 2px solid #F03A47;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #F03A47;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const NoResultsText = styled.div`
  padding: 10px;
  text-align: center;
  color: #F03A47;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 15, 15, 0.95);
  z-index: 1000;
`;
