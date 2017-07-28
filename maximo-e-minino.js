const assert = require('assert');

/**
 * Voce deve implementar as funções obterMinimo e obterMaximo.
 *
 * As duas funções recebem uma lista (array) de números inteiros e devem
 * retornar o menor e maior número da lista respectivamente.
 *
 * Por exemplo:
 *  let lista = [-1,1,2,5];
 *  obterMinimo(lista); // retorna -1
 *  obterMaximo(lista); // retorna 5
 */

function obterMinimo(lista) {
  // TODO implementar
  throw new Error('obterMinimo não implementada');
}

function obterMaximo(lista) {
  // TODO implementar
  throw new Error('obterMaximo não implementada');
}

/**
 * Testes das funções obterMinimo e obterMaximo.
 *
 * Para executar os testes:
 * $ node maximo-e-minimo.js
 */
function testar() {
  const testes = [
    {lista: [3, 5, 7, 9, 17], minimoEsperado: 3, maximoEsperado: 17},
    {lista: [0, 2, -7, 23, 14], minimoEsperado: -7, maximoEsperado: 23},
    {lista: [3], minimoEsperado: 3, maximoEsperado: 3},
    {lista: [0, 0, 0, 0], minimoEsperado: 0, maximoEsperado: 0},
    {lista: [-1, -3, -2], minimoEsperado: -3, maximoEsperado: -1},
    {lista: [-1, 1, -1, 1], minimoEsperado: -1, maximoEsperado: 1},
    {lista: [-1], minimoEsperado: -1, maximoEsperado: -1}
  ];

  testes.forEach(teste => {
    let minimo = obterMinimo(teste.lista);
    let maximo = obterMaximo(teste.lista);
    let minimoEsperado = teste.minimoEsperado;
    let maximoEsperado = teste.maximoEsperado;

    let mensagem = `para [${teste.lista}], minimo é ${minimo} e maximo é ${maximo}`;

    assert(
      minimo === minimoEsperado && maximo === maximoEsperado,
      `${mensagem} (era esperado ${minimoEsperado} e ${maximoEsperado})`
    );

    console.log(mensagem, '✓');
  });

  console.log('Passou em todos os testes.');
}

testar();
