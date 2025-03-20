import { ChainEnum } from "../src/chains";
import {config} from "../src/config";
import { getWalletFromALLDelegates } from "../src/contracts";

/**
 * Run using "npx ts-node "./test/delegate.ts""
 */

const testAlchemyKey = "YnO_IzyDnVFGrzYqlcfGSn4ZJ_WKJ655"

if(!testAlchemyKey){
    throw new Error("Please provide an Alchemy key for testing")
}

config.setConfig({
    alchemy:{
        sepolia_key: testAlchemyKey
    }
})


async function test(){
    const wallets = await getWalletFromALLDelegates("0x98Be1b7fEB2eB8f84251968d3B8d7d51Fe04F323",undefined,ChainEnum.SEPOLIA)
    console.log(wallets)
}

test()