import { createContext, useContext } from 'react';
import { initialState } from './state';

type Props = { children: React.ReactNode };

const FlightsContext = createContext(initialState);
export const useFlightsCtx = () => useContext(FlightsContext);

export const FlightsProvider: React.FC<Props> = ({ children }) => {
    const currentSource = {
        id: 1,
        name: 'Bengaluru International Airport',
        country: 'India',
        city: 'Bengaluru',
        code: 'BEL'
    };

    const currentDestination = {
        id: 2,
        name: 'Indira Gandhi International Air...',
        country: 'India',
        city: 'New Delhi',
        code: 'DEL'
    };

    return (
        <FlightsContext.Provider value={{ currentSource, currentDestination }}>
            {children}
        </FlightsContext.Provider>
    );
};
