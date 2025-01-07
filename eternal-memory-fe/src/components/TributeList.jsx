import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";
import styled from 'styled-components';

const TributeList = () => {
    const navigate = useNavigate();  
    const [letters, setLetters] = useState([]);

    // 게시글 목록
    useEffect(() => {
        axios
            .get("https://memorialspace.shop/api")
            .then((response) => {
                setLetters(response.data);
            })
            .catch((error) => {
                console.error("게시글을 가져오는 중 오류가 발생했습니다.", error);
            });
    }, []);

    // 날짜 포맷
    const formatTimeAgo = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
    
        const diffMs = now - createdDate; 
        const diffMinutes = Math.floor(diffMs / (1000 * 60)); 
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60)); 
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); 
    
        if (diffMinutes < 60) {
            if (diffMinutes <= 0) {
                return "방금전";
            }

            return `${diffMinutes}분 전`;
        } else if (diffHours < 24 && now.toDateString() === createdDate.toDateString()) {
            return `${diffHours}시간 전`;
        } else {
            return `${diffDays}일 전`;
        }
    };


    const handleClick = () => {
      navigate('/letter'); 
    };
  
    return (
        <Container>
            <TributeSection>
                <TributeMemory>
                    <Subtitle>사랑하는 사람을 추모하는 공간입니다.</Subtitle>
                    <span>함께 추모해주신 분들 </span>
                    <TributeCount>{letters.length} 명</TributeCount>                                      
                </TributeMemory>
                <TributeListContainer>
                    {letters.length === 0 ? (
                         <TributeCard>
                         <Message>따뜻한 위로로 첫 번째 마음을 전달해주세요.</Message>
                        </TributeCard>
                    ) : (
                        letters.map((letter, index) => (
                            <TributeCard key={index}>
                                <Message>{letter.content}</Message>
                                <ProfileContainer>
                                    <ProfileBox>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.75C11.0711 9.75 12.75 8.07107 12.75 6C12.75 3.92893 11.0711 2.25 9 2.25C6.92893 2.25 5.25 3.92893 5.25 6C5.25 8.07107 6.92893 9.75 9 9.75Z" fill="#DADADA" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 15.75C15 14.1587 14.3679 12.6326 13.2426 11.5074C12.1174 10.3821 10.5913 9.75 9 9.75C7.4087 9.75 5.88258 10.3821 4.75736 11.5074C3.63214 12.6326 3 14.1587 3 15.75" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10C7.4087 10 5.88258 10.6321 4.75736 11.7574C3.63214 12.8826 3 14.4087 3 16H15C15 14.4087 14.3679 12.8826 13.2426 11.7574C12.1174 10.6321 10.5913 10 9 10Z" fill="#DADADA" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                        <ProfileNickname>{letter.name}</ProfileNickname>
                                    </ProfileBox>
                                    <div>{formatTimeAgo(letter.createdAt)}</div>
                                </ProfileContainer>
                            </TributeCard>
                        ))   
                    )}
                </TributeListContainer>
                <ButtonSection>
                    <Button onClick={handleClick}>마음 전달하기</Button>
                </ButtonSection>
            </TributeSection>
        </Container>
    );
};

export default TributeList;

const Container = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: hidden;
`

const Subtitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #777;
    margin-top: 0
`;

const TributeMemory = styled.div`
    margin-bottom: 12px;
`

const TributeCount = styled.span`
    font-weight: bold;
`

const TributeSection = styled.section`
    padding: 20px;
    width:100%;

    @media (min-width: 768px) {
        max-width: 500px;
    }
`;

const Message = styled.div`
    margin-bottom: 12px;
    margin-top: 6px;

    @media (max-width: 767px) {
        font-size: 14px;
    }
`

const ProfileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    @media (max-width: 767px) {
        font-size: 14px;
        margin-bottom: 0;
    }
`

const ProfileBox = styled.div`
    display: flex;

    svg {
        width: 18px;
        height: 18px;

        @media (max-width: 767px) {
            width: 14px;
            height: 14px;
        }
    }
`

const ProfileNickname = styled.div`
    margin-left: 4px;
`

const TributeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    padding-right: 10px;
    box-sizing: border-box;
    margin-bottom: 12px;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #aaa;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
`;

const TributeCard = styled.div`
    background-color: #2E2E2E;
    color: #F5F5F5;
    font-weight: bold;
    padding: 14px;
    margin-bottom: 10px;
    border-radius: 8px;
    width: calc(100%);
    box-sizing: border-box; 
`;

const ButtonSection = styled.section`
  text-align: center;
`;

const Button = styled.button`
    background-color: white;
    color: black;
    width: 100%;
    font-size: 16px;
    font-family: 'NanumMyeongjo';
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #eee;
    }

`;
