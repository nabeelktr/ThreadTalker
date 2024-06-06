#!/bin/bash

if ! npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/  "src/modules/auth/config/proto/auth.proto" "src/modules/user/config/proto/user.proto" "src/modules/discussion/config/proto/discussion.proto"; then
    echo "Error: proto-loader-gen-types failed"
    exit 1
fi