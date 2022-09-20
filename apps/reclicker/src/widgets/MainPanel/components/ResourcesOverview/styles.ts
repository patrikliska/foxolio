import { CSSProperties } from 'react';

export const resourcesOverviewContainerStyles = (
  isCollapsed: boolean
): CSSProperties => ({
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: '#ffffff',
  width: '70%',
  height: isCollapsed ? 30 : 250,
  boxShadow: 'rgb(40 44 52) 0px 0px 25px -10px',
  borderRadius: '0 0 5px 5px',
});

export const rowsContainerStyles = (): CSSProperties => ({
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  margin: 5,
  opacity: '0.1',
  cursor: 'pointer',
  // transitionProperty: 'height',
  // transitionDuration: '500ms',
});

export const rowStyles = (): CSSProperties => ({
  width: 25,
  height: 2,
  backgroundColor: '#000000',
  margin: 1,
  borderRadius: 5,
});
