import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { auth, provider } from './utils/firebase';
import { signInWithPopup } from 'firebase/auth';

import Portfolio from './pages/Portfolio';
import Home from './pages/Home';

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
    <div className='App' style={{ textAlign: 'center', height: '100%' }}>
      <nav
        style={{
          backgroundColor: '#282c34',
          padding: '20px',
          textAlign: 'left',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
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
        <button disabled={isAuth} onClick={googleSignIn}>
          Sign in
        </button>
        <img src={avatar} alt='Avatar' />
        <button disabled={!isAuth} onClick={signOut}>
          Sign out
        </button>
      </nav>
      <div
        style={{
          width: '100%',
          height: 'calc(100% - 113px)',
          display: 'inline-flex',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '23%',
            borderBottomLeftRadius: 10,
          }}
        >
          Mines
        </div>
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
            marginLeft: '10px',
            marginRight: '10px',
          }}
        >
          Island
        </div>
        <div
          style={{
            backgroundColor: 'white',
            height: '100%',
            width: '23%',
            borderBottomRightRadius: 10,
          }}
        >
          Upgrades
        </div>
      </div>
    </div>
  );
};

export default App;
