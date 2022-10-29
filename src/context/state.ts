import * as Models from 'models';

export type ContextState = {
    source: Models.Airport | null;
    destination: Models.Airport | null;
};

export const initialState: ContextState = {
    source: null,
    destination: null
};
