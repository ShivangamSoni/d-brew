import type { Dispatch, Reducer } from "react";

import type { IListingStateShape } from "./ListingState/Types";

type FullStoreShape = {
    listing: IListingStateShape;
};

export type StoreShape = Partial<FullStoreShape>;

export type Action = {
    type: string;
    payload?: any;
};

type FullContextState = {
    state: StoreShape;
    dispatch: Dispatch<Action>;
};

export type ContextState = Partial<FullContextState>;

export type ReducerShape = Reducer<StoreShape, Action>;
