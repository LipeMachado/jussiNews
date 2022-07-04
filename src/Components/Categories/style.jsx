import styled from 'styled-components';

export const CategoriesContainerSection = styled.section`
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-top: 22px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    margin-bottom: 30px;
    width: 770px;

    svg {
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: var(--green-black);
        }
    }
`;

export const CategoriesDiv = styled.div`
    padding: 5px 13px;
    background-color: white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-right: 21px;

    &:hover {
        background-color: var(--green-hover-button);
    }

    &.active {
        background-color: var(--green-black);
        color: var(--white);
    }
`;