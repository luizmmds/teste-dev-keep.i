const assert = require('assert');

/**
 * Você deve implementar a função datasNoIntervalo.
 *
 * A função recebe dois parametros, inicio e fim, que são objetos Date do JS e
 * deve retornar uma lista (array) com todas as datas entre inicio e fim, incluindo
 * estas duas.
 *
 * Por exemplo:
 * let inicio = new Date(2017, 5, 30); // 30 de junho de 2017
 * let fim = new Date(2017, 6, 3); // 3 de julho de 2017
 * datasNoIntervalo(inicio, fim); // retorna uma lista
 *
 * A lista retornada deve conter objetos Date para os dias 2017-06-30,
 * 2017-07-01, 2017-07-02, 2017-07-03.
 */
function datasNoIntervalo(inicio, fim) {
  // TODO implementar
  throw new Error('datasNoIntervalo não implementada');
}

/**
 * Testes da função datasNoIntervalo.
 *
 * Para executar os testes:
 * $ node datas.js
 */
function testar() {
  const inicio = new Date(2017, 5, 30);
  const fim = new Date(2017, 6, 3);

  let datas = datasNoIntervalo(inicio, fim);

  const datasEsperado = [
    new Date(2017, 5, 30), new Date(2017, 6, 1),
    new Date(2017, 6, 2), new Date(2017, 6, 4)
  ];

  assert.deepEqual(datas, datasEsperado);
  console.log('A lista de datas retornada é válida', '✓');

  console.log('Passou em todos os testes.');
}

testar();
