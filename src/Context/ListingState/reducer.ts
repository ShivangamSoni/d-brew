import { Action } from "../Types";
import ACTION_TYPES from "./actions";
import type { IListingStateShape } from "./Types";

const initialState: IListingStateShape = {
    breweries: [],
    pageNum: 1,
    filter: { city: "", type: "" },
};

const listingReducer = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case ACTION_TYPES.SET_BREWERIES: {
            return { ...state, breweries: payload };
        }
        case ACTION_TYPES.SET_CITY: {
            return { ...state, filter: { ...state.filter, city: payload } };
        }
        case ACTION_TYPES.SET_TYPE: {
            return { ...state, filter: { ...state.filter, type: payload } };
        }
        default:
            return state;
    }
};

export default listingReducer;
