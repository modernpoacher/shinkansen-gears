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
  echo Environment does not have NVM installed
else
  echo Environment has NVM version $VERSION installed

  set -e

  nvm use &> /dev/null

  if [[ $? != 0 ]];
  then
    echo Environment does not have NVM configured
  else
    echo Environment has NVM version $VERSION configured
  fi
fi

if [[ $# -gt 0 ]];
then
  npx gulp "$@"
else
  npx gulp
fi

exit 0
