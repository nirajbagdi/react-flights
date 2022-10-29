import { useRef, useEffect, useState } from 'react';

import * as Model from 'models';
import { DUMMY_AIRPORTS } from 'data';
import { useFlightsCtx } from 'context';
import { findAirportMatches } from 'helpers';

import styles from './FlightSearch.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    id: string;
    label: string;
    defaultValue?: string;
    onOptionSelect: () => void;
};

const FlightSearch: React.FC<Props> = props => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchValue, setSearchValue] = useState('');
    const [filteredMatches, setFilteredMatches] = useState(DUMMY_AIRPORTS);

    const flightsCtx = useFlightsCtx();

    useEffect(() => {
        searchInputRef.current?.focus();
    }, [searchInputRef]);

    useEffect(() => {
        setSearchValue(props.defaultValue ?? '');
    }, [props.defaultValue]);

    useEffect(() => {
        const matches = findAirportMatches(searchValue, DUMMY_AIRPORTS);
        setFilteredMatches(matches);
    }, [searchValue]);

    const handleOptionClick = (airport: Model.Airport) => {
        if (props.label.toLowerCase() === 'from') {
            flightsCtx.changeAirportSource(airport);
        } else if (props.label.toLowerCase() === 'to') {
            flightsCtx.changeAirportDestination(airport);
        }

        props.onOptionSelect();
    };

    const getOptionSelectedClass = (airport: Model.Airport) => {
        if (props.label.toLowerCase() === 'from') {
            return flightsCtx.source?.city === airport.city ? styles.selected : '';
        } else if (props.label.toLowerCase() === 'to') {
            return flightsCtx.destination?.city === airport.city ? styles.selected : '';
        }
    };

    const handleSearchInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
    };

    return (
        <>
            <div className={styles.search}>
                <div className={`${utilStyles.flightField} ${styles.field}`}>
                    <label htmlFor={props.id} className={`${utilStyles.label} ${styles.label}`}>
                        {props.label}
                    </label>

                    <input
                        type="text"
                        id={props.id}
                        ref={searchInputRef}
                        value={searchValue}
                        onInput={handleSearchInputChange}
                    />
                </div>
            </div>

            <div className={styles.options}>
                <ul className={styles.list}>
                    {filteredMatches.map(airport => (
                        <li
                            key={airport.id}
                            className={`${styles.airport} ${getOptionSelectedClass(airport)}`}
                            onClick={handleOptionClick.bind(null, airport)}
                        >
                            <p>
                                {airport.city}, {airport.country} <span>({airport.code})</span>
                            </p>
                            <p>{airport.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FlightSearch;
