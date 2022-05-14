import { css } from '@emotion/react';
import { useState } from 'react';
import {
  rowStyles,
  rowsContainerStyles,
  resourcesOverviewContainerStyles,
} from './styles';

const ResourcesOverview = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div style={resourcesOverviewContainerStyles(isCollapsed)}>
      <div
        css={css({
          backgroundColor: 'blue',
          '&:before': {
            content: "''",
            width: 50,
            height: 50,
            backgroundColor: 'green',
          },
        })}
        style={rowsContainerStyles()}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span style={rowStyles()} />
        <span style={rowStyles()} />
        <span style={rowStyles()} />
      </div>
    </div>
  );
};

export default ResourcesOverview;
