import React from 'react';
import styles from "../../assets/styles/ChatList.module.css";
import { ChatItem } from '../molecules/ChatItem';

interface ChatListProps {
  chats: { id: string; nome: string; }[];
}

export const ChatLista: React.FC<ChatListProps> = ({ chats }) => {
  return (
    <div className={styles.chatListContainer}>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat.nome} />
      ))}
    </div>
  );
};


