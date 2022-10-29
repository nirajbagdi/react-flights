import { FlightFields } from 'components';
import { FlightsProvider } from 'context';

const App = () => {
    return (
        <FlightsProvider>
            <FlightFields />
        </FlightsProvider>
    );
};

export default App;
