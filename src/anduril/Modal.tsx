import React from "react";
import type { IFeedEntry } from "./types";

const ModalWrapper: React.CSSProperties = {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgb(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const ModalCard: React.CSSProperties = {
  display: "flex",
  maxHeight: "50vh",
  color: "rgb(220,220,220)",
};

interface IModalProps {
  isOpen: boolean;
  entry: IFeedEntry | null;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, entry, setIsOpen }) => {
  return (
    <div
      id="Modal-Wrapper"
      style={{ ...ModalWrapper, ...{ display: `${isOpen ? "flex" : "none"}` } }}
      onClick={() => setIsOpen(false)}
    >
      <div style={ModalCard}>{JSON.stringify(entry)}</div>
    </div>
  );
};

export default Modal;
