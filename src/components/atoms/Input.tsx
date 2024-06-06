import React, { Component } from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string
}

class Input extends Component<InputProps> {
    render() {
        return (
            <input type="text" className={this.props.className} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
        );
    }
}

export default Input;
