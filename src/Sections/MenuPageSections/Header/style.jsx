import styled from "styled-components";

export const NavBarHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    padding: 0 40px;
    border-bottom: 1px solid var(--color-separator);
`;

export const LogoDiv = styled.div`
    display: flex;
    align-items: center;

`;

export const TextLogoDiv = styled.div`
    /* white-space: nowrap; */
`;

export const TextLogoH1 = styled.h1`
    font-family: EinaBold;
    font-size: 18px;
    color: var(--amber-black);
`;

export const SearchDiv = styled.div`
    position: relative;

    input {
        font-family: EinaRegular;
        width: 640px;
        padding: 10px 20px;
        background-color: var(--green-opacity);
        border: none;

        textarea:focus, &:focus, select:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }

    span {
        position: absolute;
        right: 10px;
        top: 6px;
    }
`;

export const ProfileDiv = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: 10px;
    }
`;

export const MyProfileDiv = styled.div`
    display: flex;
    align-items: center;
`;