import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                <span>
                    제주항공 여객기 사고 온라인 분향소
                </span>
            </Title>
            <Content1>
                제주항공 여객기 사고로
                <br />
                고인이 되신 분들의 명복을 빕니다.
            </Content1>
            <Content2>말로는 다 표현할 수 없을 유가족들의 슬픔에 깊은 위로를 전합니다.</Content2>
            <Subtitle>사랑하는 사람을 추모하는 공간입니다.</Subtitle>
            <Image src="/img-flower.png" alt="Flower" />
        </HeaderContainer>

    );
};

export default Header;

const HeaderContainer = styled.header`
    background-color: #f8f8f8;
    padding-top: 20px;
    text-align: center;
    border-bottom: 2px solid #ddd;
    font-family: 'NanumMyeongjo';
`;

const Title = styled.h1`
    display: inline;
    margin: 70px 0 0;
    padding: 7px 25px 3px;
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    background-color: #222222;
    word-break: keep-all;
    text-align: center;
    line-height: 1.5;
    border-radius: 25px;
    font-size: 2rem;

    @media (max-width: 420px) {
        margin-bottom: 20px;
    }

    @media (max-width: 560px) {
        margin-bottom: 10px;
        font-size: 16px;
        letter-spacing: -0.1em;
    }

    @media (max-width: 767px) {
        padding: 5px 20px !important;
        font-size: 18px;
    }
`;

const Content1 = styled.p`
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 767px) {
        margin: 0;
        font-size: 24px;
    }
`

const Content2 = styled.p`
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 767px) {
        margin: 0;
        font-size: 24px;
    }
`

const Subtitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    color: #777;
`;

const Image = styled.img`
    vertical-align: top;
    max-width: 100%;

    @media (max-width: 767px) {
        width: 80%;
        max-width: 400px;
        margin: 0 auto;
    }
`;
