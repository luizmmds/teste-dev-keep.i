const assert = require('assert');
const obterDados = require('./dados').obterDados;

/**
 * Você deve implementar a função calcularTotalPorGrupo.
 *
 * A função recebe os dados que estão no arquivo ./dados/dados.json e precisa
 * retornar a soma do campo 'valor' agrupada pelo campo 'grupo'.
 *
 * Você não precisa se preocupar em ler dados do arquivo, a função testar() abaixo
 * já executa obterDados() que faz isto e em seguida chama a função calcularTotalPorGrupo
 * com os valores já convertidos em um array do JS.
 *
 * Exemplo:
 *  calcularTotalPorGrupo(dados); // retorna {grupo1: 8, grupo2: 20}
 */
function calcularTotalPorGrupo(dados) {
  // TODO implementar
  throw new Error('calcularTotalPorGrupo não implementada');
}

/**
 * Testes da função calculaTotalPorGrupo.
 *
 * Para executar os testes:
 * $ node dados-total-grupos.js
 */
function testar() {
  obterDados()
    .then(calcularTotalPorGrupo)
    .then(totais => {
      const totaisEsperado = {
        grupo1: 8,
        grupo2: 20
      };

      let mensagem = `Os totais são ${JSON.stringify(totais)}`;

      assert.deepEqual(
        totais,
        totaisEsperado,
        `${mensagem} (era esperado ${JSON.stringify(totaisEsperado)})`
      );

      console.log(mensagem, '✓');

      console.log('Passou em todos os testes.');
    })
    .catch(err => {
      console.error(err);
    });
}

testar();
