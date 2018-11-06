const Utils = require("@ijo-sm/utils");

let exportsMap = new Map();

module.exports = function(path) {
	if(path.startsWith("src/")) {
        if(exportsMap.has(path)) {
            return exportsMap.get("src/");
        }

        return exportsMap.set(path, require(Utils.path.resolve("./" + path))).get(path);
    }

    return require(path);
}