import React, { Component } from 'react';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

class UserInput extends Component {
    state = {
        bookmarkName : "",
        bookmarkUrl : ""
    }

    render(){
        return(
            <Form>
                <Form.Group>
                    <Stack gap={3}>
                        <Form.Control type="text" placeholder="Name"/>
                        <Form.Control type="text" placeholder="URL"/>
                        <Button variant="primary" type="submit">Add bookmark</Button>
                    </Stack>  
                </Form.Group>     
            </Form>
        );
    }
}

export default UserInput;