
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
function getNetworkName(networkByte: number) {
    for (const [name, value] of Object.entries(Network)) {
        if (value === networkByte) {
            return name;
        }
    }
    return 'Invalid';
}

// Helper function to format key as hex string
function formatKeyAsHex(keyBuffer: Buffer) {
    if (!keyBuffer) return null;
    return keyBuffer.toString('hex');
}


// Validate checksum function
function validateChecksum(bytes: Buffer) {
    // TODO: Implement actual checksum validation
    // For now, just return true
    return true;
}


// Parse Tari address from bytes and extract keys
export function parseTariAddress(bytes: Buffer) {
    console.log('Address bytes length:', bytes.length);
    console.log('Address bytes (hex):', bytes.toString('hex'));

    if (bytes.length !== TARI_ADDRESS_INTERNAL_SINGLE_SIZE && bytes.length !== TARI_ADDRESS_INTERNAL_DUAL_SIZE) {
        throw new Error(TariAddressError.InvalidSize);
    }

    if (!validateChecksum(bytes)) {
        throw new Error(TariAddressError.InvalidChecksum);
    }

    const networkByte = bytes[0];
    const networkName = getNetworkName(networkByte);
    if (networkName === 'Invalid') {
        throw new Error(TariAddressError.InvalidNetwork);
    }

    const featuresByte = bytes[1];
    const features = [];
    for (const [key, value] of Object.entries(TariAddressFeatures)) {
        if (featuresByte & value) {
            features.push(key);
        }
    }

    // Extract keys based on address type
    let publicSpendKey;
    let publicViewKey;

    if (bytes.length === TARI_ADDRESS_INTERNAL_SINGLE_SIZE) {
        // Single address: bytes 2-34 contain the public spend key
        publicSpendKey = Buffer.from(bytes.slice(2, 34));
        publicViewKey = null;
        console.log('Single address detected');
    } else {
        // Dual address: 
        // bytes 2-34 contain the public view key
        // bytes 34-66 contain the public spend key
        publicViewKey = Buffer.from(bytes.slice(2, 34));
        publicSpendKey = Buffer.from(bytes.slice(34, 66));
        console.log('Dual address detected');
        console.log('View key bytes (hex):', publicViewKey.toString('hex'));
        console.log('Spend key bytes (hex):', publicSpendKey.toString('hex'));
    }

    return {
        network: networkName,
        features,
        publicSpendKey,
        publicViewKey,
        // Note: Private keys cannot be extracted from public addresses
        // They must be stored separately and securely
    };
}