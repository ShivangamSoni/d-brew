import styled from "styled-components";

export const StyledHead = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
    gap: 10px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.white[500]};
`;

export const Title = styled.h1`
    text-decoration: 2px solid underline;
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row wrap;
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
    padding: 0.3em 0.8em;

    position: relative;
    isolation: isolate;

    transition: color 350ms linear;

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: ${({ theme }) => theme.white[500]};
        transform: scaleX(0);
        transition: transform 300ms linear;
        transform-origin: right;
    }

    &:hover,
    &:active,
    &:focus,
    &.active {
        color: ${({ theme }) => theme.text};

        &::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;
