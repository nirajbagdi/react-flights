import { FlightsProvider } from 'context';
import { FlightFields } from 'components';

const App = () => (
    <FlightsProvider>
        <div className="container">
            <FlightFields />
        </div>
    </FlightsProvider>
);

export default App;
