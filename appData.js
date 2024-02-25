const fs = require("fs");

const ADD = (id, Fname, Lname, age, city) => {
  const appData = loadData();

  const duplicated = appData.filter((obj) => {
    return obj.id === id;
  });

  if (duplicated.length == 0) {
    appData.push({
      id: id,
      Fname: Fname,
      Lname: Lname,
      age: age,
      city: city,
    });

    savaData(appData);
  } else {
    console.log("ID is duplicated in the data");
  }
};

const loadData = () => {
  try {
    const DataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(DataJson);
  } catch {
    return [];
  }
};

const savaData = (appData) => {
  const AppDataJson = JSON.stringify(appData);
  fs.writeFileSync("data.json", AppDataJson);
};

const DELETE = (id) => {
  const appData = loadData();

  const keepData = appData.filter((obj) => {
    return obj.id !== id;
  });
  savaData(keepData);

  console.log("An item was deleted successfully");
};

const READ = (id) => {
  const appData = loadData();

  const neededData = appData.find((obj) => {
    return obj.id == id;
  });

  if (neededData) {
    console.log(
      neededData.id," : ",
      neededData.Fname," : ",
      neededData.Lname," : ",
      neededData.age," : ",
      neededData.city
    );
  } else {
    console.log("The item you ordered does not exist");
  }
};

const LIST = () => {
  const appData = loadData();

  appData.forEach((obj) => {
    console.log(obj.Fname, obj.Lname," : ", obj.age," : ",obj.city);
  });
};

module.exports = {
  ADD,
  DELETE,
  READ,
  LIST,
};
