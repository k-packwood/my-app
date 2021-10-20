import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput';
import BookmarkList from './BookmarkList';

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';

class App extends Component {
  state = {
    bookmarks: [
      { 
        name: "Google", 
        url: "https://www.google.com/",
      }, 
      { 
        name: "Facebook", 
        url: "https://en-gb.facebook.com/", 
      }, 
      { 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/", 
      },
      { 
        name: "GitHub", 
        url: "https://github.com/", 
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Card className="p-4 w-75 bg-light">
            <UserInput />
          </Card>
        </header>
        <main className="App-main pb-5">
          <h3>Your saved bookmarks</h3>
          <Stack gap={3} >
            <Row>
              <BookmarkList bookmarks={this.state.bookmarks} />
            </Row> 
          </Stack>
        </main>
      </div>
    );
  }
}

export default App;
