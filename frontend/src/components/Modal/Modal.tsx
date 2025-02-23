import { ReactElement, ReactNode } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  fields: ReactNode[];
  submitButton: ReactElement<typeof Button>;
}

function Modal({ onClose, onSubmit, fields, submitButton }: ModalProps) {
  return (
    <div className={styles.body}>
      <div className={styles.modal_container}>
        <Button className={styles.btn_close} onClick={onClose} icon="bi bi-x-circle" />
        <Form onSubmit={onSubmit}>
          {fields.map((field, index) => (
            <Row key={index} className="mb-3">
              {field}
            </Row>
          ))}
          <Row className="d-flex justify-content-center">{submitButton}</Row>
        </Form>
      </div>
    </div>
  );
}

export default Modal;
