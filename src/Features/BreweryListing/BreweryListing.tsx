import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import Modal from "../../Site/Common/components/Modal/Modal";
import { IBrewery } from "../../Site/Common/Types";
import BreweryCard from "../BreweryCard/BreweryCard";
import { List, ListItem, Title, Wrapper } from "./Styled.Components";

const BreweryListing: FC<{ breweries: IBrewery[] }> = ({ breweries }) => {
    const {
        query: { query },
    } = useRouter();
    const [active, setActive] = useState("");

    console.log(active);

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
        </Wrapper>
    );
};

export default BreweryListing;
