import { FC, MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Container, Wrapper } from "./Styled.Components";

const Modal: FC<{ onClose?: () => void; children: ReactNode }> = ({
    children,
    onClose,
}) => {
    const handleClick: MouseEventHandler = (e) => {
        e.stopPropagation();
        if (!!onClose) {
            onClose();
        }
    };

    return createPortal(
        <Wrapper>
            <Container>
                {!!onClose && <button onClick={handleClick}>&times;</button>}
                {children}
            </Container>
        </Wrapper>,
        document.getElementById("modal") as HTMLElement,
    );
};

export default Modal;
