const path = require('path');
const fs = require('fs');

module.exports = {
  obterDados
};

function obterDados() {
  return new Promise((resolve, reject) => {
    const arquivo = path.join(__dirname, 'dados.json');

    fs.readFile(arquivo, 'utf8', (err, content) => {
      if(err) {
        reject(err);
        return;
      }

      const dados = JSON.parse(content);
      resolve(dados);
    });
  });
}
