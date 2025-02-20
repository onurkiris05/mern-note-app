import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { NoteModel } from "../../models/note";
import Note from "../Note/Note";
import * as NotesApi from "../../network/notes_api";
import NoteModal from "../NoteModal/NoteModal";

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

  const handleNoteSave = (note: NoteModel) => {
    setNotes([...notes, note]);
    toggleAddNoteModal();
  };

  const handleNoteDelete = (noteId: string) => {
    setNotes(notes.filter((note) => note._id !== noteId));
  };

  const handleNoteEdit = (note: NoteModel) => {
    setNotes(notes.map((n) => (n._id === note._id ? note : n)));
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
              <Note
                key={note._id}
                note={note}
                onDelete={handleNoteDelete}
                onEdit={handleNoteEdit}
              />
            ))}
          </div>
        </div>
        {isAddNoteModalActive && (
          <NoteModal onClose={toggleAddNoteModal} onNoteSave={handleNoteSave} />
        )}
      </div>
    </main>
  );
}

export default Main;
