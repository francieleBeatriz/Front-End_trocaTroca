import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0d0c0c;
    font-family: "Roboto Slab", serif;
`;

export const StyledLogoTrocaTroca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F03A47;
    font-size: 20px;
    font-family: "Roboto Serif", serif;;

    width: 100%;
    padding: 10px 0; 
    position: fixed;
    top: 0;
    left: 0;
`;

export const StyledTamanhoImg = styled.img`
    width: 40px;
    height: 25px;
`;

export const StyledFormulario = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  min-height: 330px;

  gap: 10px;
  background-color: #F03A47;
  padding: 20px;
  border-radius: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 5px; 
  }

  @media (max-width: 400px) {
    padding: 10px;  
    max-width: 340px;
  }
`;

export const SyledChaveUnicaFormulario = styled.div`
    background-color: #F03A47;

    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 15px;

    border-radius: 10px;
`

export const StyledInput = styled.input`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid #0d0c0c;
    outline: none;
    font-size: 20px;

    &::placeholder {
        font-size: 15px;
        color: #962930b8;
        font-family: "Roboto Slab", serif;
    }
`;

export const StyledBotao = styled.button<{ reverse?: boolean }>`
    width: 30%;  
    min-height: 38px;  
    background-color: #0d0c0c;
    color: #F03A47;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: auto;
    display: flex;             
    align-items: center;       
    justify-content: center;
    font-family: "Roboto Slab", serif;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};

    img {
        margin-left: ${props => props.reverse ? '0' : '0'};
        margin-right: ${props => props.reverse ? '5px' : '0'};
    }
`;
export const StyledBotoesChave = styled.button<{ reverse?: boolean }>`
    display: flex;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: center;
    justify-content: center;
    background-color: #F03A47;
    border: none; 
    cursor: pointer;
    font-weight: 600;

    img{
        margin-right: 3px;
    }
`
export const StyledBotaoLista = styled.button`
    display: flex;
`
export const StyledDivBotoesChave = styled.div`
    display: flex;
    justify-content: space-between;
`
export const StyledInputChave = styled.input`
  height: fit-content;
  width: 100%;
  border-radius: 10px;
  border: none;
  background-color: #F03A47;
  border: 3px solid black;
  outline: none;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  resize: none;
  overflow-x: scroll;
`
export const StyledLabel = styled.p`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
`;

export const StyledSpan = styled.span`
    color: #962931;
`;

export const StyledLink = styled(Link)`
    color: #0d0c0c;
    font-weight: 800;
`;

export const StyledIconePagina = styled.img`
    width: 25px;
    height: 25px;
    margin-bottom: 8px;
`;

export const StyledMainMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledPrimeiroItemMenu = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledNavItem = styled.div`
    display: flex;             
    flex-direction: column;    
    align-items: center;      
    margin: 0 10px;
    cursor: pointer;
`;

export const StyledTituloPagina = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${props => props.color};
    text-decoration: ${props => (props.underline ? 'underline' : 'none')};
`;

export const StyledImagemAvatar = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    border: 2px solid black;
    overflow: hidden;
    margin: auto;
`;