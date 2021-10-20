import './App.css';
import UserInput from './UserInput';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="p-4 w-75 bg-light">
          <UserInput />
        </Card>
      </header>
    </div>
  );
}

export default App;
