
## Preparation

( Ubuntu )

    sudo apt-get install nodejs npm
    sudo npm install jack -g
    sudo npm install js-yaml -g
    sudo npm install wrench -g

Check the `NODE_PATH` variable is in your environment:

    (...)
    NODE_PATH=/usr/local/lib/node_modules

And it shoud be able to guide node.js where to find global modules.
You can manually export the variable if it did not appear in your environment:

    export NODE_PATH=/usr/local/lib/node_modules # Or other avaliable location.

And add the line in your `bash.rc` to load it automatically.


## Make

Enter this `make` command in your FunTang project directory.

    jake -C ./config -f ./config/jake.js

It will publish the node.js module from source codes.


## Test Installation

In the `publish` directory, type 

    npm install

... to install all needed packages.

And now you can type 
    
    ./bin/funtang.compiler.js --help

... to see how to use this compiler.


## Demo Codes

If you want to compile something, some sameple codes may be listed below.
I will try to add some unit test case ASAP.

    ()->x y
    ()->x y
    (x)->(y)->x y
    ()->x y x x y y y
    gsf = (a,b,c,d,e)->()->x "yacc" 34.12313
                          'led'  3
                          'leet'
    ff = ()->(x,y)->(z,w)->x 
                           y 
                           w


