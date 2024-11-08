import nacl from "tweetnacl";
import bs58 from "bs58";
/**
 * create new solana wallet account.
 * @returns { publicKey: string; privateKey: string }
 */
export function createNewSolanaWallet(): {
  publicKey: string;
  privateKey: string;
} {
  const keyPair = nacl.sign.keyPair();
  const publicKeyBase58 = bs58
    .encode(Buffer.from(keyPair.publicKey))
    .toString();
  const privateKeyBase58 = bs58
    .encode(Buffer.from(keyPair.secretKey))
    .toString();
  return { publicKey: publicKeyBase58, privateKey: privateKeyBase58 };
}
