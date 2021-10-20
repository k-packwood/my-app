// Handles the JSX for an individual Bookmark

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Bookmark = (props) => {
    return (
        <div className="col-12 col-md-6">
            <Card className="m-2">
                <Card.Header>
                    <h5>Hello</h5></Card.Header>
                <Card.Body>
                    <p>This is the URL</p>
                    <Button type="button" variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Bookmark;