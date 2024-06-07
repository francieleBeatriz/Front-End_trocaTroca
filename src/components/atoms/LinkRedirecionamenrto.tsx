import React from 'react';
import { StyledLink } from '../../assets/styles/StyledComponents';

interface RedirecionaProps {
    textoLabel: string;
    textoLink: string;
}

const LinkRedirecionamento: React.FC<RedirecionaProps> = ({ textoLabel, textoLink }) => {
    return (
        <p>
            {textoLabel}
            <StyledLink href="#">{textoLink}</StyledLink>
        </p>
    );
}

export default LinkRedirecionamento;
