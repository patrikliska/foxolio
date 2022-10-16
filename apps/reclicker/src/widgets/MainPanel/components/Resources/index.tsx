import { Box } from '@mui/material';
import { useState } from 'react';

import {
  rowStyles,
  rowsContainerStyles,
  resourcesContainerStyles,
} from './styles';

const Resources = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Box style={resourcesContainerStyles(isCollapsed)}>
      <Box
        style={rowsContainerStyles()}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span style={rowStyles()} />
        <span style={rowStyles()} />
        <span style={rowStyles()} />
      </Box>
    </Box>
  );
};

export default Resources;
