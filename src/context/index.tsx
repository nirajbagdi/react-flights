import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import * as Model from 'models';
import { initialState } from './state';

type Props = { children: React.ReactNode };

const URL =
    'https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json';

const FlightsContext = createContext(initialState);
export const useFlightsCtx = () => useContext(FlightsContext);

export const FlightsProvider: React.FC<Props> = ({ children }) => {
    const [airports, setAirports] = useState<Model.Airport[]>([]);
    const [source, setSource] = useState<Model.Airport | null>(null);
    const [destination, setDestination] = useState<Model.Airport | null>(null);

    useEffect(() => {
        (async function () {
            const response = await fetch(URL);
            const data = await response.json();

            const fetchedAirports: Model.AirportResponse[] = Object.values(data);

            const formattedAirports = fetchedAirports.map((airport, idx) => ({
                id: uuid(),
                name: airport.name,
                country: airport.country,
                city: airport.city,
                code: airport.code
            }));

            setAirports(formattedAirports);
        })();
    }, []);

    const changeAirportSource = (newSource: Model.Airport) => setSource(newSource);
    const changeAirportDestination = (newDestination: Model.Airport) => setDestination(newDestination);

    return (
        <FlightsContext.Provider
            value={{ airports, source, destination, changeAirportSource, changeAirportDestination }}
        >
            {children}
        </FlightsContext.Provider>
    );
};
