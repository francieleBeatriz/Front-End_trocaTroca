// Molecules
// SearchBar.tsx
import React from 'react';
import Input from '../atoms/Input';

import searchIcon from "../../assets/images/search-icon.svg";
import styles from "../../assets/styles/SearchBar.module.css";
import Botao from '../atoms/Botao';

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
        <div className={styles.searchBarContainer}>
          <button className={styles.button} onClick={this.props.onSearch}>
            <img src={searchIcon} alt="Search" className={styles.searchIcon} />
          </button>
          <Input
            className={styles.inputText}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <select
            className={styles.inputSelect}
            value={this.props.selectedFilterOption}
            onChange={(e) => this.props.onFilterChange(e.target.value)}
          >
            {this.props.filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        );
    }
}
