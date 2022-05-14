import { screwLineStyles, screwStyles } from './styles';
import { ScrewProps } from './types';

const Screw = ({ last }: ScrewProps) => (
  <div style={screwStyles(last)}>
    <div style={screwLineStyles()} />
  </div>
);

export default Screw;
