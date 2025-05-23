#!/bin/bash

# Default values
TARI_REPO_PATH="../../../tari"
DRY_RUN=true

# Define all proto files
PROTO_FILES=(
  "base_node.proto"
  "wallet.proto"
  "types.proto"
  "validator_node.proto"
  "sidechain_types.proto"
  "transaction.proto"
  "network.proto"
  "p2pool.proto"
  "block.proto"
)

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --tari-path)
      TARI_REPO_PATH="$2"
      shift 2
      ;;
    --no-dry-run)
      DRY_RUN=false
      shift
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 [--tari-path PATH] [--no-dry-run]"
      exit 1
      ;;
  esac
done

# Function to find and copy proto files
find_and_copy_proto() {
  local proto_name=$1
  local matches=($(find "$TARI_REPO_PATH/applications/" -name "$proto_name" -type f))
  
  if [ ${#matches[@]} -eq 0 ]; then
    echo "Error: Could not find $proto_name in $TARI_REPO_PATH"
    exit 1
  fi
  
  if [ ${#matches[@]} -gt 1 ]; then
    echo "Error: Found multiple matches for $proto_name:"
    printf '%s\n' "${matches[@]}"
    exit 1
  fi
  
  if [ "$DRY_RUN" = true ]; then
    echo "Would copy $proto_name from ${matches[0]}"
  else
    echo "Copying $proto_name from ${matches[0]}"
    cp "${matches[0]}" .
  fi
}

# Find and copy proto files
for proto_file in "${PROTO_FILES[@]}"; do
  find_and_copy_proto "$proto_file"
done

# Generate TypeScript files
rm -r dist
mkdir dist
protoc --plugin=../../node_modules/ts-proto/protoc-gen-ts_proto \
  -I. \
  --ts_proto_out=dist \
  --ts_proto_opt=forceLong=long \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=outputServices=grpc-js \
  ./base_node.proto ./wallet.proto

cp -r dist/* ../client