const assert = require('assert');

/**
 * Você deve implementar a funcão calcularX.
 *
 * A função encontra a raiz (valor de x) de
 * equações do primeiro grau no formato ax + b = r.
 *
 * Por exemplo, dada a função calcularX(a, b, r):
 * Para 2x + 1 = 0, temos a=2, b=1, r=0, calcularX(2, 1, 0) deve retornar -0.5.
 * Para 2x + 1 = 1, temos a=2, b=1, r=1, calcularX(2, 1, 1) deve retornar 0.
 * Etc. (ver testes)
 *
 */
function calcularX(a, b, r) {
  // TODO implementar
  throw new Error('calcularX não implementada');
}

/**
 * Testes da função calcularX.
 *
 * Para executar os testes:
 * $ node equacao-primeiro-grau.js
 */
function testar() {
  const testes = [
    {equacao: '2x + 1 = 0', a: 2, b: 1, r: 0, xEsperado: -0.5},
    {equacao: '2x + 1 = 1', a: 2, b: 1, r: 1, xEsperado: 0},
    {equacao: '3x + 1 = 10', a: 3, b: 1, r: 10, xEsperado: 3},
    {equacao: '4x + 2 = 2', a: 4, b: 2, r: 2, xEsperado: 0},
    {equacao: 'x + 3 = 0', a: 1, b: 3, r: 0, xEsperado: -3},
    {equacao: '-5x - 10 = 0', a: -5, b: -10, r: 0, xEsperado: -2},
    {equacao: '-5x - 0 = -10', a: -5, b: 0, r: -10, xEsperado: 2}
  ];

  testes.forEach(teste => {
    let x = calcularX(teste.a, teste.b, teste.r);
    let xEsperado = teste.xEsperado;

    let mensagem = `para ${teste.equacao}, x é ${x}`;

    assert(x === xEsperado, `${mensagem} (era esperado ${xEsperado})`);

    console.log(mensagem, '✓');
  });

  console.log('Passou em todos os testes.');
}

testar();
