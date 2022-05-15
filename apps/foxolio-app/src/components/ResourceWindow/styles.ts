import { CSSProperties } from 'react';

export const resourceWindowContainerStyles = (
  gridPosition: string
): CSSProperties => ({
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  border: '1px solid #C1C1C1',
  borderRadius: 5,
  boxShadow: 'rgb(40 44 52) 0px 0px 25px -15px',
  display: 'flex',
  gridArea: gridPosition,
  justifyContent: 'center',
  margin: '10px 5px',
  overflow: 'hidden',
  padding: '5%',
  position: 'relative',
});

export const topPanelStyles = (): CSSProperties => ({
  width: '100%',
  height: 12,
  backgroundColor: '#BEBEBE',
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'inline-flex',
  alignItems: 'center',
  paddingLeft: 2,
  gap: 4,
});

export const dotStyles = (color: string) => ({
  width: 8,
  height: 8,
  backgroundColor: color,
  borderRadius: '50%',
});
