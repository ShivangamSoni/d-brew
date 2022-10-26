import { IBrewery } from "../../Site/Common/Types";

export interface IListingStateShape {
    breweries: IBrewery[];
    filter: {
        city: string;
        type: string;
        sort: string;
    };
}
