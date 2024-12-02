import AuctionPage from './pages/AuctionPage';
import { StarknetConfig, argent, braavos } from "@starknet-react/core";
import { sepolia } from "@starknet-react/chains";
import { RpcProvider } from "starknet";

function App() {
  const starknetProvider = new RpcProvider({ 
    nodeUrl: "https://starknet-sepolia.public.blastapi.io/rpc/v0_6" 
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      connectors={[argent(), braavos()]}
      provider={() => starknetProvider}
    >
      <AuctionPage contractAddress="0x123..." />
    </StarknetConfig>
  );
}

export default App;
