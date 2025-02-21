import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { NoteModel } from "../../models/note";
import Note from "../Note/Note";
import * as NotesApi from "../../network/notes_api";
import NoteModal from "../NoteModal/NoteModal";
import Button from "../Button/Button";
import { Spinner } from "react-bootstrap";

function Main() {
  const [notesLoading, setNotesLoading] = useState(true);
  const [showNotesLoadingError, setShowNotesLoadingError] = useState(false);
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [isAddNoteModalActive, setIsAddNoteModalActive] = useState(false);

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
        <Button
          className={styles.btn_add_note}
          icon="bi bi-plus-circle"
          label="Add Note"
          onClick={toggleAddNoteModal}
        />
        <div className="container d-flex flex-column align-items-center justify-content-center">
          {notesLoading && <Spinner animation="border" variant="primary" />}
          {showNotesLoadingError && <p>Unable to load notes!</p>}
          <div className="row my-5">{!notesLoading && !showNotesLoadingError && noteGrid}</div>
        </div>
        {isAddNoteModalActive && (
          <NoteModal onClose={toggleAddNoteModal} onNoteSave={handleNoteSave} />
        )}
      </div>
    </main>
  );
}

export default Main;
