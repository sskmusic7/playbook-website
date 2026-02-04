/* eslint-disable react/prop-types */

import { useMetaMask } from "metamask-react";

export default function MetamarkComponent({ children }) {
  const { status, connect } = useMetaMask();
  const connectMetaMask = () => {
    if (status === "unavailable") {
      const modal = document?.getElementById("walletModal");
      const walletModalBackdrop = document?.getElementById(
        "walletModalBackdrop"
      );
      modal.style.display = "block";
      walletModalBackdrop.style.display = "block";
    } else {
      connect();
    }
  };

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable")
    return (
      <div onClick={connectMetaMask} className="cursor-pointer">
        {children}
      </div>
    );

  if (status === "notConnected")
    return (
      <div onClick={connectMetaMask} className="cursor-pointer">
        {children}
      </div>
    );

  if (status === "connecting")
    return <div className="text-accent py-1">Connecting...</div>;

  if (status === "connected")
    return (
      <div onClick={connectMetaMask} className="cursor-pointer">
        {children}
      </div>
    );

  return null;
}
