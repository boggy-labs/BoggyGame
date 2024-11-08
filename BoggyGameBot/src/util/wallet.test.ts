import { createNewSolanaWallet } from "./wallet";

/**
 *  console.log    
 *      public key to bs58 6WpHv64aMZVqznjurai2fKsyWKSfFtkfKXu9S2QCvYUb

        at Object.<anonymous> (src/util/wallet.test.ts:6:13)

    console.log
        private key to bs58 GaSaLwVYvXY6zuaSau4HuXPcNuBczNvmg4URbMTj915vZXeQsLm48tqbf8isH6xbrjo34k8DUnhJYCCwCj3wv8T

        at Object.<anonymous> (src/util/wallet.test.ts:7:13)
    */
describe("createNewSolanaWallet", () => {
  it("should create new solana wallet get (bs58) public and private key.", () => {
    let { publicKey, privateKey } = createNewSolanaWallet();
    console.log("public key to bs58", publicKey);
    console.log("private key to bs58", privateKey);
  });
});
