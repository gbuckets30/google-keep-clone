import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateNote(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  function handleTitleChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function handleContentChange(event) {
    const content = event.target.value;
    setContent(content);
  }

  function handleButtonClick(event) {
    event.preventDefault();
    console.log(`Title: ${Title} Content: ${Content}`);
    props.addNote(Title, Content);
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={Title}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={Content}
        />
        <Fab onClick={handleButtonClick}><AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateNote;
