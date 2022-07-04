import styled from 'styled-components';

export const ProfileMenuContainerSection = styled.div`
    position: absolute;
    top: 70px;
    width: 150px;
    padding: 1rem;
    transform: translateX(-45%);
    background-color: var(--white);
    z-index: 99;
    border-radius: 5px;
    border: 1px solid transparent;
    overflow: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;

    &.active {
        opacity: 1;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const MenuItemsDiv = styled.div`
    display: block;
    font-family: EinaRegular;
    font-weight: 500;
`;

export const ItemMetamaskDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--gray);
    }

    &:span {
        font-size: 13px;
    }
`;