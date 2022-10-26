import combineReducers from "./helpers/combineReducers";

import listingReducer from "./ListingState/reducer";

const reducer = combineReducers({ listing: listingReducer });

export default reducer;
