import { createContext, useContext } from 'react';
import { initialState } from './state';

type Props = { children: React.ReactNode };

const FlightsContext = createContext(initialState);
export const useFlightsCtx = () => useContext(FlightsContext);

export const FlightsProvider: React.FC<Props> = ({ children }) => {
    const source = {
        id: 1,
        name: 'Bengaluru International Airport',
        country: 'India',
        city: 'Bengaluru',
        code: 'BEL'
    };

    const destination = {
        id: 2,
        name: 'Indira Gandhi International Air...',
        country: 'India',
        city: 'New Delhi',
        code: 'DEL'
    };

    return <FlightsContext.Provider value={{ source, destination }}>{children}</FlightsContext.Provider>;
};
