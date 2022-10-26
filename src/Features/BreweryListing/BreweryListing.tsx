import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";

import Modal from "../../Site/Common/components/Modal/Modal";
import { IBrewery } from "../../Site/Common/Types";
import BreweryCard from "../BreweryCard/BreweryCard";
import Pagination from "./components/Pagination/Pagination";
import { List, ListItem, Title, Wrapper } from "./Styled.Components";

const BreweryListing: FC<{
    breweries: IBrewery[];
    pageNum: number;
    onNext: () => void;
    onPrev: () => void;
}> = ({ breweries, ...props }) => {
    const {
        query: { query },
    } = useRouter();
    const [active, setActive] = useState("");

    return (
        <Wrapper>
            <Title>Breweries Matching: &apos;{query}&apos;</Title>
            <List>
                {breweries.map((brewery) => (
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
        </Wrapper>
    );
};

export default BreweryListing;
