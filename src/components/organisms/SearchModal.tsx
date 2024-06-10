import React, { useState } from 'react';
import styled from 'styled-components';

import { SearchBar } from '../molecules/SearchBar';

interface SearchModalProps {
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilterOption, setSelectedFilterOption] = useState('');
  const filterOptions = ['Option 1', 'Option 2', 'Option 3'];
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    // Dummy search logic for demonstration purposes
    setResults([
      'Result 1',
      'Result 2',
      'Result 3',
    ]);
  };

  return (
    <ModalContainer>
      <ModalHeader>
        <SearchBar
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          filterOptions={filterOptions}
          selectedFilterOption={selectedFilterOption}
          onFilterChange={setSelectedFilterOption}
        />
        <CloseButton onClick={onClose}>X</CloseButton>
      </ModalHeader>
      <ModalBody>
        {results.map((result, index) => (
          <ResultItem key={index}>{result}</ResultItem>
        ))}
      </ModalBody>
    </ModalContainer>
  );
};

export default SearchModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f5f5f5;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;
