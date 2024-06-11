
import { StyledContainerModalAdicionar, 
    StyledLabelAdicionarContato, 
    StyledInputAdicionarContato, 
    StyledBotaoAdicionarContato, 
    StyledSpanImportantAdicionarContato ,
    StyledSpanAdicionarContato
} from "../../assets/styles/StyledComponents";

import iconeAdicionar from "../../assets/images/iconeAdicionar2.svg";

export function ModalAdicionarContato( 
    { onChange, onClick }: { onChange: (text: string) => void, onClick: () => void}
)
{
    return (
        <StyledContainerModalAdicionar>
            <StyledLabelAdicionarContato>
                <StyledSpanAdicionarContato>
                    <StyledSpanImportantAdicionarContato>Apelido.</StyledSpanImportantAdicionarContato> adicione alguém.
                </StyledSpanAdicionarContato>
                <StyledInputAdicionarContato onChange={(e) => onChange(e.target.value)}/>
            </StyledLabelAdicionarContato>
            <StyledBotaoAdicionarContato>
                <img src={iconeAdicionar} 
                alt="uma imagem de um icone do simbolo da operação matemática de soma" 
                onClick={ onClick }/>
            </StyledBotaoAdicionarContato>
        </StyledContainerModalAdicionar>
    );
}