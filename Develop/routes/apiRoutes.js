// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require("path");
const util = require("util");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  let notesList = [];

  function saveNotesList(newNotesList) {
    //Check if folder exists
    fs.existsSync(dBPath_dir) || fs.mkdirSync(dBPath_dir);
    // Create output file
    writeFileAsync(
      dBPath,
      JSON.stringify(newNotesList),
      { flag: "w" },
      (err) => {
        if (err) throw err;
        console.log("Succesfully saved new note");
      }
    );
  }

  // API GET Requests
  // Below code handles when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function (req, res) {
    // Should return the `db.json` file and return all saved notes as JSON.
    res.send(readNotesList());
    res.end;
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  //------------------------------------------------------------------------

  app.post("/api/notes", function (req, res) {
    let noteId = uuidv4();
    let newNote = req.body;
    newNote.id = noteId;
    notesList = readNotesList();
    notesList.push(newNote);
    saveNotesList(notesList);
    res.json(true);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let noteId = req.params.id;
    noteList = readNotesList();
    const updatedNotesList = notesList.filter((note) => note.id !== noteId);

    saveNotesList(updatedNotesList);
    res.send("Deleted");
  });
};
