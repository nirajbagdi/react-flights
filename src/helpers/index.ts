import * as Model from 'models';

export function findAirportMatches(wordToMatch: string, airportsList: Model.Airport[]) {
    if (!wordToMatch.trim().length) return [];

    return airportsList.filter(airport => {
        if (wordToMatch.search('[\\[\\]?*+|{}\\\\()@.\n\r]') !== -1) return null;

        const regex = new RegExp(wordToMatch, 'gi');
        return airport.city?.match(regex) || airport.name?.match(regex) || airport.code?.match(regex);
    });
}

export const truncuateText = (str: string, truncuateAt: number) => {
    return `${str.substring(0, truncuateAt)}${str.length > truncuateAt ? '...' : ''}`;
};
