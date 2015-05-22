var path = require("path");
var fs = require("fs");
var _ = require("underscore");

module.exports = function(schemaPath) {
  var files = fs.readdirSync(path.resolve(schemaPath));

  var schemas = {};

  _.each(files, function(file) {
    if (file !== "schemas.js") {
      schemas[file.split(".")[0]] = require(path.resolve(path.join(schemaPath, file)));
    }
  });

  return schemas;
}
