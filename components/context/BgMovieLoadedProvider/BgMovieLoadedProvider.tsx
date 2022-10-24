import React, { createContext, useContext, useReducer, useMemo, Dispatch, SetStateAction, ReactNode } from 'react'

interface Props {
    children: ReactNode | ReactNode[]
}
type Action = {
    type: "LOADING" | "LOADED"
}

interface Load {
    load: boolean,
}
interface Loaded {
    onLoaded: () => void
}
export type State = Load & Loaded

const initialValue: State = { load: false, onLoaded: () => {} }
const BgMovieLoadedProviderContext = createContext<State>(initialValue);

const loadReducer = (state: Load, action: Action) => {
    switch(action.type){
        case "LOADING": {
            return {
                ...state,
                load: false
            }
        }
        case "LOADED": {
            return {
                ...state,
                load: true
            }
        }
    }
}

export const BgMovieLoadedProvider = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(loadReducer,initialValue)
    const onLoaded = () => dispatch({type: "LOADED"})
    const value:State = useMemo(() => {
        return {
            load: state.load,
            onLoaded: onLoaded
        }
    },[state.load])
    return (
        <BgMovieLoadedProviderContext.Provider value={value}>
            { children }
        </BgMovieLoadedProviderContext.Provider>
    )
}

export const useBgMovieLoaded = () => {
    const context = useContext(BgMovieLoadedProviderContext);
    return context;
}