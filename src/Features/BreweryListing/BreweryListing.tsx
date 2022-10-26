import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import { useCtxState } from "../../Context/Context";

import Modal from "../../Site/Common/components/Modal/Modal";
import { IBrewery } from "../../Site/Common/Types";
import BreweryCard from "../BreweryCard/BreweryCard";
import FilterBar from "./components/FilterBar/FilterBar";
import Pagination from "./components/Pagination/Pagination";
import { List, ListItem, Title, Wrapper, Info } from "./Styled.Components";

const BreweryListing: FC<{
    breweries: IBrewery[];
    pageNum: number;
    onNext: () => void;
    onPrev: () => void;
}> = ({ breweries, ...props }) => {
    const {
        query: { query },
    } = useRouter();

    const state = useCtxState();
    const { city, type } = state?.listing?.filter || {};

    const [active, setActive] = useState("");

    let filteredBreweries = [...breweries];

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

    return (
        <Wrapper>
            <Title>Breweries Matching: &apos;{query}&apos;</Title>
            <FilterBar />

            {filteredBreweries.length === 0 ? (
                <Info>
                    No Breweries Found!!{" "}
                    {(city !== "" || type !== "") &&
                        "Try adjusting the Filters or"}{" "}
                    Search for Something Else.
                </Info>
            ) : (
                <>
                    <List>
                        {filteredBreweries.map((brewery) => (
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
                    <Pagination {...props} />
                </>
            )}
        </Wrapper>
    );
};

export default BreweryListing;
