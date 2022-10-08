import ResourcesOverview from './components/ResourcesOverview';

const islandImage = require('../../assets/island-w-water.png');

const MainPanel = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <ResourcesOverview />
      <div
        css={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'end',
          display: 'flex',
          padding: 50,
        }}
      >
        <div css={{ display: 'flex', position: 'relative' }}>
          <img src={islandImage} alt="island.png" css={{ width: '100%' }} />
          <div
            css={{
              position: 'absolute',
              display: 'grid',
              gridTemplateColumns: 'repeat(20, 1fr)',
              gridTemplateRows: 'repeat(10, 1fr)',
              height: '100%',
              width: '100%',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainPanel;
