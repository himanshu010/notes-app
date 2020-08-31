const fs = require("fs");
const chalk = require("chalk");
const { bgGreen } = require("chalk");
const { debug } = require("console");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("New Note Added"));
  } else {
    console.log(chalk.red.inverse("Note title already present"));
  }

  saveNote(notes);
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

debugger;

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.green.inverse("Note Removed"));
    fs.writeFileSync("notes.json", JSON.stringify(notesToKeep));
  } else {
    console.log(chalk.red.inverse("No Note present with this title"));
  }
};

const listNotes = () => {
  const allNotes = loadNotes();
  console.log(chalk.blue.inverse("All Notes"));
  var cnt = 0;
  allNotes.forEach((note) => {
    cnt = cnt + 1;
    console.log(
      chalk.red.inverse(cnt + ": ") + chalk.yellow.inverse(note.title)
    );
    console.log(chalk.green.inverse(note.body + "\n"));
  });
};
debugger;

const readNote = (title) => {
  const allNotes = loadNotes();
  const searchNote = allNotes.find((note) => {
    if (note.title === title) {
      return note;
    }
  });

  if (!searchNote) {
    console.log(chalk.red.inverse("Not Found"));
  } else {
    console.log(chalk.green.inverse("Found"));
    console.log(chalk.yellow.inverse(searchNote.body));
  }
};
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
