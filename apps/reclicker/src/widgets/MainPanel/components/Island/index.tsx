import { Box } from '@mui/material';

import { islandGridSx } from './styles';

const islandImage = require('../../../../assets/island-w-water.png');

const Island = () => (
  <>
    <img src={islandImage} alt="island.png" css={{ width: '100%' }} />
    <Box sx={islandGridSx} />
  </>
);

export default Island;
