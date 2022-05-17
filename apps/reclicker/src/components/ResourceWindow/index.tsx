import { ReactNode } from 'react';
import {
  dotStyles,
  resourceWindowContainerStyles,
  topPanelStyles,
} from './styles';

const ResourceWindow = ({
  children,
  gridPosition,
}: {
  children: ReactNode;
  gridPosition: string;
}) => (
  <div style={resourceWindowContainerStyles(gridPosition)}>
    <div style={topPanelStyles()}>
      <div style={dotStyles('red')} />
      <div style={dotStyles('yellow')} />
      <div style={dotStyles('green')} />
    </div>
    {children}
  </div>
);

export default ResourceWindow;
