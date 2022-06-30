import styled from 'styled-components';

export const NewsletterContainerDiv = styled.div`
    background-color: var(--white);
    font-family: EinaRegular;
    font-weight: bold;
    padding: 20px 30px;
    display: block;
    align-items: center;
    justify-content: center;

    span {
        font-size: 13px;
        color: var(--amber-black);
        white-space: nowrap;
        margin-bottom: 10px;
    }

    input {
        font-family: EinaRegular;
        border-radius: 4px;
        border: none;
        width: 230px;
        height: 38px;
        margin: 13px 0 13px 0;
        padding: 0 0 0 14px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        background-color: var(--gray);

        &:focus {
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }

    button {
        font-family: EinaRegular;
        width: 244px;
        height: 38px;
        border-radius: 4px;
        border: none;
        background-color: var(--green);
        cursor: pointer;
        color: var(--amber-black);
        transition: all 0.5s;

        &:hover {
            background-color: var(--green-hover-button);
        }

        &:focus {
            border: 2px solid var(--green-black);
        }
    }
`;