import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { getQueryURL } from "../../src/Site/Common/Constants";
import BreweryListing from "../../src/Features/BreweryListing/BreweryListing";
import { useCtxState, useDispatch } from "../../src/Context/Context";
import { setBreweries } from "../../src/Context/ListingState/actions";

export default function Home() {
    const {
        query: { query },
    } = useRouter();

    const dispatch = useDispatch();

    const [pageNum, setPageNum] = useState(1);
    const previousPageNum = useRef(pageNum);

    const state = useCtxState();
    const breweries = state?.listing?.breweries;

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    getQueryURL(query as string, pageNum),
                );
                // @ts-expect-error
                dispatch(setBreweries(data));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [query, pageNum, dispatch]);

    useEffect(() => {
        if (!!breweries && breweries.length === 0) {
            setPageNum(previousPageNum.current);
        }
    }, [breweries]);

    const onNext = () => {
        setPageNum((prev) => {
            previousPageNum.current = prev;
            return prev + 1;
        });
    };

    const onPrev = () => {
        setPageNum((prev) => {
            previousPageNum.current = prev;
            let newNum = prev - 1;
            return newNum <= 1 ? 1 : newNum;
        });
    };

    return (
        <>
            {!!breweries && breweries.length > 0 && (
                <BreweryListing
                    breweries={breweries}
                    pageNum={pageNum}
                    onNext={onNext}
                    onPrev={onPrev}
                />
            )}
        </>
    );
}
