// Handles the JSX for an individual Bookmark

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Bookmark = (props) => {
    const deleteByIndex = () => props.removeBookmark(props.index);

    return (
        <div className="col-12 col-md-6">
            <Card className="m-2">
                <Card.Header>
                    <h5>{props.name}</h5></Card.Header>
                <Card.Body>
                    <p>{props.url}</p>
                    <Button 
                        type="button" 
                        variant="danger"
                        onClick={deleteByIndex}
                    >Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Bookmark;