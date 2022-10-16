
import React, { FC, ReactNode, createContext, useContext, useReducer, useMemo  } from 'react'


interface Props {
    children: ReactNode | ReactNode[]
}

export interface StateValues { 
    isDrawerOpen: boolean
}

export interface StateModifiers {
    openDrawer: () => void,
    closeDrawer: () => void
}

type Action = {
    type: "OPEN" | "CLOSE"
}

type State = StateModifiers & StateValues;

const initialState: StateValues = { isDrawerOpen: false};
const stateModifiers: StateModifiers = {
    openDrawer: () => {},
    closeDrawer: () => {}
}


const UIContext = createContext<State>({
    ...stateModifiers,
    ...initialState
})

function uiReducer(state: StateValues, action: Action) {
    switch(action.type){
        case "OPEN": {
            return {
                ...state,
                isDrawerOpen: true
            }
        }
        case "CLOSE": {
            return {
                ...state,
                isDrawerOpen: false
            }
        }
    }
}

export const UIProvider: FC<Props> = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(uiReducer, initialState);

    const openDrawer = () => dispatch({type: "OPEN"});
    const closeDrawer = () => dispatch({type: "CLOSE"});

    const value = useMemo(() => {
        return {
            ...state,
            openDrawer,
            closeDrawer
        }
    }, [state])

    return (
        <UIContext.Provider value={value}>
            { children }
        </UIContext.Provider>
    )
}


export const useUI = () => {
    const context = useContext(UIContext);
    return context;
}