import { useForm } from "react-hook-form";
import styles from "./NoteModal.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { NoteModel } from "../../models/note";
import { NoteInput } from "../../network/notes_api";
import * as NotesApi from "../../network/notes_api";
import Button from "../Button/Button";

interface NoteModalProps {
  onClose: () => void;
  onNoteSave: (note: NoteModel) => void;
  isEditMode?: boolean;
  initialNote?: NoteModel;
}

function NoteModal({ onClose, onNoteSave, initialNote, isEditMode = false }: NoteModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NoteInput>({
    defaultValues: isEditMode
      ? { title: initialNote?.title || "", text: initialNote?.text || "" }
      : { title: "", text: "" },
  });

  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: NoteModel;
      if (isEditMode && initialNote) {
        noteResponse = await NotesApi.updateNote(initialNote._id, input);
      } else {
        noteResponse = await NotesApi.createNote(input);
      }
      onNoteSave(noteResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.modal_container}>
        <Button className={styles.btn_close} onClick={onClose} icon="bi bi-x-circle" />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                isInvalid={!!errors.title}
                {...register("title", { required: "Required" })}
              />
              <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label>Text</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Text" {...register("text")} />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center">
            <Button
              className={styles.btn_submit}
              icon={isEditMode ? "bi bi-pencil-square" : "bi bi-plus-circle"}
              label={isEditMode ? "Edit Note" : "Add Note"}
              disabled={isSubmitting}
            />
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default NoteModal;
