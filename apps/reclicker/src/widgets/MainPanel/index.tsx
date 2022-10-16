import { Box } from '@mui/material';

import Island from './components/Island';

import Resources from './components/Resources';
import { containerSx, townIslandOverviewSx } from './styles';

const MainPanel = () => {
  return (
    <Box sx={containerSx}>
      <Resources />
      <Box sx={townIslandOverviewSx}>
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <Island />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPanel;
