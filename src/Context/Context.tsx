import type { FC, ReactNode } from "react";

import type { ContextState, ReducerShape } from "./Types";

import { createContext, useReducer, useEffect, useContext } from "react";

const StateContext = createContext<ContextState>({});

interface Props {
    children: ReactNode;
    reducer: ReducerShape;
}

const StateProvider: FC<Props> = ({ children, reducer }) => {
    const [state, dispatch] = useReducer(reducer, {});

    useEffect(() => dispatch({ type: "Initialize State" }), []);

    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;

export const useCtxState = () => useContext(StateContext).state;

export const useDispatch = () => useContext(StateContext).dispatch;
