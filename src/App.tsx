import FlightField from 'components/FlightField';

const App = () => {
    return (
        <div className="container">
            <div className="flight_fields">
                <FlightField label="From" defaultValue="Mumbai|BOM, Chhatrapati Shivaji Internatio..." />
                <FlightField label="To" defaultValue="Bengaluru|BLR, Bengaluru International Airpor..." />
                <FlightField label="Departure" defaultValue="12 Oct'2022|Wednesday" />
                <FlightField label="Traveller & Class" defaultValue="1 Adult|Economy" />
            </div>
        </div>
    );
};

export default App;
