import React from 'react';

import styles from "../../assets/styles/ChatItem.module.css";

import pinOutline from "../../assets/images/pin-outline.svg";

interface ChatItemProps {
  chat: string; // Assuming chat is represented by a string for simplicity
}

export class ChatItem extends React.Component<ChatItemProps> 
{
    render(): React.ReactNode {  
      return (
        <div className={styles.chatContainer}>
          <div>
            <div className={styles.profile}></div>
          </div>
          <div className={styles.chatName}>
            {this.props.chat}
          </div>
          <div>
            <img src={pinOutline} alt="" />
          </div>
        </div>
      );
    }
};
