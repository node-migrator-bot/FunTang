#!/usr/bin/env node

var __VERSION__ = "0.0.1";

var fs = require('fs');
var optparse = require('optparse');

var funtang = {};

var libpath = __dirname+'/../lib';

// TODO: use config to replace hard-coded path.
funtang.parser    = require(libpath+'/funtang/parser/funtang.parser.js');
funtang.generator = require(libpath+'/funtang/generator/funtang.generator.js');

function main()
{
    var env = { 'INPUT' : ""
              , 'OUTPUT': ""
              , 'ADT'   : "" };

    // Create a new OptionParser.
    var optparser = new optparse.OptionParser(optionSwitches());

    optparser.on(0, function(value) {
    });

    optparser.on('help', function() {
        console.log(optparser.toString());
        process.exit(0);
    });

    optparser.on('version', function(){
        console.log('FunTang Compiler ver '+__VERSION__+' .');
        process.exit(0);
    });
    

    optparser.on('output', function(name, value) {
        env['OUTPUT'] = value;
    });

    optparser.on('input', function(name, value) {
        env['INPUT'] = value;
    });

    optparser.on('with-adt', function(name, value) {
        env['ADT'] = value;
    });

    optparser.parse(process.argv);

// TODO: .on is async and this function will receive nothing to run after this function be called.
    doCompile(env);
}

function doCompile(env){
    fs.readFile(env['INPUT'],'utf8',function(err,data){

        // Now I miss the Maybe Monad in Haskell. 
        if(err)
        {
            throw err;
        }

        var adt = funtang.parser.parse(data);
        if( "" != env['ADT'] )
        {
            fs.writeFile( env['ADT']
                        , JSON.stringify(adt)
                        , function(err){
                            if(err)
                            {
                                throw err;
                            }
                        } );
        }

        var coffee = funtang.generator.generate(adt);
        fs.writeFile( env['OUTPUT'], coffee, function(err){
            if(err)
            {
                throw err;
            }
        });
    });
}

function optionSwitches()
{
    return [
          ['-h', '--help', 'No useful helps yet !']
         ,['-v', '--version', 'FunTang Compiler ver '+__VERSION__+' .']
         ,['-o', '--output OUTPUT', 'Output the compiled CoffeeScript to the specific path.']
         ,['-i', '--input INPUT', 'Specific the source FunTang file.']
         ,['-a', '--with-adt [ADT]', 'Output the ADT at the specific path for debugging.  ']
    ];
}


main();
