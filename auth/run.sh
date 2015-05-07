#!/bin/bash
if [[ -z "${1}" ]]; then
echo "pass in node js file on command line"
exit 1
fi
export NODE_PATH=$NODE_PATH:/home/user/nodejs/node_modules
node "${1}"
