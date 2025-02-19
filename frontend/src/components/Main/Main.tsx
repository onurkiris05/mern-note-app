import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { NoteModel } from "../../models/note";
import Note from "../Note/Note";
import * as NotesApi from "../../network/notes_api";
import AddNoteModal from "../AddNoteModal/AddNoteModal";

function Main() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [isAddNoteModalActive, setIsAddNoteModalActive] = useState(false);

  const loadNotes = async () => {
    try {
      const notes = await NotesApi.fetchNotes();
      setNotes(notes);
    } catch (error) {
      console.error("Error loading notes: ", error);
      alert("Error loading notes: " + error);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const toggleAddNoteModal = () => {
    setIsAddNoteModalActive(!isAddNoteModalActive);
  };

  return (
    <main>
      <div className={styles.body}>
        <button className={styles.btn_add_note} onClick={toggleAddNoteModal}>
          <i className="bi bi-plus-circle"></i> Add Note
        </button>
        <div className="container">
          <div className="row my-5">
            {notes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
        {isAddNoteModalActive && <AddNoteModal onClose={toggleAddNoteModal} />}
      </div>
    </main>
  );
}

export default Main;
