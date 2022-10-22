

import { createContext, useContext, ReactNode, useMemo, useReducer } from "react";

interface Props {
    children: ReactNode | ReactNode[]
}
export interface StateValue {
    isPlaying: boolean
}

export interface StateModifier {
    onPlay:() => void
}

type State = StateModifier & StateValue

type Action = {
    type: "LOADING" | "LOADED"
}

const initialState: StateValue = { isPlaying: false};

const stateModifier: StateModifier = {
    onPlay: () => {}
}

const CanPlayMovieContext = createContext<State>({
    ...stateModifier,
    ...initialState
})


function loadedReducer(state: StateValue, action: Action) {
    console.log('loadedReducer => onPlay()')
    switch(action.type){
        case "LOADING": {
            return {
                ...state,
                isPlaying: false
            }
        }
        case "LOADED": {
            return {
                ...state,
                isPlaying: true
            }
        }
    }
}

export const CanPlayMovieProvider = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(loadedReducer, initialState)
    const onPlay = () => dispatch({type: "LOADED"})

    const value = useMemo(() => {
        return {
            ...state,
            onPlay
        }
    },[state])


    return (
        <CanPlayMovieContext.Provider value={value}>
            { children }
        </CanPlayMovieContext.Provider>
    )
}

export const useCanPlayMovie = () => {
    const context = useContext(CanPlayMovieContext);
    return context;
}






