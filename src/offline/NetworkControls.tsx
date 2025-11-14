import { useNetwork } from "./providers";

function NetworkControls() {
  const { isOnline, toggleOnline } = useNetwork();

  const handleClick = () => {
    toggleOnline();
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {isOnline ? "Online" : "Offline"}
      </button>
    </div>
  );
}
export default NetworkControls;
