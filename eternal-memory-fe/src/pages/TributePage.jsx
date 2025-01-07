import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import TributeWrite from '../components/TributeWrite';

const TributePage = () => {
    return (
        <Container>
            <Header />
            <TributeWrite />
      </Container>
      );
};

export default TributePage;

const Container = styled.div`
    font-family: 'NanumMyeongjo';
`