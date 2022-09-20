import { CSSProperties } from 'react';

export const minesPanelContainerStyles = (): CSSProperties => ({
  backgroundColor: '#e7e7e7',
  borderBottomLeftRadius: 10,
  boxSizing: 'border-box',
  display: 'grid',
  gridColumnGap: 0,
  gridRowGap: 0,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  height: '100%',
  padding: 10,
  width: '20%',
});
