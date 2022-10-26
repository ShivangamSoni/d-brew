import type { FC } from "react";

import { Wrapper, Button, Label } from "./Styled.Components";

const Pagination: FC<{
    pageNum: number;
    onNext: () => void;
    onPrev: () => void;
}> = ({ pageNum, onNext, onPrev }) => {
    return (
        <Wrapper>
            <Button onClick={onPrev}>Previous</Button>
            <Label>{pageNum}</Label>
            <Button onClick={onNext}>Next</Button>
        </Wrapper>
    );
};

export default Pagination;
