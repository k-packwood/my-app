import React, { Component } from 'react';

// Bootstrap imports
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import FormGroup from 'react-bootstrap/FormGroup';

class UserInput extends Component {
    state = {
        bookmarkName : "",
        bookmarkUrl : ""
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Stack gap={3}>
                        <FormControl type="text" placeholder="Name"/>
                        <FormControl type="text" placeholder="URL"/>
                        <Button variant="primary" type="submit">Add bookmark</Button>
                    </Stack>  
                </FormGroup>     
            </Form>
        );
    }
}

export default UserInput;