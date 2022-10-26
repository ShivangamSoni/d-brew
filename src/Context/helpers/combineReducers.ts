const combineReducers = (reducers: any) => {
    return (state: any, action: any) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return {
                ...acc,
                [prop]: reducers[prop](acc[prop], action),
            };
        }, state);
    };
};

export default combineReducers;
