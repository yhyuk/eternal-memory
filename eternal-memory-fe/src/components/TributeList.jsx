import React from 'react';
import styled from 'styled-components';

const TributeList = () => {
    const tributes = [
        { name: '홍길동', message: '영원히 기억할 것입니다.' },
        { name: '김철수', message: '당신의 미소는 항상 기억될 거예요.' },
    ];

    return (
        <Container>
            <TributeSection>
                <div>
                    <span>함께 기억해주신 분들 </span>
                    <span>100 명</span>                                       
                </div>
                <TributeListContainer>
                    {tributes.map((tribute, index) => (
                        <TributeCard key={index}>
                            <p>{tribute.message}</p>
                            <Profile>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.75C11.0711 9.75 12.75 8.07107 12.75 6C12.75 3.92893 11.0711 2.25 9 2.25C6.92893 2.25 5.25 3.92893 5.25 6C5.25 8.07107 6.92893 9.75 9 9.75Z" fill="#DADADA" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 15.75C15 14.1587 14.3679 12.6326 13.2426 11.5074C12.1174 10.3821 10.5913 9.75 9 9.75C7.4087 9.75 5.88258 10.3821 4.75736 11.5074C3.63214 12.6326 3 14.1587 3 15.75" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10C7.4087 10 5.88258 10.6321 4.75736 11.7574C3.63214 12.8826 3 14.4087 3 16H15C15 14.4087 14.3679 12.8826 13.2426 11.7574C12.1174 10.6321 10.5913 10 9 10Z" fill="#DADADA" stroke="#DADADA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <div>{tribute.name}</div>
                            </Profile>
                        </TributeCard>
                    ))}
                </TributeListContainer>
            </TributeSection>
        </Container>
    );
};

export default TributeList;

const Container = styled.article`
    
`

const TributeSection = styled.section`
    padding: 20px;
    text-align: center;
    width:100%;

    @media (min-width: 768px) {
        max-width: 500px;
    }

    @media (min-width: 768px) {
        width: 500px;
    }
`;

const Profile = styled.div`
    display: flex;
`

const TributeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TributeCard = styled.div`
  background-color: black;
  color: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
