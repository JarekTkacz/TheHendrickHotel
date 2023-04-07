#!/usr/bin/env bash 


sudo apt update && sudo apt install nodejs npm

# Install pm2 which is a production process manager for Node.js with a built-in load balancer.
sudo npm i -g pm2

# stop any instance of our application running currently
pm2 stop example_app

# change directory into folder where application is downloaded
cd DevOpsSecCA/

# Install application dependancies
npm install

# echo $PRIVATE_KEY > privatekey.pem
# echo $SERVER > server.crt

# Start the application with the process name example_app using pm2
pm2 start ./bin/www --name example_app
