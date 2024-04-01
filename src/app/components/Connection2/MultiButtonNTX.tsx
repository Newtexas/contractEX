import React from 'react';
import { DeVries } from './StatusButtonWallet';
import type { ButtonProps } from './Button';

const LABELS = {
    'change-wallet': 'Change wallet',
    connecting: 'Connecting ...',
    'copy-address': 'Copy address',
    copied: 'Copied',
    disconnect: 'Disconnect',
    'has-wallet': 'Connect',
    'no-wallet': 'Select Wallet',
} as const;

export function NTXButton(props: ButtonProps) {
    return <DeVries {...props} labels={LABELS} />;
}