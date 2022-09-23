import { CSSProperties } from 'react';

export const screwStyles = (last?: boolean): CSSProperties => ({
  backgroundColor: '#404040',
  borderRadius: '50%',
  minHeight: 20,
  margin: 10,
  position: 'relative',
  minWidth: 20,
});

export const screwLineStyles = (last?: boolean): CSSProperties => {
  const randomNumber = Math.floor(Math.random() * 100);
  const screwLinePosition = randomNumber * 3.6;

  return {
    backgroundColor: '#303030',
    width: '100%',
    height: 2,
    position: 'absolute',
    transform: `translateY(-50%) rotate(${screwLinePosition}deg)`,
    top: '50%',
  };
};
