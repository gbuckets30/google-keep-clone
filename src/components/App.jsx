import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [Notes, setNotes] = useState([]);

  function addNote(title, content) {
    setNotes((prev) => {
      const note = { title: title, content: content };
      return [...prev, note];
    });
  }

  function deleteNote(idx) { 
    const newNotes = Notes.filter((note, index) => index!==idx);
    setNotes([...newNotes]);
  }

  return (
    <div>
      <Header />

      <CreateNote addNote={addNote}/>

      {Notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
