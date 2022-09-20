import { StoneIcon } from '../../../../icons';
import { iconsContainer } from './styles';

export const Stones = () => (
  <div style={iconsContainer()}>
    <StoneIcon
      width="50%"
      style={{
        position: 'absolute',
        bottom: 0,
        left: '45%',
        filter: 'drop-shadow(-4px -2px 4px rgb(0 0 0 / 0.4))',
      }}
    />
    <StoneIcon width="70%" style={{ marginRight: 10 }} />
  </div>
);
