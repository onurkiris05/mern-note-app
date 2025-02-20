import { useState } from "react";
import { NoteModel } from "../../models/note";
import formatDate from "../../utils/formatDate";
import styles from "./Note.module.css";
import * as NotesApi from "../../network/notes_api";
import NoteModal from "../NoteModal/NoteModal";

interface NoteProps {
  note: NoteModel;
  onDelete: (noteId: string) => void;
  onEdit: (editNote: NoteModel) => void;
}

function Note({ note, onDelete, onEdit }: NoteProps) {
  const [isEditNoteModalActive, setIsEditNoteModalActive] = useState(false);

  async function handleOnDelete(noteId: string) {
    try {
      await NotesApi.deleteNote(noteId);
      onDelete(noteId);
    } catch (error) {
      console.error(error);
      alert(error);
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
        <button
          className={styles.btn_delete}
          onClick={(e) => {
            handleOnDelete(note._id);
            e.stopPropagation();
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
        <button
          className={styles.btn_edit}
          onClick={(e) => {
            toggleEditNoteModal();
            e.stopPropagation();
          }}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
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
