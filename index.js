module.exports = function(path) {
	if(path.startsWith("src/")) {
        return require("./" + path);
    }

    return require(path);
}