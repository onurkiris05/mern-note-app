import styles from "./SignUpModal.module.css";
import { useForm } from "react-hook-form";
import { SignUpBody } from "../../network/users_api";
import * as UsersApi from "../../network/users_api";
import FormModal from "../FormModal/FormModal";
import Button from "../Button/Button";
import TextInputField from "../Form/TextInputField";
import { useAuthStore } from "../../stores/authStore";

interface SignUpModalProps {
  onClose: () => void;
}

function SignUpModal({ onClose }: SignUpModalProps) {
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
      console.error(error);
      alert(error);
    }
  }

  return (
    <FormModal
      className={styles.modal}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      fields={[
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
