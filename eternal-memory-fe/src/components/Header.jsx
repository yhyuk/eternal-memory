import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                <span>
                    무안공항 온라인 분향소
                </span>
            </Title>
            <Content1>
                무안공항 여객기 사고로
                <br />
                고인이 되신 분들의 명복을 빕니다.
            </Content1>
            <Content2>유가족분들께 작은 위로가 되길 바랍니다.</Content2>
            <Image src="/flower.png" alt="Flower" />
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.header`
    background-color: #d8d2cb;
    padding-top: 20px;
    text-align: center;
    border-bottom: 2px solid #ddd;
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
        font-size: 22px;
        margin-top: 12px;
        margin-bottom: 12px;
    }
`

const Content2 = styled.p`
    font-size: 20px;
    font-weight: bold;

    @media (max-width: 767px) {
        margin: 0;
        font-size: 16px;
    }
`
const Image = styled.img`
    vertical-align: top;
    max-width: 480px;

    @media (max-width: 767px) {
        width: 80%;
        max-width: 400px;
        margin: 0 auto;
    }
`;
