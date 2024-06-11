import React from 'react';
import styles from "../../assets/styles/ChatList.module.css";
import { ChatItem } from '../molecules/ChatItem';

interface ChatListProps {
  chats: { id: string; nome: string; caminhoFoto: string }[];
}

export const ChatLista: React.FC<ChatListProps> = ({ chats }) => {
  return (
    <div className={styles.chatListContainer}>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chatId={chat.id} chat={chat.nome} caminhoFoto={chat.caminhoFoto} />
      ))}
    </div>
  );
};


