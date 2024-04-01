"use client";
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import SendSOLToRandomAddress from './testwallet';
import {  NTXButton } from './components/Connection2/MultiButtonNTX';
import {  WalletModalProvider2 } from './components/Connection2/WalletModalProvider';
// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const Wallet = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [
        // Wallets that implement either of these standards will be available automatically.
        new UnsafeBurnerWalletAdapter(),
        // Add more wallets here if needed
    ], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider2>
                    <NTXButton/>
                    <WalletDisconnectButton />
                    <SendSOLToRandomAddress/>
                    {/* Your app's components go here, nested within the context providers. */}
                </WalletModalProvider2>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default Wallet;
