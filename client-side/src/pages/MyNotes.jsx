import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import speechRecognitionApi from "../api/speechtotext";
import axios from "../api/axios";

const MyNotes = () => {
    const navigate = useNavigate();


  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [update, setUpdate] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [ID, setID] = useState(null);
    const token = localStorage.getItem("token");
    


  //get all notes
  async function getNotes() {
    try {
      const notes = await axios.get("/api/note", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(notes.data.data);
    } catch (error) {
        if(error.response.data.name === "JsonWebTokenError") navigate("/login")
        
    }
  }
  useEffect(() => {
    getNotes();
  }, []);

  //create notes
  const saveNote = async () => {
    try {
      const response = await axios.post(
        "/api/note",
        {
          title,
          content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //update note
  const UpdateNote = async (e) => {
    try {
      const response = await axios.put(
        `/api/note/${ID}`,
        {
          title,
          content,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUpdate(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //getByID
  const getNote = async (id) => {
    try {
      const note = await axios.get("/api/note/" + id, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTitle(note.data.response.title);
      setContent(note.data.response.content);
      setID(note.data.response.id);
    } catch (error) {
      console.log(error);
    }
  };

  //delete note
  const DeleteNote = async (id) => {
    try {
      const response = await axios.delete(`/api/note/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
        console.log(response);
        getNotes()
    } catch (error) {
      console.log(error);
    }
  };
    
    const startSpeechToText = (e)=>{
        e.preventDefault()
        setIsRecording(true)
        let speech = new speechRecognitionApi({
            output:document.querySelector("#speechText")
        })
        let x = speech.init();
        console.log(speech)   
    }

    const stopSpeechToText = (e)=>{
        e.preventDefault()
        setIsRecording(false)
        let speech = new speechRecognitionApi({
            output:document.querySelector("#speechText")
        })
        let x = speech.stop();
        console.log(speech)
    }

  return (
    <>
      <nav
        className="uk-navbar-container uk-margin-left uk-margin-right uk-primary"
        data-uk-navbar
      >
        <div className="uk-navbar-center">
          <a className="uk-navbar-item uk-logo" href="#">
            MyNotes
          </a>
        </div>
      </nav>

      <div className="uk-section  uk-section-primary">
        <div className="uk-container">
          <h1>Create note</h1>
          <form onSubmit={!update ? saveNote : UpdateNote}>
            <div className="uk-margin">
            <input
                                
                className="uk-input"
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="uk-margin">
            <textarea
                id="speechText" 
                className="uk-textarea"
                rows="5"
                value={content}
                placeholder="Enter your note"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className="uk-center">
              <div className="uk-button-group">
                {!update ? (
                  <input
                    className="uk-button uk-button-default"
                    type="submit"
                    value="Save note"
                  />
                ) : (
                  <input
                    className="uk-button uk-button-default"
                    type="submit"
                    value="Update Note" 
                  />
                )}
                <button className="uk-button uk-button-default" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                {isRecording ? 'Stop Recording' : 'Start Recording'} 
                </button>
              
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="uk-section uk-section-muted">
        <div className="uk-container">
          <div
            className=" uk-grid uk-child-width-1-2@s uk-child-width-1-3@m"
            data-uk-grid="masonry: true"
          >
            {notes.map((data) => {
              return (
                <div key={data.id}>
                  <div className="uk-card uk-card-hover uk-card-default uk-card-body uk-margin">
                    <h3 className="uk-card-title uk-text-primary">
                      {data.title}
                    </h3>
                    <p>{data.content}</p>
                  <button
                      onClick={() => {
                        setUpdate(true);
                        getNote(data.id);
                      }}
                      className="uk-button  uk-button-primary uk-button-small "
                    >
                      <span uk-icon="icon: pencil"></span> Update note
                    </button>
                    <button
                      onClick={() => DeleteNote(data.id)}
                      className="uk-button uk-button-danger uk-button-small "
                    >
                      <span uk-icon="icon: pencil"></span> Delete note
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-xsmall uk-section-secondary">
        <div className="uk-container uk-primary uk-text-center">
          <span className="uk-text-muted">NoteMe by Group 4</span>
        </div>
      </div>
    </>
  );
};

export default MyNotes;
