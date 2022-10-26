import { useEffect, useState } from "react";
import axios from "axios";

import type { IBrewery } from "../src/Site/Common/Types";
import { RANDOM_URL } from "../src/Site/Common/Constants";
import BreweryCard from "../src/Features/BreweryCard/BreweryCard";

export default function Random() {
    const [data, setData] = useState<IBrewery | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(RANDOM_URL, {
                    headers: {
                        "Cache-Control": "no-cache",
                    },
                });
                setData(data[0]);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return <>{!!data && <BreweryCard data={data} />}</>;
}
