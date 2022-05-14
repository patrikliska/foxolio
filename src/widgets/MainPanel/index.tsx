import ResourcesOverview from './components/ResourcesOverview';

const MainPanel = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
      }}
    >
      <ResourcesOverview />
    </div>
  );
};

export default MainPanel;
