require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note museum update gesture opera equal general'; 
let testAccounts = [
"0x5314141eb6e2761350214002866e154282b8bf9674dd3acaef29357e896ede73",
"0x4a96a485238776b1c54c49ed2aff851991b6d1b6dfa9129b9ad0e6c8cbd39b71",
"0xb302035cc902804059a8dbc6327b534d7383a4a516ce89217ae99b17cc051be2",
"0xc7d5a24a13c86b2647ce0e51b6138bb95008ea0dced7484fde0134968dc1062f",
"0x9193f143b458a07025c904ca7b1f3b1d58316fd695c2ba94cb1fde9431b93033",
"0xa123f797e5cf7b55655dee7deff730319c6f8041586491a940b2c0a02e773e9c",
"0x77c4d7dd268f14e611fb14f4f1b32e62b57d1a358de1008e87e180d3304b9808",
"0x8a4c3ceae267ac8e9f41580e868f25e084f1267af6a39d91aaa5e075c67a3ccf",
"0x3c6b46cf1c0216f2df9ab6fa88dccfd55fe9eeff89ab197b4e0a6e164a453408",
"0x715fabce385e35cfda67671bcf4e28b97dccdcb2a52d931c558308f5f0259bbe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


