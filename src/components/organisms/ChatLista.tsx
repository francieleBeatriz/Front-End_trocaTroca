import React from 'react';

import styles from "../../assets/styles/ChatList.module.css";
import { ChatItem } from '../molecules/ChatItem';

interface ChatListProps {
  chats: string[]; 
}

export class ChatList extends React.Component<ChatListProps> 
{
    render(): React.ReactNode {
        return (
          <div className={styles.chatListContainer}>
              {this.props.chats.map((chat) => (
                <ChatItem key={chat} chat={chat}></ChatItem>
              ))}
          </div>
        );
    }
};