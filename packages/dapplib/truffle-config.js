require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stove razor tortoise exact grace slam frame gate'; 
let testAccounts = [
"0x6edf42246d027845e706625fa4a10275ca5cae36ac52e3f6b2ce00542d481979",
"0x3998ee66b81103df9d56cce17977be4790162b282d9ddff6d29ab7986f0d0f1b",
"0x0e0921371b25a4bd875e0a3f557bc0a55fb0a8852a11141a9de918996bcf462b",
"0xb2f28b436f430aacc43e43ddea8298f0c7da4d046cbe0647340b6e123c2a3674",
"0xb0481bbe3b9840dec7d10d2374b76eff2badff9714d1c2a41a6b3278e35a3aab",
"0x8d8268d8ff81010bbb94225edd3fb5c459b9a2c3d4199f7739103685a3471697",
"0x9a813bbb44d49f6221df1463bc849026ad5e101b12c609daa95c0145552508d5",
"0x360c07e2614f458091ac8bd84422e6435806e5eae943ffef7eeeeff0cd6c7296",
"0x829d3df308e8cdadccf1797686776a6cd65f750de60f0e8982af86913d7a9203",
"0xa7c9b7bc20ef9baa383bf4731a69598cb3b352204d5cfb09b68df1bd99e1ffde"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

