import React from 'react';
import styled from 'styled-components';

import logo from '../../Assets/logo.svg';

const Container = styled.header`
    max-width: 700px;
    padding: 1.8rem 2.4rem;
    border: 3px solid ${({ theme }) => theme.cores.bordaDoHeader};
    border-radius: 1.5rem;
    margin: 0 auto;
`;

const LogoWrapper = styled.h1`
    width: 15.5rem;
    height: 9.2rem;
`;

const Header: React.FC = () => {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt='Rock Papper Scissor' />
            </LogoWrapper>
        </Container>
    );
};

export default Header;
