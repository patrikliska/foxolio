import { SxProps, Theme } from '@mui/material';

export const islandGridSx: SxProps<Theme> = {
  position: 'absolute',
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
  gridTemplateRows: 'repeat(10, 1fr)',
  height: '100%',
  width: '100%',
};
