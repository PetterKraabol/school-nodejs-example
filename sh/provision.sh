#!/bin/bash

# Update apt list
apt-get update
# To get the newest version of nodejs
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
# Install nodejs
apt-get install -y nodejs