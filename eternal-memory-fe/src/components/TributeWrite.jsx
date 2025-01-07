import React, { useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

const TributeWrite = () => {
    const [message, setMessage] = useState(''); 
    const [buttonsVisible, setButtonsVisible] = useState(true); 

    const maxCharacters = 1000; 

    // 버튼 handler
    const handleButtonClick = (text) => {
        setMessage(text);
        setButtonsVisible(false); 
    };

    // 글자수
    const handleTextareaChange = (e) => {
        const value = e.target.value;
        if (value.length <= maxCharacters) {
            setMessage(value);
        }
    };

    // 랜덤 닉네임
    const nicknames = [
        "빛나는_기억", "따뜻한_위로", "영원한_사랑", "평화로운_쉼", 
        "소중한_추억", "그리운_마음", "아름다운_길", "하늘의_별빛", 
        "기억의_등불", "고요한_바람", "찬란한_빛", "다정한_손길", 
        "깊은_애도", "잊지_않겠습니다", "작은_기도", "따뜻한_마음"
    ];
    
    // 랜덤 알파벳 
    const generateUniqueSuffix = () => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return `_${chars[Math.floor(Math.random() * chars.length)]}${chars[Math.floor(Math.random() * chars.length)]}`;
    };
    
    // 유니크 추출
    const getRandomNickname = () => {
        const baseNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
        const uniqueSuffix = generateUniqueSuffix();
        return baseNickname + uniqueSuffix;
    };

    // submit
    const handleSubmit = () => {
        const data = {
            name: getRandomNickname(),
            content: message,
        }

        axios
            .post(`https://memorialspace.shop/api`, data)
            .then((response) => {
                window.location.href = "https://memorialspace.shop";
            })
            .catch((error) => {
                alert('등록 실패:', error);
            });
    };

    return (
        <Container>
            <TributeSection>
                <StyledTextarea
                    placeholder="진심 어린 한마디 남겨주세요."
                    value={message}
                    onChange={handleTextareaChange}
                />
                <CharacterCount>
                    {message.length} / {maxCharacters}자
                </CharacterCount>
                {buttonsVisible && (
                    <ButtonContainer>
                        <StyledButton onClick={() => handleButtonClick("그곳에서는 평안하시길 기원합니다.")}>
                            그곳에서는 평안하시길 기원합니다.
                        </StyledButton>
                        <StyledButton onClick={() => handleButtonClick("소중한 기억 속에서 영원히 살아계실 것입니다.")}>
                            소중한 기억 속에서 영원히 살아계실 것입니다.
                        </StyledButton>
                        <StyledButton onClick={() => handleButtonClick("그리움과 사랑으로 기억하겠습니다.")}>
                            그리움과 사랑으로 기억하겠습니다.
                        </StyledButton>
                    </ButtonContainer>
                )}
                <SubmitButton onClick={handleSubmit}>마음 전달하기</SubmitButton>
            </TributeSection>
        </Container>
    );
};

export default TributeWrite;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TributeSection = styled.section`
    padding: 20px;
    width:100%;
    max-width: 500px; 
    box-sizing: border-box; 
`;


const StyledTextarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding-top: 10px;
    font-size: 16px;
    font-family: 'NanumMyeongjo';
    border: 1px solid #ddd;
    border-radius: 8px;
    resize: none;

    &:focus {
        outline: none;
    }
`;

const CharacterCount = styled.div`
    margin-top: 10px;
    font-size: 14px;
    width: 100%;
    color: #666;
    text-align: right;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const StyledButton = styled.button`
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    font-family: 'NanumMyeongjo';
    cursor: pointer;
    width: 100%; 

    &:hover {
        background-color: #EAEAEA;
    }

    &:active {
        background-color: #EAEAEA;
    }
`;

const SubmitButton = styled.button`
    margin-top: 20px;
    background-color: #2E2E2E;
    color: #f8f8f8;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    font-family: 'NanumMyeongjo';
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: #4A4A4A;
    }

    &:active {
        background-color: #4A4A4A;
    }
`;
