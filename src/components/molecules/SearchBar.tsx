import React from 'react';
import Input from '../atoms/Input';

import searchIcon from "../../assets/images/search-icon.svg";

import { StyledPesquisaContato } from '../../assets/styles/StyledComponents';
import { StyledBotaoPesquisar } from '../../assets/styles/StyledComponents';
import { StyledSelect } from '../../assets/styles/StyledComponents';

import styles from "../../assets/styles/SearchBar.module.css";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  filterOptions: string[];
  selectedFilterOption: string;
  onFilterChange: (option: string) => void;
}

export class SearchBar extends React.Component<SearchBarProps>
{
    render(): React.ReactNode {
        return (
        <StyledPesquisaContato>
          <StyledBotaoPesquisar onClick={this.props.onSearch}>
            <img src={searchIcon} alt="Search" />
          </StyledBotaoPesquisar>
          <Input
            className={styles.inputText}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <StyledSelect
            value={this.props.selectedFilterOption}
            onChange={(e) => this.props.onFilterChange(e.target.value)}
          >
            {this.props.filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </StyledSelect>
        </StyledPesquisaContato>
        );
    }
}
