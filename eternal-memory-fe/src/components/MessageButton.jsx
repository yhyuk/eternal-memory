import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const MessageButton = () => {
  const navigate = useNavigate();  // useHistory 대신 useNavigate 사용

  const handleClick = () => {
    navigate('/message');  // history.push 대신 navigate 사용
  };

  return (
    <ButtonSection>
      <Button onClick={handleClick}>마음 전달하러 가기</Button>
    </ButtonSection>
  );
};

export default MessageButton;

const ButtonSection = styled.section`
  padding: 20px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
