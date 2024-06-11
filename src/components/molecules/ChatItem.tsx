import React from 'react';
import { Link } from 'react-router-dom';

import styles from "../../assets/styles/ChatItem.module.css";

import iconePin from "../../assets/images/iconePin.svg";

interface ChatItemProps {
  chat: string;
  caminhoFoto: string;
  chatId: string;
}

export class ChatItem extends React.Component<ChatItemProps> 
{
    render(): React.ReactNode {  
      return (
        <div className={styles.containerChat}>
          <div>
            <img src={this.props.caminhoFoto} className={styles.perfil}/>
          </div>
          <div className={styles.nomeChat}>
            <Link style={{ textDecoration: "none", color: "#0d0c0c" }} to={`/chatConversa/${this.props.chatId}/${this.props.chat}`}>{this.props.chat}</Link>
          </div>
          <div>
            <img src={iconePin} alt="icone de fixado" />
          </div>
        </div>
      );
    }
};
