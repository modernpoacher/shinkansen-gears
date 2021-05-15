#!/bin/bash


NVM=~/.nvm

if [[ -f "$NVM/nvm.sh" ]];
then
  unset npm_package_scripts_nvm
  unset npm_config_prefix
  unset npm_lifecycle_script

  source $NVM/nvm.sh
fi

VERSION=$(nvm --version)

if [[ -z "$VERSION" ]];
then
  echo NVM not installed
else
  echo NVM version $VERSION installed

  set -e

  nvm use &> /dev/null

  if [[ $? != 0 ]];
  then
    echo NVM not configured
  else
    echo NVM configured
  fi
fi

if [[ $# -gt 0 ]];
then
  npx gulp "$@"
else
  npx gulp
fi

exit 0
