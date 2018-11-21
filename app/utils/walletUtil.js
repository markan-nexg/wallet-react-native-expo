// import Bitcore  from 'bitcore-lib';
// import StellarSdk from 'stellar-sdk';
// import ED25519HDkey from 'ed25519-hd-key';
// import Mnemonic  from 'bitcore-mnemonic';
// import bip44Constants from 'bip44-constants';
import StellarSdk from '@pigzbe/react-native-stellar-sdk'; 

function coinType(coin) {
  // return String(bip44Constants[coin.toUpperCase()] - 0x80000000); 
}

// 키 생성
export const createKeys  = ({ type }) => {
  // const mnemonic = Mnemonic(Mnemonic.Words.ENGLISH).toString();

  // 스텔라루멘 키 생성
  // const data = ED25519HDkey.derivePath(`m/44'/${coinType('XLM')}'/0'`, Mnemonic(mnemonic).toSeed());
  // const xlmKeypair = StellarSdk.Keypair.fromRawEd25519Seed(data.key); 
  const xlmKeypair = StellarSdk.Keypair.random(); 

  // 비트코인
  // 이더리움
  // const xPriUsr = Mnemonic(mnemonic).toHDPrivateKey();
  // const btcKeypair = xPriUsr.deriveChild(`m/44'/${coinType('BTC')}'/0'`);
  // const ethKeypair = xPriUsr.deriveChild(`m/44'/${coinType('ETH')}'/0'`);

  return {
    // mnemonic,
    xlm: {
      xPriUsr: xlmKeypair.secret(), // 스텔라루멘 비밀키(비밀시드)
      xPubUsr: xlmKeypair.publicKey(),
    },
    // btc: {
    //   xPriUsr: btcKeypair.hdPrivateKey.toString(),
    //   xPubUsr: btcKeypair.hdPublicKey.toString(),
    // },
    // eth: {
    //   xPriUsr: ethKeypair.hdPrivateKey.toString(),
    //   xPubUsr: ethKeypair.hdPublicKey.toString(),
    // }
  }
}
