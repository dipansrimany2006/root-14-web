"use client";

import { useState, useEffect, useCallback } from "react";
import {
  isConnected,
  requestAccess,
  getAddress,
  getNetworkDetails,
} from "@stellar/freighter-api";

interface FreighterState {
  address: string | null;
  network: string | null;
  networkPassphrase: string | null;
  isFreighterInstalled: boolean;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export function useFreighter(): FreighterState {
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<string | null>(null);
  const [networkPassphrase, setNetworkPassphrase] = useState<string | null>(
    null
  );
  const [isFreighterInstalled, setIsFreighterInstalled] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    async function checkFreighter() {
      try {
        const result = await isConnected();
        setIsFreighterInstalled(result.isConnected);

        if (result.isConnected) {
          const addrResult = await getAddress();
          if (addrResult.address) {
            setAddress(addrResult.address);
            const networkResult = await getNetworkDetails();
            setNetwork(networkResult.network);
            setNetworkPassphrase(networkResult.networkPassphrase);
          }
        }
      } catch {
        setIsFreighterInstalled(false);
      }
    }

    checkFreighter();
  }, []);

  const connect = useCallback(async () => {
    if (isConnecting) return;
    setIsConnecting(true);

    try {
      const accessResult = await requestAccess();
      if (accessResult.address) {
        setAddress(accessResult.address);
        const networkResult = await getNetworkDetails();
        setNetwork(networkResult.network);
        setNetworkPassphrase(networkResult.networkPassphrase);
      }
    } catch (error) {
      console.error("Failed to connect Freighter:", error);
    } finally {
      setIsConnecting(false);
    }
  }, [isConnecting]);

  const disconnect = useCallback(() => {
    setAddress(null);
    setNetwork(null);
    setNetworkPassphrase(null);
  }, []);

  return {
    address,
    network,
    networkPassphrase,
    isFreighterInstalled,
    isConnecting,
    connect,
    disconnect,
  };
}
