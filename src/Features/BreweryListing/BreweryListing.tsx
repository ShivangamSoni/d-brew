import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import { useCtxState } from "../../Context/Context";

import Modal from "../../Site/Common/components/Modal/Modal";
import { PER_PAGE } from "../../Site/Common/Constants";
import BreweryCard from "../BreweryCard/BreweryCard";
import FilterBar from "./components/FilterBar/FilterBar";
import Pagination from "./components/Pagination/Pagination";
import { List, ListItem, Title, Wrapper, Info } from "./Styled.Components";

const BreweryListing: FC = () => {
    const {
        query: { query },
    } = useRouter();

    const [pageNum, setPageNum] = useState(1);

    const state = useCtxState();
    const { city, type, sort } = state?.listing?.filter || {};
    const breweries = state?.listing?.breweries || [];

    const [active, setActive] = useState("");

    let filteredBreweries = breweries.filter((a) =>
        a.name.toLowerCase().includes((query as string)?.toLowerCase()),
    );

    if (city !== "") {
        filteredBreweries = filteredBreweries.filter(
            (a) => a.city.toLowerCase().replaceAll(" ", "_") === city,
        );
    }

    if (type !== "") {
        filteredBreweries = filteredBreweries.filter(
            (a) => a.brewery_type === type,
        );
    }

    if (sort !== "") {
        filteredBreweries.sort(
            (a, b) => a.name.localeCompare(b.name) * (sort === "desc" ? -1 : 1),
        );
    }

    const handleNext = () => {
        setPageNum((prev) => {
            const newPage = prev + 1;
            // return newPage;
            return newPage * PER_PAGE > filteredBreweries.length + PER_PAGE
                ? prev
                : newPage;
        });
    };

    const handlePrev = () => {
        setPageNum((prev) => {
            const newPage = prev - 1;
            return newPage < 1 ? 1 : newPage;
        });
    };

    const paginatedBreweries = filteredBreweries.slice(
        (pageNum - 1) * PER_PAGE,
        pageNum * PER_PAGE,
    );

    return (
        <Wrapper>
            <Title>Breweries Matching: &apos;{query}&apos;</Title>
            <FilterBar />

            {paginatedBreweries.length === 0 ? (
                <Info>
                    No Breweries Found!!{" "}
                    {(city !== "" || type !== "") &&
                        "Try adjusting the Filters or"}{" "}
                    Search for Something Else.
                </Info>
            ) : (
                <>
                    <List>
                        {paginatedBreweries.map((brewery) => (
                            <ListItem
                                key={brewery.id}
                                onClick={() => setActive(brewery.id)}
                            >
                                <BreweryCard data={brewery} />

                                {active === brewery.id && (
                                    <Modal
                                        onClose={() => {
                                            console.log("Click");
                                            setActive("");
                                        }}
                                    >
                                        <BreweryCard data={brewery} full />
                                    </Modal>
                                )}
                            </ListItem>
                        ))}
                    </List>
                    <Pagination
                        pageNum={pageNum}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                </>
            )}
        </Wrapper>
    );
};

export default BreweryListing;
