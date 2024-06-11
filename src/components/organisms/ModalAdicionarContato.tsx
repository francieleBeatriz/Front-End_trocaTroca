import { StyledContainerModalAdicionar, 
    StyledLabelAdicionarContato, 
    StyledInputAdicionarContato, 
    StyledBotaoAdicionarContato, 
    StyledSpanImportantAdicionarContato ,
    StyledSpanAdicionarContato
} from "../../assets/styles/StyledComponents";

import iconeAdicionar from "../../assets/images/iconeAdicionar2.svg";

export function ModalAdicionarContato( { onChange, onClick, onClose }: { onChange: (text: string) => void, onClick: () => void,  onClose: () => void})
{
    const handleClose = (e: any) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    return (
        <StyledContainerModalAdicionar onClick={handleClose}>
            <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", alignItems: "center", gap: "5px"}}>
                <StyledLabelAdicionarContato>
                    <StyledSpanAdicionarContato>
                        <StyledSpanImportantAdicionarContato>Apelido.</StyledSpanImportantAdicionarContato> adicione alguém.
                    </StyledSpanAdicionarContato>
                    <StyledInputAdicionarContato onChange={(e) => onChange(e.target.value)}/>
                </StyledLabelAdicionarContato>
                <StyledBotaoAdicionarContato onClick={onClick}>
                    <img src={iconeAdicionar} 
                    alt="uma imagem de um icone do simbolo da operação matemática de soma" />
                </StyledBotaoAdicionarContato>
            </div>
        </StyledContainerModalAdicionar>
    );
}