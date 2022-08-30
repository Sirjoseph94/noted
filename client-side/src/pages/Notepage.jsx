import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "../main/App2.css";
import Main from "../main/Main";
import Sidebar from "../main/Sidebar";

function Notepage() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    //a new array where we add in our new object,spread the existing note after the newly created note
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  //this will  get the current stored id,find it in d array,and return the entire object
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div>
      <div className="app_note">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        {/* //we send the active note to the main   */}
        <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      </div>
    </div>
  );
}

export default Notepage;
