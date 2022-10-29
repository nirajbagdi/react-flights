import { useState, useEffect } from 'react';
import { useFlightsCtx } from 'context';
import Backdrop from 'components/Layout/Backdrop';
import FlightField from './FlightField/FlightField';
import FlightSearch from 'components/FlightSearch/FlightSearch';
import styles from './FlightFields.module.scss';
import * as MODEL from 'models';

const FLIGHT_FIELDS = [
    {
        id: 1,
        label: 'From',
        placeholder: '',
        defaultValue: 'Mumbai|BOM, Chhatrapati Shivaji Internatio...',
        children: <FlightSearch id="source" label="From" />
    },
    {
        id: 2,
        label: 'To',
        placeholder: '',
        defaultValue: 'Bengaluru|BLR, Bengaluru International Airpor...',
        children: <FlightSearch id="destination" label="To" />
    },
    {
        id: 3,
        label: 'Departure',
        placeholder: '',
        defaultValue: "12 Oct'2022|Wednesday",
        children: <p>Departure Date</p>
    },
    {
        id: 4,
        label: 'Traveller & Class',
        placeholder: '',
        defaultValue: '1 Adult|Economy',
        children: <p>Traveller</p>
    }
];

const FlightFields = () => {
    const [flightFields, setFlightFields] = useState<MODEL.FlightFields[]>(FLIGHT_FIELDS);
    const [currentFieldId, setCurrentFieldId] = useState<number | null>(null);

    const flightsCtx = useFlightsCtx();

    useEffect(() => {
        setFlightFields(prevFlightFields => {
            return prevFlightFields.map(flightField => {
                if (flightField.id === 1) {
                    const { name, city, code } = flightsCtx.currentSource ?? {};
                    const defaultSource = `${city}|${code}, ${name}`;

                    return { ...flightField, defaultValue: defaultSource };
                } else if (flightField.id === 2) {
                    const { name, city, code } = flightsCtx.currentDestination ?? {};
                    const defaultDestination = `${city}|${code}, ${name}`;

                    return { ...flightField, defaultValue: defaultDestination };
                } else {
                    return flightField;
                }
            });
        });
    }, [flightsCtx.currentSource, flightsCtx.currentDestination]);

    const handleFlightFieldClick = (field: MODEL.FlightFields) => {
        setCurrentFieldId(field.id);
    };

    const handleBackdropClick = () => {
        setCurrentFieldId(null);
    };

    return (
        <>
            <Backdrop show={currentFieldId !== null} onClick={handleBackdropClick} />

            <div className={styles.fields}>
                {flightFields.map(field => (
                    <FlightField
                        key={field.id}
                        label={field.label}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        onClick={handleFlightFieldClick.bind(null, field)}
                    >
                        <div className={styles.children}>{currentFieldId === field.id && field.children}</div>
                    </FlightField>
                ))}
            </div>
        </>
    );
};

export default FlightFields;
