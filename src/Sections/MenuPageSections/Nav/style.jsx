import styled from 'styled-components';

export const NavContainerSection = styled.section`
    display: block;
`;

export const NavListContainerDiv = styled.div`
    
`;

export const NavListUl = styled.ul`
    font-family: EinaRegular;

        li {
            display: flex;
            align-items: center;
            padding: 10px 10px 10px 0;
            margin-bottom: 10px;
            cursor: pointer;

            &:hover {
                span {
                    opacity: 1;
                }

                svg {
                    color: var(--green-black);
                }

                h1 {
                    color: var(--green-black);
                }
            }
            
            div {
                padding: 0 0 0 16px;
                display: flex;
                align-items: center;

                h1 {
                    font-size: 15px;
                    margin-left: 20px;
                }
            }

        }

        li.active {
            background-color: var(--green-opacity-select-nav);
            border-top-right-radius: 37px;
            border-bottom-right-radius: 37px;
            
            span {
                opacity: 1;
            }

            svg {
                color: var(--green-black);
            }

            h1 {
                color: var(--green-black);
            }
        }
`;

export const NavPointActiveSpan = styled.span`
    background-color: var(--green-black);
    width: 6px;
    height: 6px;
    margin: 0 0 0 13px;
    border-radius: 100%;
    opacity: 0;
`;