import { createContext, useContext } from 'react';
import { initialState } from './state';

type Props = { children: React.ReactNode };

const FlightsContext = createContext(initialState);
export const useFlightsCtx = () => useContext(FlightsContext);

export const FlightsProvider: React.FC<Props> = ({ children }) => {
    return <FlightsContext.Provider value={{}}>{children}</FlightsContext.Provider>;
};
