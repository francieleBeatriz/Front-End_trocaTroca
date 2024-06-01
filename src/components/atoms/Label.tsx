import React, { Component } from 'react';

interface LabelProps {
    texto: string;
    subtexto: string;
}

class Label extends Component<LabelProps> {
    render() {
        return (
                <p id="label">
                    {this.props.texto}.
                    <span> {this.props.subtexto}
                    </span>
                </p>
        );
    }
}

export default Label;