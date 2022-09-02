import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Footer from "../components/Footer/Footer";
import UserNavbar from "../components/Navbar/UserNavbar";
import "../main/App2.css";
import Main from "../main/Main";
import Sidebar from "../main/Sidebar";
import axios from "../api/axios";

function Notepage() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //Create note
  async function onAddNote() {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    //a new array where we add in our new object,spread the existing note after the newly created note
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);

    try {
      const response = await axios.post("/api/note", {
        title: newNote.title,
        content: newNote.body,
      });
      // console.log("save")
    } catch (error) {
      console.log("error");
    }
  }
  //Delete note
  async function onDeleteNote(noteId) {
    setNotes(notes.filter(({ id }) => id !== noteId));

    try {
      const response = await axios.delete("/api/note/:id");
      
      
      console.log("deleted");
    } catch (error) {
      console.log("error");
    }
  }

  //edit note
  async function onUpdateNote(updatedNote) {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArr);
    try {
      const response = await axios.put("/api/note/:id", () => {
        console.log("updated");
      });
      console.log("updatede");
    } catch (error) {
      console.log("error");
    }
  }

  //this will  get the current stored id,find it in d array,and return the entire object
  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div>
      <div>
        <UserNavbar />
      </div>
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
      <Footer />
    </div>
  );
}

export default Notepage;
