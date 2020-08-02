const chalk = require("chalk");
const yargs = require("yargs");
const { assertGenericTypeAnnotation } = require("babel-types");
const notes = require("./notes.js");
yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(argv.title);
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  builder: {
    title: {
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});
// console.log(process.argv);
yargs.parse();
