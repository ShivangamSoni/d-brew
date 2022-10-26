import type { FC } from "react";
import type { IBrewery } from "../../Site/Common/Types";

const BreweryCard: FC<{ data: IBrewery; full?: boolean }> = ({
    data,
    full = false,
}) => {
    const { name, street, city, state, country, brewery_type, website_url } =
        data;

    const address = `${
        street !== null ? `${street}, ` : ""
    }${city}, ${state}, ${country}`;

    return (
        <div>
            <h1>{name}</h1>
            {full && (
                <>
                    <p>{address}</p>
                    <p>{brewery_type}</p>
                    <p>{website_url}</p>
                </>
            )}
        </div>
    );
};

export default BreweryCard;
