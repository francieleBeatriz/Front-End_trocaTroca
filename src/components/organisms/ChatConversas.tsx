import React, { useEffect, useState } from 'react';
import CabecalhoUsuario from '../atoms/CabecalhoUsuario';
import { StyledContainerConversas } from '../../assets/styles/PaginaConversa';
import InputConversas from '../atoms/InputConversas';
import { CardUsuario } from '../molecules/CardUsuario';
import { CardUsuarioAmigo } from '../molecules/CardUsuarioAmigo';
import { StyledMensagensContainer } from '../../assets/styles/PaginaConversa';
import { useParams } from 'react-router-dom';
import { UsuarioController } from '../../controllers/UsuarioController';
const ChatConversas = () => {
  const { chatId, usuario } =  useParams<{ chatId: string; usuario: string }>();
  const [mensagens, setMensagens] = useState<any[]>([]);
  const [ mensagem, setMensagem ] = useState<string>('');

  useEffect(() => {
    const adicionarMensagensAoChat = async (mensagens: any) => {
      setMensagens(await mensagens);
      console.log(mensagens);
    }

    UsuarioController.monitorarMensagensDoChat(chatId, adicionarMensagensAoChat);

  }, [chatId]);

  const enviarMensagem = async () => {
    if (mensagem.trim() !== '') 
      await UsuarioController.enviarMensagem(chatId ?? "", mensagem ?? "");
  }

  return (
   <StyledContainerConversas>
        <CabecalhoUsuario nomeUsuario={usuario ?? ""}/>
        <StyledMensagensContainer>
        {mensagens.map((mensagem, index) => {
          // Verifique se a mensagem é do usuário atual ou do outro usuário
          if (mensagem.senderId === localStorage.getItem('usuario')) {
            return <CardUsuario key={index} 
            usuario={mensagem.senderId} 
            caminhoFoto={mensagem.senderFotoPath}
            mensagem={mensagem.text}
            timestamp={formatarTimestamp(mensagem.timestamp)} />;
          } else {
            return <CardUsuarioAmigo 
            key={index} 
            usuario={mensagem.senderId} 
            caminhoFoto={mensagem.senderFotoPath}
            mensagem={mensagem.text} 
            timestamp={formatarTimestamp(mensagem.timestamp)}/>;
          }
        })}
        </StyledMensagensContainer>
        <InputConversas onChange={setMensagem} onClick={enviarMensagem}/>
   </StyledContainerConversas>
  );
}


function formatarTimestamp(timestamp: number) {
  const data = new Date(timestamp);
  
  // Formatando hora e minutos
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const horaMinuto = `${horas}:${minutos < 10 ? '0' : ''}${minutos}`;

  // Formatando dia, mês e ano
  const dia = data.getDate();
  const mes = data.getMonth() + 1; // Adiciona 1, pois os meses são baseados em zero
  const ano = data.getFullYear();
  const diaMesAno = `${dia}/${mes}/${ano}`;

  // Juntando as partes formatadas
  return `${horaMinuto} - ${diaMesAno}`;
}


export default ChatConversas;
