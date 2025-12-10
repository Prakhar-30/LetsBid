import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon, arbitrum } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'LetsBid',
  projectId: 'YOUR_PROJECT_ID', // Get from WalletConnect Cloud
  chains: [mainnet, sepolia, polygon, arbitrum],
  ssr: true,
});
