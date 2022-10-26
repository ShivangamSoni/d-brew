import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { ALL_BREWERY_URL, getQueryURL } from "../../src/Site/Common/Constants";
import BreweryListing from "../../src/Features/BreweryListing/BreweryListing";
import { useCtxState, useDispatch } from "../../src/Context/Context";
import { setBreweries } from "../../src/Context/ListingState/actions";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const state = useCtxState();
    const breweries = state?.listing?.breweries;

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(ALL_BREWERY_URL);
                // @ts-expect-error
                dispatch(setBreweries(data));
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.error(e);
            }
        })();
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Skeleton height={550} />
            ) : (
                <>{!!breweries && <BreweryListing />}</>
            )}
        </>
    );
}
