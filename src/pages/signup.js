import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { FirebaseContext } from '../context/firebase';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstname, setFirstname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstname === '' || password === '' || emailAddress === '';

  const handleSignup = e => {
    e.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        result.user
          .updateProfile({
            displayName: firstname,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch(error => {
        setFirstname('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autocomplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
