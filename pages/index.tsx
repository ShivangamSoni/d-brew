import { useEffect, useState } from "react";
import axios from "axios";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import type { IBrewery } from "../src/Site/Common/Types";
import { RANDOM_URL } from "../src/Site/Common/Constants";
import BreweryCard from "../src/Features/BreweryCard/BreweryCard";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IBrewery | null>(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(RANDOM_URL, {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                });
                setData(data[0]);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                console.error(e);
            }
        })();
    }, []);

    return (
        <>
            {loading ? (
                <Skeleton height={200} />
            ) : (
                <>{!!data && <BreweryCard data={data} full />}</>
            )}
        </>
    );
}
