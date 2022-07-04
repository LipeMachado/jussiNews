import styled from 'styled-components';

export const ArrowProfileContainerMenuDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const MyProfileTextH2 = styled.h2`
    font-family: EinaRegular;
    font-size: 15px;
    margin-right: 10px;
`;

export const ArrowProfileContainerDiv = styled.div`
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-bottom: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    cursor: pointer;
    transform: rotate(135deg);
    transition: all 0.5s;
`;