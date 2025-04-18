const {TariWalletGrpcClient, utils} = require('./build/cjs/lib')

// Constants
const TARI_ADDRESS_INTERNAL_SINGLE_SIZE = 35; // Size of a Tari address in bytes
const TARI_ADDRESS_INTERNAL_DUAL_SIZE = 67; // Size of a dual Tari address in bytes

// Base58 alphabet
const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

// Network types
const Network = {
    MainNet: 0x00,
    StageNet: 0x01,
    NextNet: 0x02,
    LocalNet: 0x10,
    Igor: 0x24,
    Esmeralda: 0x26,
    Invalid: 0xFF
};

// Address features flags
const TariAddressFeatures = {
    ONE_SIDED: 1 << 0,  // 1u8
    INTERACTIVE: 1 << 1  // 2u8
};

// Error types
const TariAddressError = {
    InvalidSize: "Invalid address size",
    InvalidChecksum: "Invalid checksum",
    InvalidNetwork: "Invalid network type",
    InvalidFeatures: "Invalid features",
    CannotRecoverPublicKey: "Cannot recover public key"
};

// Helper function to get network name from byte
function getNetworkName(networkByte) {
    for (const [name, value] of Object.entries(Network)) {
        if (value === networkByte) {
            return name;
        }
    }
    return 'Invalid';
}

// Validate checksum function
function validateChecksum(bytes) {
    // TODO: Implement actual checksum validation
    // For now, just return true
    return true;
}


// Helper function to format key as hex string
function formatKeyAsHex(keyBuffer) {
    if (!keyBuffer) return null;
    return keyBuffer.toString('hex');
}


// Validate checksum function
function validateChecksum(bytes) {
    // TODO: Implement actual checksum validation
    // For now, just return true
    return true;
}

// Convert bytes to base58 string
function toBase58(bytes) {
    let num = BigInt('0x' + bytes.toString('hex'));
    let result = '';
    
    while (num > 0n) {
        const remainder = num % 58n;
        num = num / 58n;
        result = BASE58_ALPHABET[Number(remainder)] + result;
    }
    
    // Add leading 1's for each leading zero byte
    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] === 0) {
            result = '1' + result;
        } else {
            break;
        }
    }
    
    return result;
}

// Convert base58 string to bytes
function fromBase58(base58Str) {
    let num = 0n;
    
    // Convert base58 string to number
    for (let i = 0; i < base58Str.length; i++) {
        const char = base58Str[i];
        const index = BASE58_ALPHABET.indexOf(char);
        if (index === -1) {
            throw new Error('Invalid base58 character');
        }
        num = num * 58n + BigInt(index);
    }
    
    // Convert number to hex string
    let hex = num.toString(16);
    
    // Add leading zeros if needed
    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }
    
    // Convert hex to bytes
    const bytes = Buffer.from(hex, 'hex');
    
    // Add leading zeros
    const leadingZeros = base58Str.match(/^1+/);
    if (leadingZeros) {
        const zeros = Buffer.alloc(leadingZeros[0].length, 0);
        return Buffer.concat([zeros, bytes]);
    }
    
    return bytes;
}

const client = new TariWalletGrpcClient('localhost:18183')

async function main() {
    const identity = (await client.identify())
    console.log('identity publicKey:', identity.publicKey.toString('hex'))
    console.log('identity nodeId:', identity.nodeId.toString('hex'))

    const address = (await client.getAddress())
    const parsedAddress = utils.parseTariAddress(Buffer.from(address.oneSidedAddress));
    console.log('parsedAddress:', parsedAddress)

    const version = await client.getVersion()
    console.log('version:', version)

    const state = await client.getState()
    console.log('state:', state)

    const balance = await client.getBalance({})
    console.log('balance:', balance.availableBalance.toString())
    
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