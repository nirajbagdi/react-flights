import { useRef, useEffect } from 'react';
import styles from './FlightSearch.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    id: string;
    label: string;
};

const FlightSearch: React.FC<Props> = props => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchInputRef.current?.focus();
    }, [searchInputRef]);

    return (
        <div className={styles.search}>
            <div className={`${utilStyles.flightField} ${styles.field}`}>
                <label htmlFor={props.id} className={`${utilStyles.label} ${styles.label}`}>
                    {props.label}
                </label>

                <input type="text" id={props.id} ref={searchInputRef} />
            </div>
        </div>
    );
};

export default FlightSearch;
