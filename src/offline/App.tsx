import Missions from "./Missions";
import { useNetwork } from "./providers";
import NetworkControls from "./NetworkControls";
import QueuePreview from "./QueuePreview";

function App() {
  const { isOnline } = useNetwork();
  return (
    <>
      <NetworkControls />
      <QueuePreview />
      <div
        style={{
          color: "#FFF",
          border: `1px solid ${isOnline ? "lime" : "red"}`,
        }}
      >
        <Missions />
      </div>
    </>
  );
}

export default App;
