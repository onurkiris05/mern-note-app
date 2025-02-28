import { Spinner } from "react-bootstrap";
import Button from "../components/Button/Button";
import styles from "./NotesPage.module.css";
import { useEffect, useState } from "react";
import NoteModal from "../components/Note/NoteModal";
import { NoteModel } from "../models/note";
import * as NotesApi from "../network/notes_api";
import { useAuthStore } from "../stores/authStore";
import Note from "../components/Note/Note";

function NotesPage() {
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [isAddNoteModalActive, setIsAddNoteModalActive] = useState(false);
  const [notesLoading, setNotesLoading] = useState(true);
  const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);

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
    <div className={styles.body}>
      {user ? (
        <>
          <div className="container d-flex justify-content-center justify-content-sm-end">
            <Button className={` ${styles.btn_add_note}`} onClick={toggleAddNoteModal}>
              <i className="bi bi-plus-circle"></i> Add Note
            </Button>
          </div>
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
        <div className={styles.loginMessage}>
          <h4>Please Log In to View Notes</h4>
          <p>
            Want to test the app? Signup <strong>or</strong> Try demo account:{" "}
            <strong>Username:</strong> test {""}
            <strong>Password:</strong> 1234
          </p>
        </div>
      )}
    </div>
  );
}

export default NotesPage;
