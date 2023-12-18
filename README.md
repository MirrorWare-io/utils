# A general chain utils package dedicated to Cyberbrokers and the Lost Paradigm.

## how to use

Install using `npm i @cyberbrokers/eth-utils`

```typescript
import {config} from '@cyberbrokers/eth-utils'
import {getCbContractsByChainId} from '@cyberbrokers/eth-utils'

/**
 * Only necessary if you plan on using methods that require configs, such as getDelegateContract, getContractForAddress
 * */
config.setConfig({ 
    alchemy:{
        eth_key: 'dwd..'
    }
})

getCbContractsByChainId(1).cyberBrokersAddress // Cyberbrokers 0x... contract address
```

Documentation: https://mirrorware-io.github.io/utils/

**CyberBrokers Metadata**: CyberBrokers metadata is downloaded automatically on `npm i`. This is to keep the package size small

## Development

1. Git clone the repo

2. Make appropriate changes and don't forget to run prettier.

3. Make a PR to get your changes reviewed.
