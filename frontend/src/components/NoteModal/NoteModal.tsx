import { useForm } from "react-hook-form";
import styles from "./NoteModal.module.css";
import { NoteModel } from "../../models/note";
import { NoteInput } from "../../network/notes_api";
import * as NotesApi from "../../network/notes_api";
import Button from "../Button/Button";
import TextInputField from "../Form/TextInputField";
import Modal from "../Modal/Modal";

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
    <Modal
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      fields={[
        <TextInputField
          name="title"
          label="Title"
          type="text"
          placeholder="Title"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.title}
        />,
        <TextInputField
          name="text"
          label="Text"
          as="textarea"
          rows={6}
          placeholder="Text"
          register={register}
        />,
      ]}
      submitButton={
        <Button
          className={styles.btn_submit}
          icon={isEditMode ? "bi bi-pencil-square" : "bi bi-plus-circle"}
          label={isEditMode ? "Edit Note" : "Add Note"}
          disabled={isSubmitting}
        />
      }
    />
  );
}

export default NoteModal;
