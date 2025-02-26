import styles from "./SignUpModal.module.css";
import { useForm } from "react-hook-form";
import { SignUpBody } from "../../network/users_api";
import * as UsersApi from "../../network/users_api";
import FormModal from "../FormModal/FormModal";
import Button from "../Button/Button";
import TextInputField from "../Form/TextInputField";
import { useAuthStore } from "../../stores/authStore";
import { useState } from "react";
import { ConflictError } from "../../errors/http_errors";
import { Alert } from "react-bootstrap";

interface SignUpModalProps {
  onClose: () => void;
}

function SignUpModal({ onClose }: SignUpModalProps) {
  const [errorText, setErrorText] = useState<string | null>(null);
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpBody>();

  async function onSubmit(input: SignUpBody) {
    try {
      const userResponse = await UsersApi.signUp(input);
      setUser(userResponse);
    } catch (error) {
      if (error instanceof ConflictError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }

  return (
    <FormModal
      className={styles.modal}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      fields={[
        errorText && <Alert variant="danger">{errorText}</Alert>,
        <TextInputField
          name="username"
          label="Username"
          type="text"
          placeholder="Username"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.username}
        />,
        <TextInputField
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.email}
        />,
        <TextInputField
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.password}
        />,
      ]}
      submitButton={
        <Button className={styles.btn_submit} disabled={isSubmitting}>
          <i className="bi bi-pencil-square"></i> Sign Up
        </Button>
      }
    />
  );
}

export default SignUpModal;
