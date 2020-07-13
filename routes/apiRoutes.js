//import path, fs module as well as data file
var Note = require("../models/note.js"); 
const path = require("path");
const fs = require('fs');

module.exports = function(app) {

//GET all notes
//res.json() allows for extra formatting of the JSON data compared with res.send()
app.get("/api/notes", (req, res) => {
  Note.find({})
  .then(dbNote => {
	  res.json(dbNote)
  })
  .catch(err => {
	  res.status(400).json(err);
  })
});


//POST a req.body note into all notes
//res.json() used to return a response object
app.post("/api/notes", ({ body }, res) => { 
	Note.create(body)
	.then(dbNote => {
		res.json(dbNote);
	})
	.catch(err => {
		res.status(400).json(err); 
	})

});


//DELETE a specific note from all notes
//res.json() used to return a response object
app.delete("/api/notes/:id", (req, res) => {
	Note.findByIdAndRemove({id: req.params.id}, 
		function(err, docs){
		 if(err) res.json(err);
	 });
});
};
