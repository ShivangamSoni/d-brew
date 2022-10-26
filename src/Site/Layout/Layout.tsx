import type { FC, ReactNode } from "react";

import { Wrapper } from "./Styled.Components";
import Header from "../Header/Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <main>{children}</main>
        </Wrapper>
    );
};

export default Layout;
