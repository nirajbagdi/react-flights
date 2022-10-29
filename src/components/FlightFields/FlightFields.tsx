import { useState } from 'react';

import { useFlightsCtx } from 'context';
import { FlightField, FlightSearch, Backdrop } from 'components';
import * as Models from 'models';

import styles from './FlightFields.module.scss';
import utilStyles from 'styles/utils.module.scss';

enum FieldIds {
    SOURCE = 1,
    DESTINATION = 2,
    DEPARTURE_DATE = 3,
    TRAVELLER_CLASS = 4
}

const FlightFields = () => {
    const [fieldId, setFieldId] = useState<number | null>(null);

    const flightsCtx = useFlightsCtx();

    const getFlightDetails = (flightObj: Models.Airport | null) => {
        if (!flightObj) return;
        const { name, city, code } = flightObj;
        return `${city}|${code}, ${name}`;
    };

    const getFlightCityAndCode = (flightObj: Models.Airport | null) => {
        if (!flightObj) return;
        const { city, code } = flightObj;
        return `${city} (${code})`;
    };

    return (
        <div className={utilStyles.container}>
            <Backdrop show={fieldId !== null} onClose={() => setFieldId(null)} />

            <div className={styles.fields}>
                <FlightField
                    expand={fieldId === FieldIds.SOURCE}
                    onExpand={() => setFieldId(FieldIds.SOURCE)}
                    childComp={
                        <FlightSearch
                            id="source"
                            label="From"
                            defaultValue={getFlightCityAndCode(flightsCtx.source)}
                        />
                    }
                    field={{
                        label: 'From',
                        value: getFlightDetails(flightsCtx.source)
                    }}
                />

                <FlightField
                    expand={fieldId === FieldIds.DESTINATION}
                    onExpand={() => setFieldId(FieldIds.DESTINATION)}
                    childComp={
                        <FlightSearch
                            id="destination"
                            label="To"
                            defaultValue={getFlightCityAndCode(flightsCtx.destination)}
                        />
                    }
                    field={{
                        label: 'To',
                        value: getFlightDetails(flightsCtx.destination)
                    }}
                />

                <FlightField
                    expand={fieldId === FieldIds.DEPARTURE_DATE}
                    onExpand={() => setFieldId(FieldIds.DEPARTURE_DATE)}
                    childComp={<p>Departure Date</p>}
                    field={{
                        label: 'Departure',
                        value: "12 Oct'2022|Wednesday"
                    }}
                />

                <FlightField
                    expand={fieldId === FieldIds.TRAVELLER_CLASS}
                    onExpand={() => setFieldId(FieldIds.TRAVELLER_CLASS)}
                    childComp={<p>Traveller & Class</p>}
                    field={{
                        label: 'Traveller & Class',
                        value: '1 Adult|Economy'
                    }}
                />
            </div>
        </div>
    );
};

export default FlightFields;
