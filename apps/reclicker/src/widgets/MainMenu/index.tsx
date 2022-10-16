import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../../utils/firebase';
import { StyledMainMenuContainer } from './styles';
import MenuContainer from './components/MenuContainer';

const MainMenu = () => {
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

  return (
    <nav css={StyledMainMenuContainer()}>
      <MenuContainer width={20}>
        <Link
          to="/"
          style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          style={{ color: 'white', textDecoration: 'none', margin: '0 8px' }}
        >
          Portfolio
        </Link>
      </MenuContainer>
      <MenuContainer width={60} />
      <MenuContainer width={20}>
        <button disabled={isAuth} onClick={googleSignIn}>
          Sign in
        </button>
        <button disabled={!isAuth} onClick={signOut}>
          Sign out
        </button>
        <img
          src={avatar}
          alt="Avatar"
          css={{
            width: 'auto',
            height: 'calc(100% + 20px)',
            borderRadius: '50%',
          }}
        />
      </MenuContainer>
    </nav>
  );
};

export default MainMenu;
