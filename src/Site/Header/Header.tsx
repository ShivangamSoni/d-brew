import Link from "next/link";
import type { FC } from "react";
import Search from "../../Features/Search/Search";

import { SITE_NAV_LINKS } from "./Constants";
import {
    StyledHead,
    Title,
    Actions,
    Nav,
    NavList,
    ListItem,
    NavLink,
} from "./Styled.Components";

const Header: FC = () => {
    return (
        <StyledHead>
            <Title>DBrew</Title>

            <Actions>
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
                <Search />
            </Actions>
        </StyledHead>
    );
};

export default Header;
