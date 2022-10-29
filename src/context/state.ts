import * as MODEL from 'models';

export type ContextState = {
    currentSource: MODEL.Airport | null;
    currentDestination: MODEL.Airport | null;
};

export const initialState: ContextState = {
    currentSource: null,
    currentDestination: null
};
