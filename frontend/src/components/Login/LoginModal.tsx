import { useForm } from "react-hook-form";
import { LoginBody } from "../../network/users_api";
import * as UsersApi from "../../network/users_api";
import styles from "./LoginModal.module.css";
import FormModal from "../FormModal/FormModal";
import TextInputField from "../Form/TextInputField";
import Button from "../Button/Button";
import { useAuthStore } from "../../stores/authStore";

interface LoginModalProps {
  onClose: () => void;
}

function LoginModal({ onClose }: LoginModalProps) {
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginBody>();

  async function onSubmit(input: LoginBody) {
    try {
      const userResponse = await UsersApi.login(input);
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
          <i className="bi bi-box-arrow-in-right"></i> Login
        </Button>
      }
    />
  );
}

export default LoginModal;
