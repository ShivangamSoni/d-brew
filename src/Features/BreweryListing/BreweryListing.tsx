import type { FC } from "react";
import { useState } from "react";
import { IBrewery } from "../../Site/Common/Types";
import BreweryCard from "../BreweryCard/BreweryCard";

const BreweryListing: FC<{ breweries: IBrewery[] }> = ({ breweries }) => {
    const [active, setActive] = useState("");

    return (
        <div>
            <h1>BreweryListing</h1>

            <ul>
                {breweries.map((brewery) => (
                    <li
                        key={brewery.id}
                        onMouseEnter={() => setActive(brewery.id)}
                        onMouseLeave={() => setActive("")}
                    >
                        <BreweryCard
                            data={brewery}
                            full={active === brewery.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BreweryListing;
