import type { FC } from "react";

import type { IBrewery } from "../../Site/Common/Types";
import { BsGlobe2 as SiteIcon } from "react-icons/bs";
import {
    Card,
    CardHead,
    CardBody,
    CardFoot,
    Title,
    Address,
    Type,
    SiteLink,
    Info,
    Label,
} from "./Styled.Components";

const BreweryCard: FC<{ data: IBrewery; full?: boolean }> = ({
    data,
    full = false,
}) => {
    const { name, street, city, state, country, brewery_type, website_url } =
        data;

    return (
        <Card>
            <CardHead>
                <Title>{name}</Title>
            </CardHead>

            {full && (
                <>
                    <CardBody>
                        <Info>
                            <Label>Address</Label>
                            <Address>
                                {street !== null && `${street}, `}
                                {city},
                                <br />
                                {state},
                                <br />
                                {country},
                            </Address>
                        </Info>

                        <Info>
                            <Label>Brewery Type</Label>
                            <Type>{brewery_type}</Type>
                        </Info>
                    </CardBody>

                    {website_url !== null && (
                        <CardFoot>
                            <SiteLink
                                href={website_url}
                                target="_blank"
                                title="Brewery Site"
                            >
                                <SiteIcon />
                            </SiteLink>
                        </CardFoot>
                    )}
                </>
            )}
        </Card>
    );
};

export default BreweryCard;
