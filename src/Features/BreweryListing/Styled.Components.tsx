import styled from "styled-components";

export const Wrapper = styled.div`
    color: ${({ theme }) => theme.white[500]};
`;

export const Title = styled.h2``;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;

    gap: 20px;
`;

export const ListItem = styled.li`
    cursor: pointer;
`;

export const Info = styled.p`
    text-align: center;
`;
