# This is for demo purposes only
# This will generate client stubs into `dist` directory.
# Current stubs are located in ../client directory. So if you need to regenerated, move generated files from dist to ../client

OUT_DIR=dist
rm -r $OUT_DIR
mkdir $OUT_DIR
PROTOC_GEN_JS=../../node_modules/protoc-gen-js/bin/
PATH=$PATH:$PROTOC_GEN_JS
protoc --plugin=../../node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web \
  -I. \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcweb:$OUT_DIR \
  ./*.proto
