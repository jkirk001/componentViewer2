const fs = require('fs');

const dirPath = 'src/Components';
let path = [];

const getAllFileNames = function (dirPath, arrayNames) {
  const files = fs.readdirSync(dirPath);

  arrayNames = arrayNames || [];
  let index = 0;

  for (let item of files) {
    index++;
    if (!item.includes('.js')) {
      path.push(item);
      getAllFileNames(`${dirPath}/${item}`, arrayNames);
    } else {
      let pathString = './';
      for (let each of path) {
        pathString = pathString + each + '/';
      }
      arrayNames.push(`${pathString}${item}`);
      if (index === files.length) {
        path = [];
      }
    }
  }
  return arrayNames;
};

const fileNameArray = getAllFileNames(dirPath);

function lol(fileNames) {
  /*const test = fs
    .readdirSync('src/Components/')
    .map((item) => {
      return item.replace('.js', '');
    })
    .filter((item) => {
      if (item === 'index') return false;
      return true;
    });*/
  //!removes index
  fileNames = fileNames.filter((item) => {
    if (item === './index.js' || item === './BuildView.js') return false;
    return true;
  });
  //! widles down to component name
  const arrayOfImports = fileNames
    .map((item) => {
      return item.replace('.js', '');
    })
    .map((item) => {
      return item.substring(item.lastIndexOf('/') + 1);
    });

  //! set us final string

  let imports = '';
  let exports = '';
  let index = 0;
  for (let each of arrayOfImports) {
    if (!fileNames[index].includes('../')) {
      imports += `import ${each} from "${fileNames[index]}";\n`;
    } else {
      imports += `import ${each} from "${fileNames[index]}";\n`;
    }
    exports += `${each},`;
    index++;
  }

  exports = `export const items = [${exports}]\n`;

  const final = `${imports}${exports}`;

  console.log(final);

  //!Writes String to file

  fs.writeFile('src/Components/index.js', final, (err) => {
    console.log('yeeeee write the Component index');
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
}

lol(fileNameArray);
