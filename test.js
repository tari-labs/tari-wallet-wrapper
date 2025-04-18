const {TariWalletGrpcClient, utils} = require('./build/cjs/lib')

const client = new TariWalletGrpcClient('localhost:18183')

async function main() {
    // const identity = (await client.identify())
    // console.log('identity publicKey:', identity.publicKey.toString('hex'))
    // console.log('identity nodeId:', identity.nodeId.toString('hex'))

    const address = (await client.getAddress())
    console.log('address:', address)
    // const parsedAddress = utils.parseTariAddress(Buffer.from(address.oneSidedAddress));
    // console.log('parsedAddress:', parsedAddress)

    // const version = await client.getVersion()
    // console.log('version:', version)

    // const state = await client.getState()
    // console.log('state:', state)

    // const balance = await client.getBalance({})
    // console.log('balance:', balance.availableBalance.toString())
    
    // await client.streamTransactionEvents((response) => {
    //     console.log('transaction event:', response)
    // }, (error) => {
    //     console.error('transaction event error:', error)
    // })
    
    // try {
    //     const parsedAddress = parseTariAddress(Buffer.from(address.oneSidedAddress));
    //     console.log('Parsed Address:', {
    //         network: parsedAddress.network,
    //         features: parsedAddress.features,
    //         publicSpendKey: formatKeyAsHex(parsedAddress.publicSpendKey),
    //         publicViewKey: formatKeyAsHex(parsedAddress.publicViewKey),
    //         base58: toBase58(Buffer.from(address.oneSidedAddress)),
    //         publicSpendKeyBase58: toBase58(parsedAddress.publicSpendKey),
    //         publicViewKeyBase58: toBase58(parsedAddress.publicViewKey),

    //     });
    // } catch (error) {
    //     console.error('Error parsing address:', error.message);
    // }
    
    // const balance = await client.getBalance({})
    // console.log('Balance:', balance.availableBalance.toString());
}

main()