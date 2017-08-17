const assert = require('assert');
const obterDados = require('./dados').obterDados;

/**
 * Você deve implementar a função calcularTotal.
 *
 * A função recebe os dados que estão no arquivo ./dados/dados.json e precisa
 * retornar a soma do campo 'valor' de todas as linhas.
 *
 * Você não precisa se preocupar em ler dados do arquivo, a função testar() abaixo
 * já executa obterDados() que faz isto e em seguida chama a função calcularTotal
 * com os valores já convertidos em um array do JS.
 *
 * Exemplo:
 *  calcularTotal(dados); // retorna 28
 */
function calcularTotal(dados) {
  var total = 0;
  dados.forEach(function(item){
    total += item.valor;
  })
  return total;
}

/**
 * Testes da função calculaTotal.
 *
 * Para executar os testes:
 * $ node dados-total.js
 */
function testar() {
  obterDados()
    .then(calcularTotal)
    .then(total => {
      const totalEsperado = 28;
      let mensagem = `O total é ${total}`;

      assert(
        total === totalEsperado,
        `${mensagem} (era esperado ${totalEsperado})`
      );

      console.log(mensagem, '✓');

      console.log('Passou em todos os testes.');
    })
    .catch(err => {
      console.error(err);
    });
}

testar();
