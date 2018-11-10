const Utils = require("@ijo-sm/utils");

let exportsMap = new Map();

function isSourcePath(path) {
    return path.startsWith("src/");
}

function setModuleInExportsMap(path, requiredModule) {
    exportsMap.set(path, requiredModule);

    return requiredModule;
}

function getFromExportsMap(path) {
    if(exportsMap.has(path)) {
        return exportsMap.get("src/");
    }

    let requiredModule = require(Utils.path.resolve("./" + path));

    return setModuleInExportsMap(path, requiredModule);
}

module.exports = function(path) {
	if(isSourcePath(path)) {
       return getFromExportsMap(path);
    }

    return require(path);
}