import React from 'react';
import { StyledLink } from '../../assets/styles/StyledComponents';

interface RedirecionaProps {
    textoLabel: string;
    textoLink: string;
    to: string; 
}

const LinkRedirecionamento: React.FC<RedirecionaProps> = ({ textoLabel, textoLink, to }) => {
    return (
        <p>
            {textoLabel}
                <StyledLink to={to} component={StyledLink}>
                    {textoLink}
                </StyledLink>
        </p>
    );
}

export default LinkRedirecionamento;
