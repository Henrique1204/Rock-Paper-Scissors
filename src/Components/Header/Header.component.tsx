import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    max-width: 700px;
    padding: 1.8rem 2.4rem;
    border: 3px solid ${({ theme }) => theme.cores.bordaDoHeader};
    border-radius: 1.5rem;
    margin: 0 auto;
`;

const Header: React.FC = () => {
    return <Container></Container>;
};

export default Header;
