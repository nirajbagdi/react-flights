import { Moment } from 'moment';
import * as Models from 'models';

export type ContextState = {
    airports: Models.Airport[];
    source: Models.Airport | null;
    destination: Models.Airport | null;
    departureDate: Moment | null;
    returnDate: Moment | null;
    changeAirportSource: (source: Models.Airport) => void;
    changeAirportDestination: (destination: Models.Airport) => void;
    changeDepartureDate: (date: Moment) => void;
    changeReturnDate: (date: Moment) => void;
};

export const initialState: ContextState = {
    airports: [],
    source: null,
    destination: null,
    departureDate: null,
    returnDate: null,
    changeAirportSource: source => {},
    changeAirportDestination: destination => {},
    changeDepartureDate: date => {},
    changeReturnDate: date => {}
};
