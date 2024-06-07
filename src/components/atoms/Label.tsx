import React from 'react';
import { StyledLabel, StyledSpan } from '../../assets/styles/StyledComponents';

interface LabelProps {
    texto: string;
    subtexto: string;
}

const Label: React.FC<LabelProps> = ({ texto, subtexto }) => {
    return (
        <StyledLabel>
            {texto}
            <StyledSpan>{subtexto}</StyledSpan>
        </StyledLabel>
    );
}

export default Label;
