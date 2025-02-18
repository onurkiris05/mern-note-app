import { NoteModel } from "../../models/note";
import formatDate from "../../utils/formatDate";
import styles from "./Note.module.css";

interface NoteProps {
  note: NoteModel;
}

function Note({ note }: NoteProps) {
  function getDate(): string {
    const date =
      note.createdAt > note.updatedAt
        ? `Created: ${formatDate(note.createdAt)}`
        : `Updated: ${formatDate(note.updatedAt)}`;
    return date;
  }

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
      <div className={`${styles.body} m-2`}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.text}>{note.text}</p>
        <div className={styles.date}>
          <p className="text-muted">{getDate()}</p>
        </div>
      </div>
    </div>
  );
}

export default Note;
