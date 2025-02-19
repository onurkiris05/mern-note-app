import React, { useState } from "react";
import styles from "./AddNoteModal.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

interface AddNoteModalProps {
  onClose: () => void;
}

function AddNoteModal({ onClose }: AddNoteModalProps) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className={styles.body}>
      <div className={styles.form_container}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <button className={styles.btn_close} onClick={onClose}>
            <i className="bi bi-x-circle"></i>
          </button>
          <Row className="mb-3">
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" placeholder="Title" />
              <Form.Control.Feedback type="invalid">Please choose a title.</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control type="text" as="textarea" rows={6} placeholder="Text" />
            </Form.Group>
          </Row>
          <Row className="d-flex justify-content-center">
            <button className={styles.btn_add} type="submit">
              <i className="bi bi-plus-circle"></i> Add Note
            </button>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default AddNoteModal;
