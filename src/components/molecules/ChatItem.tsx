import React from 'react';

import styles from "../../assets/styles/ChatItem.module.css";

import iconePin from "../../assets/images/iconePin.svg";

interface ChatItemProps {
  chat: string;
}

export class ChatItem extends React.Component<ChatItemProps> 
{
    render(): React.ReactNode {  
      return (
        <div className={styles.containerChat}>
          <div>
            <div className={styles.perfil}></div>
          </div>
          <div className={styles.nomeChat}>
            {this.props.chat}
          </div>
          <div>
            <img src={iconePin} alt="icone de fixado" />
          </div>
        </div>
      );
    }
};
