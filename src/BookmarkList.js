import Bookmark from "./Bookmark";

// Creates list of bookmarks
const BookmarkList = (props) => {
   
    // Creates a bookmark element for each
    // item in props.bookmarks
    return (
        <>
          {props.bookmarks.map(({ name, url }, index) => (
            <Bookmark 
                name={name}
                url={url}
                index={index}
                removeBookmark={props.removeBookmark}
            />
          ))}
        </>
    );
}

export default BookmarkList;