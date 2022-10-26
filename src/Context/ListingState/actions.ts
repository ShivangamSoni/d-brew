import { IBrewery } from "../../Site/Common/Types";

const ACTION_TYPES = {
    SET_BREWERIES: "SET_BREWERIES",
    SET_CITY: "SET_CITY",
    SET_TYPE: "SET_TYPE",
};

export default ACTION_TYPES;

export const setBreweries = (breweries: IBrewery[]) => {
    return { type: ACTION_TYPES.SET_BREWERIES, payload: breweries };
};

export const setCity = (city: string) => {
    return { type: ACTION_TYPES.SET_CITY, payload: city };
};

export const setType = (type: string) => {
    return { type: ACTION_TYPES.SET_TYPE, payload: type };
};
