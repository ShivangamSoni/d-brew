import styled from "styled-components";

export const StyledHead = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Title = styled.h1``;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const ListItem = styled.li``;

export const NavLink = styled.a`
    &:hover {
        color: cornflowerblue;
    }
`;
