import styled from 'styled-components';

export const PostsContainerSection = styled.section`
    width: 771px;
    height: 164px;
    background-color: var(--white);
    margin-bottom: 25px;
`;

export const PostsBoxDiv = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 75%;
    position: relative;
`;

export const PostsTextsDiv = styled.div`
    width: 600px;
    font-family: EinaRegular;
`;

export const PostsTitleH1 = styled.h1`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const PostsParagraphP = styled.p`
    font-size: 13px;
    width: 97%;
    margin-bottom: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const PostsOptionsDiv = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 20px;
`;

export const PostsTimeSpan = styled.span`
    font-size: 12px;
    margin-right: 20px;
`;

export const PostsShareDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        span {
            color: var(--green-black);
        }
        
        svg {
            color: var(--green-hover-button);
        }
    }

    svg {
        color: var(--green-black);
        margin-right: 5px;
        transition: all 0.2s ease-in-out;
    }
`;

export const PostsShareTextSpan = styled.span`
    font-size: 13px;
    transition: all 0.2s ease-in-out;
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