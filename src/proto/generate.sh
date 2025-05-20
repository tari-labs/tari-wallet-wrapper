#!/bin/bash

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