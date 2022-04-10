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
    <div className='App' style={{ textAlign: 'center' }}>
      <nav
        style={{
          width: '100%',
          backgroundColor: '#282c34',
          padding: '20px',
          textAlign: 'left',
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
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
      <button disabled={isAuth} onClick={googleSignIn}>
        Sign in
      </button>
      <img src={avatar} alt='Avatar' />
      <button disabled={!isAuth} onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

export default App;
