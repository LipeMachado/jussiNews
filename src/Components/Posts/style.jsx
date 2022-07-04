import styled from 'styled-components';

export const PostsContainerSection = styled.section`
    width: 771px;
    height: 164px;
    background-color: var(--white);
`;

export const PostsBoxDiv = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const PostsTextsDiv = styled.div`
    width: 600px;
`;

export const PostsTitleH1 = styled.h1`
    font-family: EinaRegular;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const PostsParagraphP = styled.p`
    font-family: EinaRegular;
    font-size: 13px;
    width: 97%;
`;

export const PostsImageDiv = styled.div`
    width: 130px;
    height: 100px;
`;

export const PostsImageImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`;