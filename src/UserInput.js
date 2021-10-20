import React, { Component } from 'react';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

class UserInput extends Component {
    state = {
        name : "",
        url : ""
    }

    updateName = (event) => {
        this.setState({ name: event.target.value });
    }

    updateUrl = (event) => {
        this.setState({ url: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // Adds bookmark
        this.props.addBookmark(this.state.name, this.state.url);

        // Resets state
        this.setState({ name : "", url : ""})
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit}>
                <Stack gap={3}>
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={this.updateName}
                    />
                    <Form.Control 
                        type="text" 
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.updateUrl}
                    />
                    <Button variant="primary" type="submit">Add bookmark</Button>
                </Stack>     
            </Form>
        );
    }
}

export default UserInput;