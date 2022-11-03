import { useState } from 'react';

import { Moment } from 'moment';

import { useFlightsCtx } from 'context';
import { FlightField, FlightSearch, Backdrop, DatePicker } from 'components';
import { extractDateInfo } from 'helpers';
import * as Models from 'models';

import styles from './FlightFields.module.scss';
import utilStyles from 'styles/utils.module.scss';

enum FieldIds {
    SOURCE = 1,
    DESTINATION = 2,
    DEPARTURE_DATE = 3,
    RETURN_DATE = 4,
    TRAVELLER_CLASS = 5
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

    const getFlightDateValue = (momentDate: Moment | null) => {
        if (!momentDate) return;
        const { date, day, month, year } = extractDateInfo(momentDate);
        return `${date} ${month}'${year}|${day}`;
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
                            onOptionSelect={() => setFieldId(null)}
                        />
                    }
                    field={{
                        label: 'From',
                        placeholder: 'Enter city or airport',
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
                            onOptionSelect={() => setFieldId(null)}
                        />
                    }
                    field={{
                        label: 'To',
                        placeholder: 'Enter city or airport',
                        value: getFlightDetails(flightsCtx.destination)
                    }}
                />

                <FlightField
                    expand={fieldId === FieldIds.DEPARTURE_DATE}
                    onExpand={() => setFieldId(FieldIds.DEPARTURE_DATE)}
                    isChildCompLarge
                    childComp={<DatePicker />}
                    field={{
                        label: 'Departure',
                        value: getFlightDateValue(flightsCtx.departureDate)
                    }}
                />

                <FlightField
                    expand={fieldId === FieldIds.RETURN_DATE}
                    onExpand={() => setFieldId(FieldIds.RETURN_DATE)}
                    isChildCompLarge
                    childComp={<DatePicker />}
                    field={{
                        label: 'Return',
                        placeholder: 'Click to add a return flight',
                        value: getFlightDateValue(flightsCtx.returnDate)
                    }}
                />

                {/* <FlightField
                    expand={fieldId === FieldIds.TRAVELLER_CLASS}
                    onExpand={() => setFieldId(FieldIds.TRAVELLER_CLASS)}
                    childComp={<p>Traveller & Class</p>}
                    field={{
                        label: 'Traveller & Class',
                        value: '1 Adult|Economy'
                    }}
                /> */}
            </div>
        </div>
    );
};

export default FlightFields;
