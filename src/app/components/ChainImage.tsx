// Import your chain icon components
import OptimismIcon from '../assets/icons/coins/OptimismIcon';
import EthereumIcon from '../assets/icons/coins/EthereumIcon';
import ArbitrumIcon from '../assets/icons/coins/ArbitrumIcon';
// ChainImage function component
// Default export of the function
export default function ChainImage(chain_id: number): JSX.Element {
    switch (chain_id) {
      case 10:
        return <OptimismIcon />;
      case 1:
        return <EthereumIcon />;
      case 31337:
        return <EthereumIcon />;
      case 5:
        return <EthereumIcon />;
      case 42161:
        return <ArbitrumIcon />;
      default:
        // Explicitly assert never to ensure all cases are handled
        throw new Error(`Unhandled chain ID: ${chain_id}`);
    }
}