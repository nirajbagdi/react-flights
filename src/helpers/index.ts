import * as Model from 'models';

export function findAirportMatches(wordToMatch: string, airportsList: Model.Airport[]) {
    if (!wordToMatch.trim().length) return [];

    return airportsList.filter(airport => {
        if (wordToMatch.search('[\\[\\]?*+|{}\\\\()@.\n\r]') !== -1) return null;

        const regex = new RegExp(wordToMatch, 'gi');
        return airport.city?.match(regex) || airport.name?.match(regex) || airport.code?.match(regex);
    });
}
