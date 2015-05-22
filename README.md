# Mongoose-schematic

Simplifies setup for schema inheritance, including multiple inheritance, by collection schema definitions from a file path and returning an associative array indexed by their file names.

## Example

With schema definitions in a folder such as:

```
-schemaDefinitions
  -person.js
  -employee.js
  -developer.js
```

And schema definitions formatted as:

person.js
```
module.exports = {
  "name": {type: String, default: "John Smith"}
}
```

employee.js
```
module.exports = {
  "company": {type: String, default: "ACME Corp"}
}
```

developer.js
```
module.exports = {
  "skills": {type: String, default: "ACME Corp"}
}
```

Extend schemas in mongoose like so:

```
var mongoose = require('mongoose');
var extend = require('mongoose-schema-extend');
var schematic = require("mongoose-schematic");

var Schema = mongoose.Schema;

var schemas = schematic("./schemaDefinitions");

var person = new Schema(schemas.person);
var employee = person.extend(schemas.employee);
var developer = employee.extend(schemas.developer);

module.exports = mongoose.model('Developer', developer);
```

## Note

Really this doesn't have anything to do with schemas directly, it's just a way to collect files and load their contents into an object indexed by their filename. Until I get time to rename and reupload this thing though, it is what it is.