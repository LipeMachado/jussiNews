import styled from 'styled-components';

export const LogoContainerDiv = styled.div`
    
`;

export const LogoUl = styled.ul`
    display: flex;

    li {
        background-color: var(--green);
        width: 13px;
        height: 13px;
        border-radius: 100%;
        margin-right: 10px;
        list-style: none;
    }

    li:nth-child(2) {
        margin-right: 20px;
    }
`;