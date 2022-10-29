import { createContext, useContext, useState } from 'react';

import * as Model from 'models';
import { DUMMY_AIRPORTS } from 'data';
import { initialState } from './state';

type Props = { children: React.ReactNode };

const FlightsContext = createContext(initialState);
export const useFlightsCtx = () => useContext(FlightsContext);

export const FlightsProvider: React.FC<Props> = ({ children }) => {
    const [source, setSource] = useState<Model.Airport>(DUMMY_AIRPORTS[0]);
    const [destination, setDestination] = useState<Model.Airport>(DUMMY_AIRPORTS[2]);

    const changeAirportSource = (newSource: Model.Airport) => setSource(newSource);
    const changeAirportDestination = (newDestination: Model.Airport) => setDestination(newDestination);

    return (
        <FlightsContext.Provider
            value={{ source, destination, changeAirportSource, changeAirportDestination }}
        >
            {children}
        </FlightsContext.Provider>
    );
};
