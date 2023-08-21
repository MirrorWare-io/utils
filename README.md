# A general chain utils package dedicated to Cyberbrokers and the Lost Paradigm.

## how to use

Install using `npm i @cyberbrokers/eth-utils`

```js
import {...} from '@cyberbrokers/eth-utils'
```

**NOTE:** Some functions need environment variables set; Below are a list of functions and what envs they need defined:

| Function      | Env needed | Info |
| ----------- | ----------- | ----------- |
| getDelegateContract      | NEXT_PUBLIC_INFURA_API_KEY if infura (generally used on front-end) or ETH_ALCHEMY_KEY, GOERLI_ALCHEMY_KEY if Alchemy (generally used on backend)       | Note: We use NEXT_PUBLIC... so that the key can be exposed on the front-end of a nextJS application |
| getWalletFromDelegate   | NEXT_PUBLIC_INFURA_API_KEY if infura (generally used on front-end) or ETH_ALCHEMY_KEY, GOERLI_ALCHEMY_KEY if Alchemy (generally used on backend)        | |


## Development

1. Git clone the repo

2. Make appropriate changes and don't forget to run prettier.

3. Make a PR to get your changes reviewed.
