import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background-image: linear-gradient(
        to bottom,
        ${({ theme }) => theme.tertiary},
        ${({ theme }) => theme.primary}
    );
`;

export const Container = styled.div`
    width: min(1000px, 98%);
    margin-inline: auto;
    padding-block: 1rem;
`;
