import { useState } from "react";
import { NoteModel } from "../../models/note";
import formatDate from "../../utils/formatDate";
import styles from "./Note.module.css";
import * as NotesApi from "../../network/notes_api";
import NoteModal from "./NoteModal";
import Button from "../Button/Button";

interface NoteProps {
  note: NoteModel;
  onDelete: (noteId: string) => void;
  onEdit: (editNote: NoteModel) => void;
}

function Note({ note, onDelete, onEdit }: NoteProps) {
  const [isEditNoteModalActive, setIsEditNoteModalActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleOnDelete(noteId: string) {
    try {
      setIsSubmitting(true);
      await NotesApi.deleteNote(noteId);
      onDelete(noteId);
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleOnEdit(note: NoteModel) {
    onEdit(note);
    toggleEditNoteModal();
  }

  function getDate(): string {
    const date =
      note.updatedAt > note.createdAt
        ? `Updated: ${formatDate(note.updatedAt)}`
        : `Created: ${formatDate(note.createdAt)}`;
    return date;
  }

  const toggleEditNoteModal = () => {
    setIsEditNoteModalActive(!isEditNoteModalActive);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
      <div className={`${styles.body} m-2`}>
        <Button
          className={styles.btn_delete}
          onClick={(e) => {
            handleOnDelete(note._id);
            e.stopPropagation();
          }}
          disabled={isSubmitting}
        >
          <i className="bi bi-trash"></i>
        </Button>
        <Button
          className={styles.btn_edit}
          onClick={(e) => {
            toggleEditNoteModal();
            e.stopPropagation();
          }}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.text}>{note.text}</p>
        <div className={styles.date}>
          <p className="text-muted">{getDate()}</p>
        </div>
      </div>
      {isEditNoteModalActive && (
        <NoteModal
          onClose={toggleEditNoteModal}
          onNoteSave={handleOnEdit}
          isEditMode={true}
          initialNote={note}
        />
      )}
    </div>
  );
}

export default Note;
