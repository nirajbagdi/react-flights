import { useState } from 'react';

import moment, { Moment } from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overide.scss';
import { FocusedInputShape, DayPickerRangeController } from 'react-dates';

import { useFlightsCtx } from 'context';

const DatePicker = () => {
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>('startDate');

    const flightsCtx = useFlightsCtx();

    const handleDatesChange = (args: { startDate: Moment | null; endDate: Moment | null }) => {
        flightsCtx.changeDepartureDate(args.startDate as Moment);
        flightsCtx.changeReturnDate(args.endDate as Moment);
    };

    return (
        <DayPickerRangeController
            startDate={flightsCtx.departureDate}
            endDate={flightsCtx.returnDate}
            onDatesChange={handleDatesChange}
            focusedInput={focusedInput}
            onFocusChange={setFocusedInput}
            initialVisibleMonth={() => moment().add(0, 'month')}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel={true}
        />
    );
};

export default DatePicker;
