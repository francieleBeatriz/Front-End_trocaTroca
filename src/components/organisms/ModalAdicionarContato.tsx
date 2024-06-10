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

export function ModalAdicionarContato({ onClose })
{
    const handleClose = (e: any) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    return (
        <StyledContainerModalAdicionar onClick={handleClose}>
            <div onClick={(e) => e.stopPropagation()}>
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
            </div>
        </StyledContainerModalAdicionar>
    );
}