import { ReactElement, ReactNode, useEffect } from "react";
import { Form, Row } from "react-bootstrap";
import Button from "../Button/Button";
import styles from "./FormModal.module.css";

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  className?: string;
  fields: ReactNode[];
  submitButton: ReactElement<typeof Button>;
}

function FormModal({ onClose, onSubmit, className, fields, submitButton }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={`${styles.modal_container} ${className}`}>
        <Button className={styles.btn_close} onClick={onClose}>
          <i className="bi bi-x-circle"></i>
        </Button>
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

export default FormModal;
