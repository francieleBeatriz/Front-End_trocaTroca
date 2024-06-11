import React from 'react';

interface FilterDropdownProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
}

export class FilterDropdown extends React.Component<FilterDropdownProps>
{
    render(): React.ReactNode { 
        return (
        <select value={this.props.selectedOption} onChange={(e) => this.props.onChange(e.target.value)}>
          {this.props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
};