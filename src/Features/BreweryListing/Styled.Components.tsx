import styled from "styled-components";

export const Wrapper = styled.div``;

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

export const ListItem = styled.li``;
