import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'D05BAF13-CF40-478E-8A9A-03765FD000F8',
  unit: 'x42',
  hashGenesisBlock:
    '04ffe583707a96c1c2eb54af33a4b1dc6d9d8e09fea8c9a7b097ba88f0cb64c4',
  port: 52342,
  portRpc: 52343,
  protocol: {
    magic: 0x3526642,
  },
  seedsDns: [
    'mainnet1.x42seed.host',
    'mainnetnode1.x42seed.host',
    'tech.x42.cloud',
    'x42.seed.blockcore.net',
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e,
    },
    bip44: 424242,
    private: 0xcb,
    public: 0x4b,
    scripthash: 0x7d,
  },
};
