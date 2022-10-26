import Link from "next/link";
import type { FC } from "react";

import { SITE_NAV_LINKS } from "./Constants";
import {
    StyledHead,
    Title,
    Nav,
    NavList,
    ListItem,
    NavLink,
} from "./Styled.Components";

const Header: FC = () => {
    return (
        <StyledHead>
            <Title>DBrew</Title>

            <Nav>
                <NavList>
                    {SITE_NAV_LINKS.map(({ id, label, href }) => (
                        <ListItem key={id}>
                            <Link href={href} passHref legacyBehavior>
                                <NavLink>{label}</NavLink>
                            </Link>
                        </ListItem>
                    ))}
                </NavList>
            </Nav>
        </StyledHead>
    );
};

export default Header;
