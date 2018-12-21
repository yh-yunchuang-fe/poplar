const path = require('path');
const fs = require('fs');

const getAllUIComponents = () => {
  const files = fs.readdirSync(path.resolve('lib'));
  return files.reduce((accum, current) => {
    const stat = fs.lstatSync(path.resolve('lib', current));
    if (stat.isDirectory()) {
      const absolutePath = path.resolve('lib', current, 'index');
      return {
        ...accum,
        [current]: absolutePath,
      };
    }
    return accum;
  }, {});
};

module.exports = {
  getAllUIComponents,
};
