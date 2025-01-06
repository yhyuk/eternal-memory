import React from 'react';
import Header from '../components/Header';
import TributeList from '../components/TributeList';
import MessageButton from '../components/MessageButton';

const HomePage = () => {
  return (
    <div>
      <Header />
      <TributeList />
      <MessageButton />
    </div>
  );
};

export default HomePage;
