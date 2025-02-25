import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { NoteModel } from "../../models/note";
import Note from "../Note/Note";
import * as NotesApi from "../../network/notes_api";
import NoteModal from "../NoteModal/NoteModal";
import Button from "../Button/Button";
import { Spinner } from "react-bootstrap";
import { useAuthStore } from "../../stores/authStore";

function Main() {
  const [notesLoading, setNotesLoading] = useState(true);
  const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [isAddNoteModalActive, setIsAddNoteModalActive] = useState(false);

  const user = useAuthStore((state) => state.user);

  const loadNotes = async () => {
    try {
      setNotesLoading(true);
      setShowNotesLoadingError(false);
      const notes = await NotesApi.fetchNotes();
      setNotes(notes);
    } catch (error) {
      console.error("Error loading notes: ", error);
      setShowNotesLoadingError(true);
    } finally {
      setNotesLoading(false);
    }
  };

  useEffect(() => {
    user ? loadNotes() : setNotes([]);
  }, [user]);

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

  const noteGrid =
    notes.length > 0 ? (
      notes.map((note) => (
        <Note key={note._id} note={note} onDelete={handleNoteDelete} onEdit={handleNoteEdit} />
      ))
    ) : (
      <p>No notes found</p>
    );

  return (
    <main>
      <div className={styles.body}>
        {user ? (
          <>
            <Button className={styles.btn_add_note} onClick={toggleAddNoteModal}>
              <i className="bi bi-plus-circle"></i> Add Note
            </Button>
            <div className="container d-flex flex-column align-items-center justify-content-center">
              {notesLoading && <Spinner animation="border" variant="primary" />}
              {showNotesLoadingError && <p>Unable to load notes!</p>}
              <div className={`row my-4 ${styles.note_grid_row}`}>
                {!notesLoading && !showNotesLoadingError && noteGrid}
              </div>
            </div>
            {isAddNoteModalActive && (
              <NoteModal onClose={toggleAddNoteModal} onNoteSave={handleNoteSave} />
            )}
          </>
        ) : (
          <h4>Please Log In to View Notes</h4>
        )}
      </div>
    </main>
  );
}

export default Main;
