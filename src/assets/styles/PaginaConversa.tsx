/*Página de Chat de Conversa*/
import styled from 'styled-components';
import '../styles/App.css'

export const StyledContainerConversas = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
    justify-content: space-between;
    margin-top: 5px; 
    height: calc(100vh - 20px);
    background-color: #0d0c0c;
    
    overflow: hidden;

    @media (max-width: 600px) {
        padding: 0;
    }
`;
export const StyledCabecalhoUsuario = styled.div`
    background-color: #F03A47;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 400px;
    height: 40px;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 49%;
    transform: translateX(-50%); 
    z-index: 1000;


    font-size: 20px;
    font-weight: 800;

    padding: 4px;
    margin-top: 5px;
    margin-left: 2px;
    border-radius: 5px;

    img {
        position: absolute;
        left: 10px;
    }
    @media (max-width: 450px) {
        width: 390px;
    }
    @media (max-width: 400px) {
        width: 340px;
    }
    @media (max-width: 350px) {
        width: 325px;
    }
`;

export const StyledInputConversas = styled.div`
   background-color: #F03A47;
   display: flex;
   align-items: center;
   justify-content: space-between;

    width: 400px;
    height: 40px;

    border-radius: 5px;
    padding: 4px;
    margin-bottom: 5px;

    position: fixed;  
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); 
    z-index: 1000;
   
   input {
    background-color: transparent;
    border: none;
    font-size: 18px;
    padding-right: 10px;
    flex-grow: 1; 
    outline: none;
    color: black;
    margin-left: 5px;

    &::placeholder {
        color: #721f25b8;
    }
   }
   img {
        margin-right: 10px;
        transform: rotate(40deg);
        cursor: pointer;
   }
   button {
        background-color: transparent;
        border: none;
        cursor: pointer;
   }
    @media (max-width: 450px) {
        width: 390px;
    }
   @media (max-width: 400px) {
        width: 340px;  
   }
   @media (max-width: 350px) {
        width: 330px; 
   }
`;


export const StyledCardUsuarioAmigo = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    margin-top: 10px;
    padding: 0 10px;
    
`;

export const StyledCardMensagemAmigo = styled.div`
    width: 300px;
    background-color: #cccccc;
    border-radius: 15px;
    padding: 10px;
    font-family: "Roboto Slab", serif;
    
    p{
        margin-left: 10px;
        font-weight: 800;
    }
    div{
        margin-left: 10px;
        word-wrap: break-word;
    }
`;
export const StyledRodapeUsuarioAmigo = styled.div`
    display: flex;
    margin-top: 7px;

    img{
        
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #cccccc;
    }
    p{
        font-size: 10px;
        color: #cccccc;
        font-weight: 100;
        margin-left: auto;
    }
        @media (max-width: 450px) {
        p{
            margin-left: 35%;
        }
        @media (max-width: 400px) {
            p{
                margin-left: 38%;
            }
    }
`;

export const StyledCardUsuario = styled.div`
    display: flex;
    flex-direction: column;
 
    justify-content: flex-start;

    padding: 0 10px;
    margin-left: auto;
    
`;

export const StyledCardMensagem = styled.div`
    width: 300px;
    background-color: #F03A47;
    border-radius: 15px;
    padding: 10px;
    font-family: "Roboto Slab", serif;
    margin-top: 10px;

    p{
        margin-left: 10px;
        font-weight: 800;
    }
    div{
        margin-left: 10px;
        word-wrap: break-word;
    }
`;
export const StyledRodapeUsuario = styled.div`
    display: flex;
    margin-top: 7px;
    width: 100%;
    justify-content: space-between;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #cccccc;
    }
    p{
        font-size: 10px;
        color: #cccccc;
        font-weight: 100;
    }
        @media (max-width: 400px) {
        div{
            margin-left: 40%;
        }
    }
`;
export const StyledMensagensContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    margin: 5px 10px;
    height: calc(100vh - 90px);
    padding-top: 45px; 
    padding-bottom: 50px;  

    &::-webkit-scrollbar {
        display: none;
    }
`;
