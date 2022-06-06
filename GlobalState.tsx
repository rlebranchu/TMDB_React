import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { TMDBToken } from './src/types/interfaces';

const GlobalStateContext = createContext({
    state: {} as Partial<TMDBToken>,
    setState: {} as Dispatch<SetStateAction<Partial<TMDBToken>>>,
});

const GlobalStateProvider = (
    {children, value = {token: '', session_id: '', expires_at: new Date() } as TMDBToken} : {children: React.ReactNode; value?: Partial<TMDBToken>; }) => {
    
    const [state, setState] = useState(value);

    return (
      <GlobalStateContext.Provider value={{ state, setState }}>
        {children}
      </GlobalStateContext.Provider>
    );
};

const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateContext");
    }
    return context;
};

export { GlobalStateProvider, useGlobalState };