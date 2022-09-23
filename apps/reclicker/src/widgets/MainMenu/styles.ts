import { css } from '@emotion/react';

export const StyledMainMenuContainer = () =>
  css({
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
  });
