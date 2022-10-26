import { FC } from "react";

const Pagination: FC<{
    pageNum: number;
    onNext: () => void;
    onPrev: () => void;
}> = ({ pageNum, onNext, onPrev }) => {
    return (
        <div>
            <h1>{pageNum}</h1>

            <button onClick={onNext}>Next</button>
            <button onClick={onPrev}>Previous</button>
        </div>
    );
};

export default Pagination;
