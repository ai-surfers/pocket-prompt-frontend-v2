import styled from "styled-components";

export const Extension6Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 533px;
    width: 100%;
    background-color: var(--gray-50, #f7f8f9);

    @media screen and (max-width: 1024px) {
        height: auto;
        padding: 80px 0px 50px;
    }
`;

export const Title = styled.p`
    color: var(--gray-700, #2e3040);
    text-align: center;
    font-family: Pretendard;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 144%; /* 51.84px */
    letter-spacing: -0.72px;

    @media screen and (max-width: 1279px) {
        font-size: 32px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 24px;
    }
`;

export const CarouselWrap = styled.div`
    width: 100%;
    height: 204px;
    margin-top: 28px;

    .slick-slide > div {
        margin: 0 8px;
    }
    .slick-list {
        margin: 0 -8px;
    }
`;

export const CarouselCard = styled.div`
    width: 376px;
    height: 204px;
    display: flex;
    padding: 24px 28px 28px 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    border-radius: 24px;
    background: #fff;

    @media screen and (max-width: 1279px) {
        padding: 24px;
    }
`;

export const CarouselCardTitleWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    @media screen and (max-width: 1279px) {
        margin-bottom: 12px;
    }
`;

export const CarouselCardUserName = styled.p`
    color: var(--gray-400, #818491);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.28px;

    @media screen and (max-width: 1279px) {
        font-size: 12px;
    }
`;

export const CarouselCardUserImg = styled.img`
    width: 40px;
    height: 40px;

    @media screen and (max-width: 1279px) {
        width: 28px;
        height: 28px;
    }
`;

export const CarouselCardDescription = styled.p`
    color: var(--gray-600, #3e4151);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    @media screen and (max-width: 1279px) {
        font-size: 14px;
    }
`;
