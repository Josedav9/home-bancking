const fs = require("fs");

const readFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("store.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const appendFile = (data) => {
  const nuevo = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile("store.txt", nuevo, { encoding: "utf-8" }, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

const loadData = async () => {
  try {
    const data = await readFile();
    return JSON.parse(data);
  } catch (error) {
    return error;
  }
};

module.exports = {
  loadData,
  appendFile,
  readFile,
};
