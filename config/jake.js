var __BASE__   = '..';
var __CONFIG__ = 'config/jake.yaml'

require('js-yaml');
var wrench = require('wrench');
var util = require('util');
var fs = require('fs');
var sys = util;
var path = require('path');
var npm = require('npm');

// works only if js-yaml installed.
var config = require(__BASE__+"/"+__CONFIG__)[0];


// TODO: Use namespace to provide iterative publishing task.
desc('This is the default task.');
task('default', ['module','config'], function () {

});

desc('Clone configs into publish target.');
task('config', [], function () {
    
    for(var cname in config.Configs)
    {
        var cpath = __BASE__ + '/'
                  + config.Path.Config + '/'
                  + config.Configs[cname].Path;

        // Publish path.
        var ppath = __BASE__ + '/'
                  + config.Path.Publish +'/'
                  + config.Configs[cname].Publish;

        util.pump(fs.createReadStream(cpath), fs.createWriteStream(ppath));
    }
});

desc('Clone modules into publish target.');
task('module', [], function () {

    for(var mname in config.Modules)
    {
        var mpath = __BASE__ + '/'
                  + config.Path.Module + '/'
                  + config.Modules[mname].Path;

        // Publish path.
        var ppath = __BASE__ + '/'
                  + config.Path.Publish +'/'
                  + config.Modules[mname].Publish;

        // Clear old dir.
        if(path.existsSync(ppath))
        { 
            wrench.rmdirSyncRecursive(ppath);
        }
        // Build new dirs.
        wrench.mkdirSyncRecursive(ppath);
        wrench.copyDirSyncRecursive(mpath,ppath,{'preserve':false});

        if(config.Modules[mname].Binary)
        {
            var bpath = ppath+'/'+config.Modules[mname].Binary;
            fs.chmod(bpath, 0755, function(err){
                if(err)
                {
                    throw err;
                }
            });
        }
    }
});
