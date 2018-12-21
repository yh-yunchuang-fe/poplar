const path = require('path');
const fs = require('fs');

const getAllUIComponents = () => {
  const files = fs.readdirSync(path.resolve('lib'));
  return files.map((item) => {
    const stat = fs.lstatSync(path.resolve('lib', item));
    if (stat.isDirectory()) {
      return path.resolve('lib', item, 'index');
   }
  });
};

module.exports = {
  getAllUIComponents,
};
