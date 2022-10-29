import { useRef, useEffect } from 'react';

import styles from './FlightSearch.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    id: string;
    label: string;
    defaultValue?: string;
};

// prettier-ignore
const DUMMY_AIRPORTS = [
    { id: 1, name: 'Chhatrapati Shivaji International Airport', country: 'India', city: 'Mumbai', code: 'BOM' },
    { id: 2, name: 'Bengaluru International Airport', country: 'India', city: 'Bengaluru', code: 'BEL' },
    { id: 3, name: 'John F. Kennedy Intl Airport', country: 'USA', city: 'New York', code: 'JFK' },
    { id: 3, name: 'Indira Gandhi International Airport', country: 'India', city: 'New Delhi', code: 'DEL' }
];

const FlightSearch: React.FC<Props> = props => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
    }, [searchInputRef]);

    return (
        <>
            <div className={styles.search}>
                <div className={`${utilStyles.flightField} ${styles.field}`}>
                    <label htmlFor={props.id} className={`${utilStyles.label} ${styles.label}`}>
                        {props.label}
                    </label>

                    <input type="text" id={props.id} ref={searchInputRef} defaultValue={props.defaultValue} />
                </div>
            </div>

            <div className={styles.options}>
                <ul className={styles.list}>
                    {DUMMY_AIRPORTS.map(airport =>
                        // prettier-ignore
                        <li className={styles.airport} key={airport.id}>
                            <p>{airport.city}, {airport.country} <span>({airport.code})</span></p>
                            <p>{airport.name}</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default FlightSearch;
