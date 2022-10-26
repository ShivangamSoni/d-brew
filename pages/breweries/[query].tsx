import { useEffect, useState, useRef } from "react";
import axios from "axios";

import { ALL_BREWERY_URL } from "../../src/Site/Common/Constants";
import BreweryListing from "../../src/Features/BreweryListing/BreweryListing";
import { useCtxState, useDispatch } from "../../src/Context/Context";
import { setBreweries } from "../../src/Context/ListingState/actions";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IBrewery } from "../../src/Site/Common/Types";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home(props: { breweriesProp: IBrewery[] }) {
    const {
        query: { query },
    } = useRouter();
    const { breweriesProp } = props;
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const state = useCtxState();
    const breweries = state?.listing?.breweries;

    useEffect(() => {
        if (!breweriesProp) {
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
        } else {
            // @ts-expect-error
            dispatch(setBreweries(breweriesProp));
        }
    }, [dispatch, breweriesProp]);

    return (
        <>
            <Head>
                <title>DBrew: Brewery Search</title>
                <meta
                    key="description"
                    name="description"
                    content={`Brewery Listing For Search Term: ${query}`}
                />
            </Head>

            {loading ? (
                <Skeleton height={550} />
            ) : (
                <>{!!breweries && <BreweryListing />}</>
            )}
        </>
    );
}

export const getServerSideProps = async () => {
    try {
        const { data } = await axios.get(ALL_BREWERY_URL);

        return {
            props: {
                breweriesProp: data,
            },
        };
    } catch (e: any) {
        const status = e.response.status;

        if (status === 404) {
            return {
                notFound: true,
            };
        }

        // For 500
        throw new Error("Something Went Wrong");
    }
};
