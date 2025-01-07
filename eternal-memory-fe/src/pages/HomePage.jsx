import React from 'react';
import Header from '../components/Header';
import TributeList from '../components/TributeList';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Header />
      <TributeList />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
    font-family: 'NanumMyeongjo';
`