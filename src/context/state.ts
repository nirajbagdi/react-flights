import * as Models from 'models';

export type ContextState = {
    source: Models.Airport | null;
    destination: Models.Airport | null;
    changeAirportSource: (source: Models.Airport) => void;
    changeAirportDestination: (destination: Models.Airport) => void;
};

export const initialState: ContextState = {
    source: null,
    destination: null,
    changeAirportSource: source => {},
    changeAirportDestination: destination => {}
};
