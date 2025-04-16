# This is for demo purposes only
# This will generate client stubs into `dist` directory.
# Current stubs are located in ../client directory. So if you need to regenerated, move generated files from dist to ../client

rm -r dist
mkdir dist
protoc --plugin=../../node_modules/ts-proto/protoc-gen-ts_proto \
  -I. \
  --ts_proto_out=dist \
  --ts_proto_opt=forceLong=long \
  --ts_proto_opt=esModuleInterop=true \
  --ts_proto_opt=outputServices=grpc-js \
  ./base_node.proto ./wallet.proto
