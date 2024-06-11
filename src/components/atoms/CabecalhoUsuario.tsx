import { Link } from 'react-router-dom';
import { StyledCabecalhoUsuario } from '../../assets/styles/PaginaConversa';
import setaVoltar from '../../assets/images/setaVoltar.svg';

const CabecalhoUsuario = ({nomeUsuario}: {nomeUsuario: string}) => {
    return (
        <StyledCabecalhoUsuario>
            <Link to="/chatLista"><img src={setaVoltar} alt="icone seta voltar" /></Link>
            <p>{nomeUsuario}</p>
        </StyledCabecalhoUsuario>
    );
}

export default CabecalhoUsuario;