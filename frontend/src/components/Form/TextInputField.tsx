import { Form } from "react-bootstrap";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [key: string]: any;
}

function TextInputField({
  label,
  name,
  register,
  registerOptions,
  error,
  ...inputProps
}: TextInputFieldProps) {
  return (
    <Form.Group controlId={name + "-input"}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...inputProps} {...register(name, registerOptions)} isInvalid={!!error} />
      <Form.Control.Feedback type="invalid">{error?.message}</Form.Control.Feedback>
    </Form.Group>
  );
}

export default TextInputField;
