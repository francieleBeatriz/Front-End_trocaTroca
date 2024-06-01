import React, { Component } from 'react';

interface InputProps {
    placeholder: string;
}

class Input extends Component<InputProps> {
    render() {
        return (
            <input type="text" placeholder={this.props.placeholder} />
        );
    }
}

export default Input;
