import './App.css';
import UserInput from './UserInput';
import Bookmark from './Bookmark';

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="p-4 w-75 bg-light">
          <UserInput />
        </Card>
      </header>
      <main className="App-main">
        <h3>Your saved bookmarks</h3>
        <Stack gap={3} >
          <Bookmark />
        </Stack>
      </main>
    </div>
  );
}

export default App;
