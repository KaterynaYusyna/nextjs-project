import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import GoogleSignIn from './google-sign-in-button';
import Logo from './logo';
import classes from './main-navigation.module.css';

import { useSession } from 'next-auth/react';

const MainNavigation = () => {
  const [isSignInButtonVisible, setIsSignInButtonVisible] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={() => setIsSignInButtonVisible(!isSignInButtonVisible)}
            >
              {session ? (
                <Image
                  className={classes.profileImage}
                  src={session.user.image}
                  alt="profile"
                  width={50}
                  height={50}
                />
              ) : (
                <Image
                  src="/images/profile1.svg"
                  alt="profile"
                  width={50}
                  height={50}
                />
              )}
            </button>
            {isSignInButtonVisible && <GoogleSignIn isSignedId={!!session} />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
