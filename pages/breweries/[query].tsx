import { useEffect, useState } from "react";
import axios from "axios";

import type { IBrewery } from "../../src/Site/Common/Types";
import { useRouter } from "next/router";
import { getQueryURL } from "../../src/Site/Common/Constants";
import BreweryListing from "../../src/Features/BreweryListing/BreweryListing";

export default function Home() {
    const {
        query: { query },
    } = useRouter();

    const [pageNum, setPageNum] = useState(0);
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

    return <>{!!breweries && <BreweryListing breweries={breweries} />}</>;
}
