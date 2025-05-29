import { signIn, signOut } from 'next-auth/react';
import classes from './main-navigation.module.css';

export default function GoogleSignIn({ isSignedId }) {
  return !isSignedId ? (
    <button
      className={classes.google}
      onClick={() =>
        signIn('google', {
          callbackUrl: 'http://localhost:3000',
        })
      }
    >
      Signin with Google
    </button>
  ) : (
    <button className={classes.google} onClick={() => signOut()}>
      Logout
    </button>
  );
}
