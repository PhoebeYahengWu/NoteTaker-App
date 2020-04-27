//import path module
const path = require("path");

//use an absolute path directly with res.sendFile
//__dirname returns the directory that the currently executing script is in
module.exports = function(app) {
	app.get("/", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/index.html"));
});

	app.get("/notes", function(req, res) {
  	res.sendFile(path.join(__dirname, "../public/notes.html"));
});
};