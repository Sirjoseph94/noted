import "./App2.css";

const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
  handleTitle,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button className="button" onClick={onAddNote}>
          Add
        </button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, content, lastModified }, i) => (
          <div
            //i.e if note of the current id equal the current active note, return active(&&)
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            //to set the active note whenever this div is clicked
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>

              <button han className="button" onClick={(e) => onDeleteNote(id)}>
                Delete
              </button>
            </div>
            {/* if theres a body ,display the first 100 character */}
            <p>{content && content.substr(0, 100) + "..."}</p>
            <small className="note-meta">
              Last Modified{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
