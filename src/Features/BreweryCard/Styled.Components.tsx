import styled from "styled-components";

export const Card = styled.div`
    background-color: hsl(20, 100%, 70%);
    padding: 1rem;
    border-radius: 5px;

    display: grid;
    gap: 20px;
`;

export const CardHead = styled.header``;

export const CardBody = styled.div``;

export const CardFoot = styled.footer``;

export const Title = styled.h3`
    font-size: 1rem;
`;

export const Info = styled.div`
    display: flex;
    flex-flow: column nowrap;

    & > :nth-child(2) {
        padding-left: 2rem;
    }
`;

export const Label = styled.span`
    font-weight: 600;
`;

export const Address = styled.address``;

export const Type = styled.span``;

export const SiteLink = styled.a`
    word-break: break-all;
`;
