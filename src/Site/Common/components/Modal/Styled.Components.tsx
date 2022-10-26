import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #000000af;
`;

export const Container = styled.div`
    width: min(400px, 98%);
    position: relative;
`;

export const Button = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;

    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;

    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.white[500]};
`;
