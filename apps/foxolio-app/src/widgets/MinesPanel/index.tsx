import React from 'react';
import ResourceWindow from '../../components/ResourceWindow';
import { MineIcon, TreeIcon } from '../../icons';
import { Stones } from './components/Stones';
import { minesPanelContainerStyles } from './styles';

const MinesPanel = () => (
  <div style={minesPanelContainerStyles()}>
    <ResourceWindow gridPosition="1 / 1 / 3 / 2">
      <TreeIcon />
    </ResourceWindow>
    <ResourceWindow gridPosition="1 / 2 / 3 / 4">
      <Stones />
    </ResourceWindow>
    <ResourceWindow gridPosition="3 / 1 / 5 / 4">
      <MineIcon />
    </ResourceWindow>
    <ResourceWindow gridPosition="5 / 1 / 6 / 4">Something nice</ResourceWindow>
  </div>
);

export default MinesPanel;
