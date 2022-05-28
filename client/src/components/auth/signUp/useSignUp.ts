import { ChangeEvent, EventHandler, useCallback, useState } from "react";

export const useSignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  return {
    emailInputProps: {
      value: email,
      onChange: onEmailChange,
    },
    passwordInputProps: {
      value: password,
      onChange: onPasswordChange,
    },
  };
};