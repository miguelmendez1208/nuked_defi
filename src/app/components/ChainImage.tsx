// Import your chain icon components
import OptimismIcon from '../assets/icons/coins/OptimismIcon';
import EthereumIcon from '../assets/icons/coins/EthereumIcon';
import ArbitrumIcon from '../assets/icons/coins/ArbitrumIcon';
// ChainImage function component
// Default export of the function
//JSX element is equivalent to React Node... at least it should be...
export default function ChainImage(chain_id: number): JSX.Element {
  console.log("chain_id number at ChainImage");
  console.log(chain_id);
  console.log("chain_id type:");
  console.log(typeof(chain_id));
  console.log("onto switch statement");
    switch (chain_id) {
      case 10:
        return <OptimismIcon />;
      case 1:
        console.log("eth icon");
        return <EthereumIcon />;
      case 31337:
        console.log("anvil icon");
        return <EthereumIcon />;
      case 5:
        console.log("idk what this one is supposed to be");
        return <EthereumIcon />;
      case 42161:
        console.log("why isnt this running?");
        return <ArbitrumIcon />
      default:
        // Explicitly assert never to ensure all cases are handled
        throw new Error(`Unhandled chain ID: ${chain_id}`);
    }
}