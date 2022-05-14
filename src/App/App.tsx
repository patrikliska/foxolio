import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { auth, provider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';

import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import Screw from '../components/Screw';

const App = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem('isAuth') ?? 'false')
  );
  const [avatar, setAvatar] = useState(
    localStorage.getItem('userAvatar') ?? ''
  );

  const googleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem(
        'userAvatar',
        result.user.providerData[0].photoURL ?? ''
      );
      setAvatar(result.user.providerData[0].photoURL ?? '');
      setIsAuth(true);
    });
  };

  const signOut = () => {
    localStorage.setItem('isAuth', 'false');
    localStorage.setItem('userAvatar', '');
  };

  console.log('avatar', avatar);

  return (
    <div
      className='App'
      style={{ position: 'relative', textAlign: 'center', height: '100%' }}
    >
      <nav
        style={{
          backgroundColor: '#282c34',
          padding: '20px 0',
          textAlign: 'left',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: '100%',
          maxHeight: 63,
          display: 'inline-flex',
          width: '100%',
          alignItems: 'center',
          boxSizing: 'border-box',
          boxShadow: '0px 5px 15px 0px #282c34',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            // backgroundColor: '#e7e7e7',
            height: '100%',
            width: '20%',
            display: 'inline-flex',
            padding: '0 20px',
            boxSizing: 'border-box',
            alignItems: 'center',
          }}
        >
          <Screw />
          <Link
            to='/'
            style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
          >
            Home
          </Link>
          <Link
            to='/portfolio'
            style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
          >
            Portfolio
          </Link>
          <Screw last />
        </div>
        <div
          style={{
            height: '100%',
            width: '60%',
            margin: '0 10px',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 20px',
            boxSizing: 'border-box',
          }}
        >
          <Screw />
          <Screw last />
        </div>
        <div
          style={{
            height: '100%',
            width: '20%',
            alignItems: 'center',
            justifyContent: 'end',
            display: 'inline-flex',
            padding: '0 20px',
            boxSizing: 'border-box',
          }}
        >
          <Screw />
          <button disabled={isAuth} onClick={googleSignIn}>
            Sign in
          </button>
          <img src={avatar} alt='Avatar' />
          <button disabled={!isAuth} onClick={signOut}>
            Sign out
          </button>
          <Screw last />
        </div>
      </nav>
      <Home />
    </div>
  );
};

export default App;
