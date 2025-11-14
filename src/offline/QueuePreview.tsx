import { useQueue } from "./providers";

function QueuePreview() {
  const { queue } = useQueue();
  return (
    <div style={{ color: "blue" }}>
      <pre>{JSON.stringify(queue, null, 2)}</pre>
    </div>
  );
}

export default QueuePreview;
