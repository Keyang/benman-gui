#Benman-gui

#For development

To get start:

1. install electron `npm install -g electron`
2. run `npm install .`
3. change directory to `./client`
4. run `npm install .`
5. run `npm install -g webpack`


To run app:

At root folder run: `electron ./`


To build client:

goto `./client` then run `webpack --config ./build/webpack.dev.conf.js --watch`

Hot load:

When `webpack --watch` above is running, any changes made in `./client/src` can be hot loaded in electron app by refreshing (cmd+r)
 