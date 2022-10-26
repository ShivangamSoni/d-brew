import { useEffect, useState, useRef } from "react";
import axios from "axios";

import type { IBrewery } from "../../src/Site/Common/Types";
import { useRouter } from "next/router";
import { getQueryURL } from "../../src/Site/Common/Constants";
import BreweryListing from "../../src/Features/BreweryListing/BreweryListing";

export default function Home() {
    const {
        query: { query },
    } = useRouter();

    const [pageNum, setPageNum] = useState(1);
    const previousPageNum = useRef(pageNum);
    const [breweries, setBreweries] = useState<IBrewery[] | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    getQueryURL(query as string, pageNum),
                );
                setBreweries(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, [query, pageNum]);

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
            {!!breweries && (
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
