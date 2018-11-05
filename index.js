const Utils = require("@ijo-sm/utils");

module.exports = function(path) {
	if(path.startsWith("src/")) {
        return require(Utils.path.resolve("./" + path));
    }

    return require(path);
}