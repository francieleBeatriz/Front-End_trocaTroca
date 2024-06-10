
import { StyledContainerModalAdicionar, 
    StyledLabelAdicionarContato, 
    StyledInputAdicionarContato, 
    StyledBotaoAdicionarContato, 
    StyledSpanImportantAdicionarContato ,
    StyledSpanAdicionarContato
} from "../../assets/styles/StyledComponents";

import iconeAdicionar from "../../assets/images/iconeAdicionar2.svg";
import Input from "../atoms/Input";
import { useState } from "react";

export function ModalAdicionarContato()
{
    return (
        <StyledContainerModalAdicionar>
            <StyledLabelAdicionarContato>
                <StyledSpanAdicionarContato>
                    <StyledSpanImportantAdicionarContato>Apelido.</StyledSpanImportantAdicionarContato> adicione alguém.
                </StyledSpanAdicionarContato>
                <StyledInputAdicionarContato/>
            </StyledLabelAdicionarContato>
            <StyledBotaoAdicionarContato>
                <img src={iconeAdicionar} 
                alt="uma imagem de um icone do simbolo da operação matemática de soma" />
            </StyledBotaoAdicionarContato>
        </StyledContainerModalAdicionar>
    );
}