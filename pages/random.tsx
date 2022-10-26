import { useEffect, useState } from "react";
import axios from "axios";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import type { IBrewery } from "../src/Site/Common/Types";
import { RANDOM_URL } from "../src/Site/Common/Constants";
import BreweryCard from "../src/Features/BreweryCard/BreweryCard";

export default function Random(props: { breweryProp: IBrewery }) {
    const { breweryProp } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<IBrewery | null>(null);

    useEffect(() => {
        if (!breweryProp) {
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
        } else {
            setData(breweryProp);
        }
    }, [breweryProp]);

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

export const getServerSideProps = async () => {
    try {
        const { data } = await axios.get(RANDOM_URL, {
            headers: {
                "Cache-Control": "no-cache",
            },
        });

        return {
            props: {
                breweryProp: data[0],
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
