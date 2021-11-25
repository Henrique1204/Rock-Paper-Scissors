import React from 'react';

import { Container, ConteudoWrapper } from './ItemEscolha.styled';

import rock from '../../Assets/icon-rock.svg';
import paper from '../../Assets/icon-paper.svg';
import scissors from '../../Assets/icon-scissors.svg';

import { ThemeFundoKey } from '../../styles/theme';

const InfosEscolhas = {
    rock: {
        imagem: rock,
        cor: 'vermelho',
    },
    paper: {
        imagem: paper,
        cor: 'azul',
    },
    scissors: {
        imagem: scissors,
        cor: 'amarelo',
    }
};

type InfosEscolhasType = typeof InfosEscolhas;
type InfosEscolhasKey = keyof InfosEscolhasType;

type ItemEscolhaProps = {
    escolha: InfosEscolhasKey,
};

const ItemEscolha: React.FC<ItemEscolhaProps> = ({ escolha }) => {
    return (
        <Container cor={InfosEscolhas[escolha].cor as ThemeFundoKey}>
            <ConteudoWrapper>
                <img src={InfosEscolhas[escolha].imagem} alt={escolha} />
            </ConteudoWrapper>
        </Container>
    );
};

export default ItemEscolha;
