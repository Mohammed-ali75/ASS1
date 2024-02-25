const appData = require("./appData");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "You must write the ID",
      demandOption: true,
    },
    Fname: {
      describe: "You must write the first name",
      demandOption: true,
      type: "string",
    },
    Lname: {
      describe: "You must write the last name",
      demandOption: true,
      type: "string",
    },
  },
  handler: (add) => {
    appData.ADD(add.id, add.Fname, add.Lname, add.age, add.city);
  },
});

yargs.command({
  command: "delete",
  describe: "Select the ID you want to delete",
  handler: (x) => {
    appData.DELETE(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "Select the ID you want to know",
      demandOption: true,
      type: "string",
    },
  },
  handler: (read) => {
    appData.READ(read.id);
  },
});

yargs.command({
  command: "list",
  describe: "To print data",
  handler: () => {
    appData.LIST();
  },
});

yargs.parse();
