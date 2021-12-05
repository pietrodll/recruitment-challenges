import { useState } from 'react';
import { LoginComponentProps } from '../../components/auth';

export const useLogin = (props: LoginComponentProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newUser, setNewUser] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangeNewUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newUser) {
      if (password === confirmPassword) {
        props.onSignup(email, password);
      } else {
        alert("The passwords don't match!");
      }
    } else {
      props.onLogin(email, password);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    newUser,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    handleChangeNewUser,
    handleSubmit,
  };
};
