"use client";

import { type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { http } from "viem";
import { holesky, morphHolesky } from "viem/chains";

const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API ?? undefined;

const config = createConfig({
  chains: [holesky, morphHolesky],
  multiInjectedProviderDiscovery: false,
  transports: {
    [holesky.id]: http(`https://eth-holesky.g.alchemy.com/v2/${alchemyApiKey}`),
    [morphHolesky.id]: http(`https://rpc-quicknode-holesky.morphl2.io`),
  },
});

const queryClient = new QueryClient();

export default function OnchainProvider({ children }: { children: ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID ?? "ENV_ID",
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
