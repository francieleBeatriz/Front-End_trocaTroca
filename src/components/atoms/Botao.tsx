import React from 'react';

interface BotaoProps {
  onClick: () => void;
  children: React.ReactNode;
}

export class Botao extends React.Component<BotaoProps>{
    render()
    {
        return(
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

