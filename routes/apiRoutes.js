//import path, fs module as well as data file
var notes = require("../db/db.json");
const path = require("path");
const fs = require('fs');

module.exports = function(app) {

//GET all notes
//res.json() allows for extra formatting of the JSON data compared with res.send()
app.get("/api/notes", function(req, res) {
  return res.json(notes);
});


//POST a req.body note into all notes
//res.json() used to return a response object
app.post("/api/notes", function(req, res) {
  notes.push(req.body);
  res.json(true);
  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
	  if (err) throw err;
	  console.log('New note saved');
  });
});


//DELETE a specific note from all notes
//res.json() used to return a response object
app.delete("/api/notes/:id", function(req, res) {
	var noteID = req.params.id;
	notes = notes.filter(x => x.id != noteID);
	fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
	  if (err) throw err;
	  console.log('Filtered note saved');
	});
  res.json(true);
});
};