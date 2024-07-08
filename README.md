# PriceOracle-AVS

## PrivateHealthAI

- This repository contains the code for a private ai task performer and webAPI validator.
- We are using TaskOperator to listen to contracts and subscribe to event which will emit the prompts and taskID. Using these as parameters we are calling our custom LLM model and generating a response. This response is uploaded to IPFS and we broadcasts CID. 
- We are then sending this response to the RPC to Othentic stack attesters. 
- The AVS-WEBAPI validates the response and reverts back to attesters. This is then submitted to aggrgator which then sends to attestation node where rewards are disttributed.

## Txn

1. Registering the operators: 
- Attester 1: 

Registered on network 0x497B6f4109667B9e31dF7047d2bACAc81c115a99

Operator: 0x9d75Eafe39a6bCB7472B698FA8cD186Bc11Ad872

Tx hash: 0xf624ad4bac80b3275eae024580693926344b7d7d6f3eb0f6a06ac96a80f44082

Registered on AVS Directory with transaction hash: 0x62352c73ed8d3b6fb3cbca52794a186a8d7117dccad274600b3e0cfc2e321047

- Attester 2:

Registered on network
0x497B6f4109667B9e31dF7047d2bACAc81c115a99

Operator: 0x80A5b710a0689b605C665F4b2e2c2be6174FD8Cd

Tx hash: 0xa92a22d424ad121ae04b6c7eb2408a9d6ce27ad6e3b3582c3bb7934eed28e8ae

Registered on AVS Directory with transaction hash: 0x12a6ccd751fcfb4027b06d869671b0060e803eaac9ef1c22396899efcd94d83d

- Task Operator: 

Registered on network 0x497B6f4109667B9e31dF7047d2bACAc81c115a99

Operator: 0xD2a56Cd8362cD679912Ed75634eA90E546133875

Tx hash: 0xae8f5d84f16296cc5fd31bccc566e1976e4492ffca31c50b585401e906dc1c9a

Registered on AVS Directory with transaction hash: 0xc55be0c2a1d42fd00d07617d8e0ab074536f4d50b064b15976835b0715ea3aaa