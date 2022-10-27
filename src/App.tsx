import FlightField from 'components/FlightField';

const FLIGHT_FIELDS = [
    { id: 1, label: 'From', placeholder: '', defaultValue: 'Mumbai|BOM, Chhatrapati Shivaji Internatio...' },
    { id: 2, label: 'To', placeholder: '', defaultValue: 'Bengaluru|BLR, Bengaluru International Airpor...' },
    { id: 3, label: 'Departure', placeholder: '', defaultValue: "12 Oct'2022|Wednesday" },
    { id: 4, label: 'Traveller & Class', placeholder: '', defaultValue: '1 Adult|Economy' }
];

const App = () => {
    return (
        <div className="container">
            <div className="flight_fields">
                {FLIGHT_FIELDS.map(field => (
                    <FlightField
                        key={field.id}
                        label={field.label}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
