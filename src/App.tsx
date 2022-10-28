import { useState } from 'react';
import FlightField from 'components/FlightField';
import Backdrop from 'components/Backdrop';

type FlightFields = {
    id: number;
    label: string;
    placeholder: string;
    defaultValue: string;
    children: React.ReactNode;
};

const FLIGHT_FIELDS = [
    {
        id: 1,
        label: 'From',
        placeholder: '',
        defaultValue: 'Mumbai|BOM, Chhatrapati Shivaji Internatio...',
        children: <p>Source</p>
    },
    {
        id: 2,
        label: 'To',
        placeholder: '',
        defaultValue: 'Bengaluru|BLR, Bengaluru International Airpor...',
        children: <p>Destination</p>
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

const App = () => {
    const [flightFields, setFlightFields] = useState<FlightFields[]>(FLIGHT_FIELDS);
    const [currentFieldId, setCurrentFieldId] = useState<number | null>(null);
    const [isSearchingFlightSource, setIsSearchingFlightSource] = useState(false);
    const [isSearchingFlightDestination, setIsSearchingFlightDestination] = useState(false);
    const [isSearchingFlightDeparture, setIsSearchingFlightDeparture] = useState(false);
    const [isSearchingFlightTraveller, setIsSearchingFlightTraveller] = useState(false);

    const showBackdrop =
        isSearchingFlightSource ||
        isSearchingFlightDestination ||
        isSearchingFlightDeparture ||
        isSearchingFlightTraveller;

    const handleFlightFieldClick = (field: FlightFields) => {
        switch (field.id) {
            case 1:
                setCurrentFieldId(1);
                setIsSearchingFlightSource(true);
                setIsSearchingFlightDestination(false);
                setIsSearchingFlightDeparture(false);
                setIsSearchingFlightTraveller(false);
                break;

            case 2:
                setCurrentFieldId(2);
                setIsSearchingFlightSource(false);
                setIsSearchingFlightDestination(true);
                setIsSearchingFlightDeparture(false);
                setIsSearchingFlightTraveller(false);
                break;

            case 3:
                setCurrentFieldId(3);
                setIsSearchingFlightSource(false);
                setIsSearchingFlightDestination(false);
                setIsSearchingFlightDeparture(true);
                setIsSearchingFlightTraveller(false);
                break;

            case 4:
                setCurrentFieldId(4);
                setIsSearchingFlightSource(false);
                setIsSearchingFlightDestination(false);
                setIsSearchingFlightDeparture(false);
                setIsSearchingFlightTraveller(true);
                break;
        }
    };

    const handleBackdropClick = () => {
        setIsSearchingFlightSource(false);
        setIsSearchingFlightDestination(false);
        setIsSearchingFlightDeparture(false);
        setIsSearchingFlightTraveller(false);
    };

    return (
        <div className="container">
            <Backdrop show={showBackdrop} onClick={handleBackdropClick} />

            <div className="flight_fields">
                {flightFields.map(field => (
                    <FlightField
                        key={field.id}
                        label={field.label}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        onClick={handleFlightFieldClick.bind(null, field)}
                    >
                        <div className="flight_fields--children">
                            {showBackdrop && currentFieldId === field.id && field.children}
                        </div>
                    </FlightField>
                ))}
            </div>
        </div>
    );
};

export default App;
