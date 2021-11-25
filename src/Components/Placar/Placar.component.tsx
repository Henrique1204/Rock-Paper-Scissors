import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.gradientes.brancoInicial} 0%, ${theme.gradientes.brancoFinal} 100%);`};
`;

const Titulo = styled.h2`
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    color: ${({ theme }) => theme.cores.textoEscuro};

    span {
        font-size: 1.6rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        color: ${({ theme }) => theme.cores.textoPontuacao};
        display: block;
    }
`;

const Placar: React.FC = () => {
    return (
        <Container>
            <Titulo>
                <span>Score</span>
                12
            </Titulo>
        </Container>
    );
};

export default Placar;
