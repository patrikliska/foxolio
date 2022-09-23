import { css } from '@emotion/react';

export const StyledMenuContainer = (width: number) =>
  css({
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'inline-flex',
    height: '100%',
    width: `${width}%`,
  });

export const StyledMenuContainerContent = () =>
  css({
    alignItems: 'center',
    display: 'inline-flex',
    height: '100%',
    position: 'relative',
    width: '100%',
  });
