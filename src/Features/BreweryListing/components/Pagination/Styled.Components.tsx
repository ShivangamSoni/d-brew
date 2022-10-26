import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const Button = styled.button`
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;

    background-color: ${({ theme }) => theme.white[500]};
    padding: 0.3em 1em;
`;

export const Label = styled.span`
    font-size: 1rem;
    font-weight: 600;
`;
