import styled from 'styled-components';
import { ThemeFundoKey } from '../../styles/theme';

type ContainerProps = {
    cor: ThemeFundoKey;
};

export const Container = styled.div<ContainerProps>`
    width: fit-content;
    padding: 2.3rem;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${({ theme, cor }) => theme.fundo[cor]};
    box-shadow: inset 0 -9px 0 0 ${({ theme, cor }) => theme.sombras[cor]};
`;

export const ConteudoWrapper = styled.div`
    width: 15.2rem;
    height: 15.2rem;
    padding: 3rem;
    border-radius: 50%;
    background: ${({ theme }) => `linear-gradient(0deg, ${theme.gradientes.brancoInicial} 0%, ${theme.gradientes.brancoFinal} 100%);`};
    box-shadow: inset 0px 8px 0 ${({ theme }) => theme.sombras.cinza};
`;
